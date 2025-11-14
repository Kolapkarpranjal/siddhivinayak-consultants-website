const User = require('../models/User');

const initAdmin = async () => {
  try {
    const adminCount = await User.countDocuments({ role: 'admin' });
    
    if (adminCount === 0) {
      const admin = new User({
        name: 'Admin',
        email: process.env.ADMIN_EMAIL || 'admin@siddhivinayak.com',
        password: process.env.ADMIN_PASSWORD || 'admin123',
        role: 'admin',
        isActive: true
      });

      await admin.save();
      console.log('✅ Default admin user created');
      console.log(`   Email: ${admin.email}`);
      console.log(`   Password: ${process.env.ADMIN_PASSWORD || 'admin123'}`);
      console.log('   ⚠️  Please change the default password after first login!');
    }
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  }
};

module.exports = initAdmin;

