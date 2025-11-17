// Optional nodemailer - won't crash if not installed
let nodemailer = null;
try {
  nodemailer = require('nodemailer');
} catch (error) {
  console.warn('⚠️ Nodemailer not available - email functionality disabled');
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  if (!nodemailer) {
    throw new Error('Nodemailer is not installed');
  }
  // For development, you can use Gmail or any SMTP service
  // For production, use a service like SendGrid, Mailgun, or AWS SES
  
  // Gmail example (requires app password)
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD // Use App Password, not regular password
      }
    });
  }
  
  // Generic SMTP (works with most email providers)
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
  
  // Default: Use Ethereal Email for testing (no real emails sent)
  // This is useful for development when you don't have email configured
  return nodemailer.createTransporter({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass'
    }
  });
};

// Send contact form confirmation email to user
exports.sendContactConfirmation = async (contactData) => {
  if (!nodemailer) {
    console.warn('⚠️ Email service not available - nodemailer not installed');
    return { success: false, error: 'Email service not configured' };
  }
  
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Siddhivinayak Consultants'}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: contactData.email,
      subject: 'Thank You for Contacting Siddhivinayak Consultants',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${contactData.name},</p>
              
              <p>We have received your message and appreciate you reaching out to <strong>Siddhivinayak Consultants</strong>.</p>
              
              <div class="message-box">
                <p><strong>Your Message:</strong></p>
                <p>${contactData.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
              
              ${contactData.phone ? `<p><strong>Your Contact:</strong> ${contactData.phone}</p>` : ''}
              
              <p>If you have any urgent requirements, please feel free to call us directly.</p>
              
              <p>Best regards,<br>
              <strong>Siddhivinayak Consultants Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this message.</p>
              <p>&copy; ${new Date().getFullYear()} Siddhivinayak Consultants. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Thank You for Contacting Siddhivinayak Consultants
        
        Dear ${contactData.name},
        
        We have received your message and appreciate you reaching out to Siddhivinayak Consultants.
        
        Your Message:
        ${contactData.message}
        
        Our team will review your inquiry and get back to you within 24 hours.
        
        ${contactData.phone ? `Your Contact: ${contactData.phone}` : ''}
        
        Best regards,
        Siddhivinayak Consultants Team
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending contact confirmation email:', error);
    // Don't throw error - email failure shouldn't break the contact submission
    return { success: false, error: error.message };
  }
};

// Send notification email to admin about new contact
exports.sendAdminNotification = async (contactData) => {
  if (!nodemailer) {
    console.warn('⚠️ Email service not available - nodemailer not installed');
    return { success: false, error: 'Email service not configured' };
  }
  
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Siddhivinayak Consultants'}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🔔 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="info-box">
                <p><strong>Name:</strong> ${contactData.name}</p>
                <p><strong>Email:</strong> ${contactData.email}</p>
                ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
                <p><strong>Date:</strong> ${new Date(contactData.createdAt || new Date()).toLocaleString()}</p>
              </div>
              
              <div class="message-box">
                <p><strong>Message:</strong></p>
                <p>${contactData.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p style="text-align: center; margin-top: 30px;">
                <a href="${process.env.ADMIN_PANEL_URL || 'http://localhost:3000/admin/contacts'}" 
                   style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  View in Admin Panel
                </a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending admin notification email:', error);
    return { success: false, error: error.message };
  }
};




