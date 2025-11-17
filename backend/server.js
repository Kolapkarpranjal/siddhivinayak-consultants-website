const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');
const cvRoutes = require('./routes/cv');
const jobRoutes = require('./routes/jobs');
const consultationRoutes = require('./routes/consultation');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://siddhivinayak-consultants.netlify.app',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/siddhivinayak_db';

// Debug: Check if .env is loaded (don't log the full connection string for security)
console.log('🔍 Checking MongoDB connection...');
console.log('📝 MONGODB_URI is set:', !!process.env.MONGODB_URI);
if (process.env.MONGODB_URI) {
  const uriPreview = process.env.MONGODB_URI.replace(/:[^:@]+@/, ':****@');
  console.log('🔗 Connection string:', uriPreview);
}

mongoose.connect(mongoURI)
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
  // Initialize default admin user
  require('./config/initAdmin')();
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
  console.error('📋 Full error details:', err);
  console.error('\n💡 Troubleshooting tips:');
  console.error('   1. Check if MongoDB Atlas cluster is running (not paused)');
  console.error('   2. Verify Network Access allows your IP (or "Allow Access from Anywhere")');
  console.error('   3. Check username and password in connection string');
  console.error('   4. Ensure database name is correct: siddhivinayak_db');
  process.exit(1);
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Siddhivinayak Consultants API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth/login',
      admin: '/api/admin/*',
      contact: '/api/contact',
      cv: '/api/cv',
      jobs: '/api/jobs',
      consultation: '/api/consultation'
    },
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/consultation', consultationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Siddhivinayak API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

