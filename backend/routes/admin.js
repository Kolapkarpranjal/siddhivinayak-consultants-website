const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const Contact = require('../models/Contact');
const CV = require('../models/CV');
const Job = require('../models/Job');
const User = require('../models/User');
const Consultation = require('../models/Consultation');

const router = express.Router();

// All routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// @route   GET /api/admin/dashboard
// @desc    Get dashboard statistics
// @access  Private/Admin
router.get('/dashboard', async (req, res) => {
  try {
    const [
      totalContacts,
      newContacts,
      totalCVs,
      pendingCVs,
      totalJobs,
      activeJobs,
      totalUsers
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
      CV.countDocuments(),
      CV.countDocuments({ status: 'pending' }),
      Job.countDocuments(),
      Job.countDocuments({ status: 'active' }),
      User.countDocuments()
    ]);

    // Get recent activities
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email subject status createdAt');

    const recentCVs = await CV.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('firstName lastName email position status createdAt');

    // Get daily statistics for last 14 days (including today)
    const dailyStats = [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Start from 13 days ago and go up to today (14 days total)
    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      
      // For today, use current time instead of end of day
      const endDate = i === 0 ? now : nextDate;
      
      const [contactsCount, cvsCount, consultationsCount] = await Promise.all([
        Contact.countDocuments({
          createdAt: {
            $gte: date,
            $lt: endDate
          }
        }),
        CV.countDocuments({
          createdAt: {
            $gte: date,
            $lt: endDate
          }
        }),
        Consultation.countDocuments({
          createdAt: {
            $gte: date,
            $lt: endDate
          }
        })
      ]);
      
      dailyStats.push({
        date: date.toISOString().split('T')[0],
        contacts: contactsCount,
        cvs: cvsCount,
        consultations: consultationsCount,
        total: contactsCount + cvsCount + consultationsCount
      });
    }

    res.json({
      success: true,
      data: {
        statistics: {
          contacts: {
            total: totalContacts,
            new: newContacts
          },
          cvs: {
            total: totalCVs,
            pending: pendingCVs
          },
          jobs: {
            total: totalJobs,
            active: activeJobs
          },
          users: {
            total: totalUsers
          }
        },
        recent: {
          contacts: recentContacts,
          cvs: recentCVs
        },
        dailyStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/admin/contacts
// @desc    Get all contacts
// @access  Private/Admin
router.get('/contacts', async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/admin/contacts/:id
// @desc    Update contact status
// @access  Private/Admin
router.put('/contacts/:id', async (req, res) => {
  try {
    const { status, isRead } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, isRead, ...(status === 'replied' && { repliedAt: new Date() }) },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
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

// @route   GET /api/admin/cvs
// @desc    Get all CVs
// @access  Private/Admin
router.get('/cvs', async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};

    const cvs = await CV.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('reviewedBy', 'name email');

    const total = await CV.countDocuments(query);

    res.json({
      success: true,
      data: {
        cvs,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/admin/cvs/:id
// @desc    Update CV status
// @access  Private/Admin
router.put('/cvs/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;
    const cv = await CV.findByIdAndUpdate(
      req.params.id,
      {
        status,
        notes,
        reviewedBy: req.user._id,
        reviewedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!cv) {
      return res.status(404).json({
        success: false,
        message: 'CV not found'
      });
    }

    res.json({
      success: true,
      data: cv
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/admin/consultations
// @desc    Get all consultations
// @access  Private/Admin
router.get('/consultations', async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};

    const consultations = await Consultation.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Consultation.countDocuments(query);

    res.json({
      success: true,
      data: {
        consultations,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/admin/consultations/:id
// @desc    Update consultation status
// @access  Private/Admin
router.put('/consultations/:id', async (req, res) => {
  try {
    const { status, isRead, scheduledAt } = req.body;
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { status, isRead, scheduledAt },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
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

// @route   GET /api/admin/jobs
// @desc    Get all jobs with search, filters, and stats
// @access  Private/Admin
router.get('/jobs', async (req, res) => {
  try {
    const { status, category, search, dateFrom, dateTo, page = 1, limit = 100 } = req.query;
    
    // Build query
    const query = {};
    
    // Status filter
    if (status && status !== 'all') {
      query.status = status;
    }
    
    // Category filter
    if (category && category !== 'all') {
      query.category = category;
    }
    
    // Date range filter
    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) {
        query.createdAt.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        query.createdAt.$lte = new Date(dateTo);
      }
    }
    
    // Search filter (title, location, or keywords)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('postedBy', 'name email')
      .populate('applications', 'firstName lastName email');

    const total = await Job.countDocuments(query);
    
    // Get statistics
    const totalJobs = await Job.countDocuments();
    const activeJobs = await Job.countDocuments({ status: 'active' });
    const totalApplications = await Job.aggregate([
      { $project: { applicationCount: { $size: { $ifNull: ['$applications', []] } } } },
      { $group: { _id: null, total: { $sum: '$applicationCount' } } }
    ]);
    const applicationsCount = totalApplications.length > 0 ? totalApplications[0].total : 0;

    res.json({
      success: true,
      data: {
        jobs,
        stats: {
          totalJobs,
          activeJobs,
          applicationsReceived: applicationsCount
        },
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/admin/jobs
// @desc    Create new job
// @access  Private/Admin
router.post('/jobs', async (req, res) => {
  try {
    const jobData = {
      ...req.body,
      postedBy: req.user._id
    };

    const job = await Job.create(jobData);

    res.status(201).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/admin/jobs/:id
// @desc    Update job
// @access  Private/Admin
router.put('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    res.json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PATCH /api/admin/jobs/:id/toggle-status
// @desc    Toggle job status (active/draft/closed)
// @access  Private/Admin
router.patch('/jobs/:id/toggle-status', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Toggle status: draft -> active -> closed -> draft
    const statusFlow = {
      'draft': 'active',
      'active': 'closed',
      'closed': 'draft',
      'archived': 'draft'
    };

    job.status = statusFlow[job.status] || 'draft';
    job.updatedAt = new Date();
    await job.save();

    res.json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   DELETE /api/admin/jobs/:id
// @desc    Delete job
// @access  Private/Admin
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    res.json({
      success: true,
      message: 'Job deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/admin/jobs/categories
// @desc    Get list of available job categories
// @access  Private/Admin
router.get('/jobs/categories', async (req, res) => {
  try {
    const categories = [
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
    ];

    res.json({
      success: true,
      data: categories
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

