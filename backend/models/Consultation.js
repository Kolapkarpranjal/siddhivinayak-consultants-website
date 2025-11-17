const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'scheduled', 'completed', 'archived'],
    default: 'new'
  },
  isRead: {
    type: Boolean,
    default: false
  },
  scheduledAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Consultation', consultationSchema);

