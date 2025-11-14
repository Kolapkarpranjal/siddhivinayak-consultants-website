# Admin Panel Setup Guide

## Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```bash
cp .env.example .env
```

4. **Update `.env` with your configuration:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@siddhivinayak.com
ADMIN_PASSWORD=admin123
```

5. **Make sure MongoDB is running:**
- Install MongoDB if not already installed
- Start MongoDB service
- Or use MongoDB Atlas (cloud) and update MONGODB_URI

6. **Start the backend server:**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install axios (if not already installed):**
```bash
npm install axios
```

3. **Start the frontend:**
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Accessing Admin Panel

1. Open your browser and go to: `http://localhost:3000/admin/login`

2. **Default Login Credentials:**
   - Email: `admin@siddhivinayak.com`
   - Password: `admin123`

3. **⚠️ IMPORTANT:** Change the default password after first login!

## Admin Panel Features

### Dashboard
- View statistics (Contacts, CVs, Jobs, Users)
- Recent contacts and CVs
- Quick overview of system activity

### Contacts Management
- View all contact form submissions
- Filter by status (new, read, replied, archived)
- Update contact status
- View contact details

### CV Management
- View all CV submissions
- Filter by status (pending, reviewed, shortlisted, rejected)
- Update CV status
- Add notes
- Download/view CV files

### Jobs Management
- Create new job postings
- Edit existing jobs
- Delete jobs
- Manage job status (draft, active, closed)
- View job applications

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password

### Admin (Protected)
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/contacts` - Get all contacts
- `PUT /api/admin/contacts/:id` - Update contact
- `GET /api/admin/cvs` - Get all CVs
- `PUT /api/admin/cvs/:id` - Update CV
- `GET /api/admin/jobs` - Get all jobs
- `POST /api/admin/jobs` - Create job
- `PUT /api/admin/jobs/:id` - Update job
- `DELETE /api/admin/jobs/:id` - Delete job

## Security Notes

1. **Change default admin password** immediately after first login
2. **Use strong JWT_SECRET** in production
3. **Enable HTTPS** in production
4. **Set proper CORS** settings for production
5. **Regular database backups**
6. **Keep dependencies updated**

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGODB_URI in .env file
- Verify MongoDB port (default: 27017)

### Authentication Issues
- Check JWT_SECRET in .env
- Verify token is being sent in headers
- Check token expiration

### File Upload Issues
- Ensure `uploads/cvs` directory exists
- Check file size limits (5MB default)
- Verify file types (PDF, DOC, DOCX)

## Next Steps

1. Customize admin panel styling
2. Add more features (email notifications, reports, etc.)
3. Set up production environment
4. Configure email service for notifications
5. Add user management features

