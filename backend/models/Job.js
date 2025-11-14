const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship'],
    default: 'full-time'
  },
  category: {
    type: String,
    enum: [
      'Engineering',
      'Automobile',
      'Pharmaceutical',
      'Food',
      'Chemical',
      'Civil',
      'Glass',
      'Paper',
      'Polymer',
      'BPO',
      'ITES',
      'Telecom',
      'Banking',
      'Hospitality',
      'Healthcare',
      'Medical',
      'Secretary',
      'Front Office',
      'Data Entry'
    ],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  requirements: [{
    type: String
  }],
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'INR'
    }
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'closed', 'archived'],
    default: 'draft'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CV'
  }],
  views: {
    type: Number,
    default: 0
  },
  expiresAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);

