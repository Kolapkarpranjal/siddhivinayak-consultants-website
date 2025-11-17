/**
 * MongoDB Connection Diagnostic Script
 * Run this to check your MongoDB connection configuration
 */

require('dotenv').config();
const mongoose = require('mongoose');

console.log('🔍 MongoDB Connection Diagnostic Tool\n');
console.log('='.repeat(50));

// Check if .env file exists and MONGODB_URI is set
console.log('\n1. Checking Environment Variables:');
console.log('   MONGODB_URI is set:', !!process.env.MONGODB_URI);

if (!process.env.MONGODB_URI) {
  console.log('   ❌ MONGODB_URI is not set in .env file');
  console.log('   💡 Create a .env file in the backend folder with:');
  console.log('      MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority');
  process.exit(1);
} else {
  // Show connection string preview (hide password)
  const uriPreview = process.env.MONGODB_URI.replace(/:[^:@]+@/, ':****@');
  console.log('   ✅ MONGODB_URI is set');
  console.log('   🔗 Connection string:', uriPreview);
  
  // Check if it's Atlas or local
  if (process.env.MONGODB_URI.includes('mongodb+srv://')) {
    console.log('   📍 Type: MongoDB Atlas (Cloud)');
  } else if (process.env.MONGODB_URI.includes('mongodb://')) {
    console.log('   📍 Type: Local MongoDB');
  }
  
  // Check database name
  const dbMatch = process.env.MONGODB_URI.match(/\/([^?\/]+)(\?|$)/);
  if (dbMatch) {
    const dbName = dbMatch[1];
    console.log('   📊 Database name:', dbName);
    if (dbName !== 'siddhivinayak_db') {
      console.log('   ⚠️  Warning: Database name is not "siddhivinayak_db"');
    }
  }
}

// Try to connect
console.log('\n2. Testing Connection:');
console.log('   Attempting to connect...');

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
})
  .then(() => {
    console.log('   ✅ Connection successful!');
    console.log('   📊 Database:', mongoose.connection.name);
    console.log('   🔗 Host:', mongoose.connection.host);
    console.log('   ✅ Ready to use!');
    process.exit(0);
  })
  .catch((err) => {
    console.log('   ❌ Connection failed!');
    console.log('   📋 Error:', err.message);
    console.log('\n💡 Troubleshooting:');
    
    if (err.message.includes('authentication failed') || err.code === 8000) {
      console.log('   → ❌ AUTHENTICATION FAILED - Username or password is incorrect!');
      console.log('   → Go to MongoDB Atlas → Database Access');
      console.log('   → Verify your username and password');
      console.log('   → If password has special characters, URL-encode them:');
      console.log('     @ → %40, # → %23, % → %25, & → %26, + → %2B, Space → %20');
    } else if (err.message.includes('ENOTFOUND') || err.message.includes('getaddrinfo')) {
      console.log('   → Check your cluster URL/hostname');
      console.log('   → Verify your MongoDB Atlas cluster is not paused');
    } else if (err.message.includes('IP') || err.message.includes('whitelist')) {
      console.log('   → Add your IP address to MongoDB Atlas Network Access');
      console.log('   → Or use "Allow Access from Anywhere" (0.0.0.0/0) for development');
    } else if (err.message.includes('timeout')) {
      console.log('   → Check your internet connection');
      console.log('   → Verify MongoDB Atlas cluster is running');
      console.log('   → Check firewall settings');
    } else {
      console.log('   → Verify your connection string is correct');
      console.log('   → Check MongoDB Atlas cluster status');
      console.log('   → Verify Network Access settings');
    }
    
    process.exit(1);
  });

