const express = require('express');
const { body, validationResult } = require('express-validator');
const Consultation = require('../models/Consultation');

const router = express.Router();

// @route   GET /api/consultation/test
// @desc    Test consultation route
// @access  Public
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Consultation route is working!'
  });
});

// @route   POST /api/consultation
// @desc    Submit consultation request
// @access  Public
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('company').optional().trim(),
  body('service').optional().trim(),
  body('message').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const consultation = await Consultation.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Thank you for your consultation request! We will contact you within 24 hours.',
      data: consultation
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

