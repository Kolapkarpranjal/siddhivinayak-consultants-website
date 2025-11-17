const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Import routes with error handling
let authRoutes, adminRoutes, contactRoutes, cvRoutes, jobRoutes, consultationRoutes;
try {
  authRoutes = require('./routes/auth');
  adminRoutes = require('./routes/admin');
  contactRoutes = require('./routes/contact');
  cvRoutes = require('./routes/cv');
  jobRoutes = require('./routes/jobs');
  consultationRoutes = require('./routes/consultation');
  console.log('✅ All routes loaded successfully');
} catch (error) {
  console.error('❌ Error loading routes:', error.message);
  console.error('📋 Full error:', error);
  process.exit(1);
}

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

// Connect to MongoDB with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    console.log('✅ MongoDB Connected Successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(`🔗 Host: ${mongoose.connection.host}`);
    // Initialize default admin user
    require('./config/initAdmin')();
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    
    // Provide specific guidance based on error type
    if (err.code === 8000 || err.message.includes('Authentication failed') || err.message.includes('bad auth')) {
      console.error('\n🔐 AUTHENTICATION ERROR - Your username or password is incorrect!');
      console.error('\n💡 How to fix:');
      console.error('   1. Go to MongoDB Atlas → Database Access');
      console.error('   2. Check your database user username');
      console.error('   3. If you forgot the password, click "Edit" → "Edit Password"');
      console.error('   4. Update your .env file with the correct credentials');
      console.error('   5. ⚠️  IMPORTANT: If password has special characters, URL-encode them:');
      console.error('      - @ → %40');
      console.error('      - # → %23');
      console.error('      - % → %25');
      console.error('      - & → %26');
      console.error('      - + → %2B');
      console.error('      - Space → %20 or +');
      console.error('\n   Example connection string format:');
      console.error('   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority');
    } else {
      console.error('📋 Full error details:', err);
      console.error('\n💡 Troubleshooting tips:');
      console.error('   1. Check if MongoDB Atlas cluster is running (not paused)');
      console.error('   2. Verify Network Access allows your IP (or "Allow Access from Anywhere")');
      console.error('   3. Check username and password in connection string');
      console.error('   4. Ensure database name is correct: siddhivinayak_db');
      console.error('   5. Verify MONGODB_URI in .env file exists and is correct');
    }
    
    console.error('\n⚠️  Server will continue to run, but database operations will fail.');
    console.error('   Retrying connection in 5 seconds...');
    
    // Retry connection after 5 seconds
    setTimeout(() => {
      connectDB();
    }, 5000);
  }
};

// Start MongoDB connection (non-blocking)
connectDB();

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
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ 
    status: 'OK', 
    message: 'Siddhivinayak API is running',
    database: dbStatus,
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

