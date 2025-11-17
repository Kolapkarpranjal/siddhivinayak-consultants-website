const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Optional email service - won't crash if nodemailer is not available
let emailService = null;
try {
  emailService = require('../utils/emailService');
} catch (error) {
  console.warn('⚠️ Email service not available:', error.message);
}

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

    // Send confirmation email to user (non-blocking) - only if email service is available
    if (emailService && emailService.sendContactConfirmation) {
      emailService.sendContactConfirmation(contact).catch(err => {
        console.error('Failed to send confirmation email:', err);
      });
    }

    // Send notification email to admin (non-blocking) - only if email service is available
    if (emailService && emailService.sendAdminNotification) {
      emailService.sendAdminNotification(contact).catch(err => {
        console.error('Failed to send admin notification:', err);
      });
    }

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

