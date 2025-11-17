const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendContactConfirmation, sendAdminNotification } = require('../utils/emailService');

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const contact = await Contact.create(req.body);

    // Send confirmation email to user (non-blocking)
    sendContactConfirmation(contact).catch(err => {
      console.error('Failed to send confirmation email:', err);
    });

    // Send notification email to admin (non-blocking)
    sendAdminNotification(contact).catch(err => {
      console.error('Failed to send admin notification:', err);
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;

