# Email Configuration Guide

## Setting Up Email Service

The contact form now sends confirmation emails to users and notification emails to admins. You need to configure email settings in your `.env` file.

### Option 1: Gmail (Easiest for Development)

1. **Enable 2-Step Verification** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Copy the 16-character password

3. **Add to `.env` file**:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_FROM_NAME=Siddhivinayak Consultants
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PANEL_URL=http://localhost:3000/admin/contacts
```

### Option 2: Generic SMTP (Works with most email providers)

Add to `.env` file:
```env
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=your-email@yourdomain.com
EMAIL_FROM_NAME=Siddhivinayak Consultants
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PANEL_URL=http://localhost:3000/admin/contacts
```

### Option 3: Production Services (Recommended for Production)

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Siddhivinayak Consultants
ADMIN_EMAIL=admin@yourdomain.com
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=postmaster@yourdomain.mailgun.org
EMAIL_PASSWORD=your-mailgun-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Siddhivinayak Consultants
ADMIN_EMAIL=admin@yourdomain.com
```

### Testing Email Configuration

1. Restart your backend server after updating `.env`
2. Submit a contact form
3. Check:
   - User receives confirmation email
   - Admin receives notification email
   - Check backend console for any email errors

### Troubleshooting

- **"Authentication failed"**: Check your email/password
- **"Connection timeout"**: Check SMTP host and port
- **"No emails sent"**: Check backend console logs for errors
- **Gmail issues**: Make sure you're using App Password, not regular password

### Note

If email is not configured, the contact form will still work, but emails won't be sent. Check the backend console for email errors.




