# Siddhivinayak Employment Services - Backend API

A professional Node.js backend API for managing employment services, built with Express and MongoDB.

## Features

- 🔐 JWT-based authentication
- 👥 User management (Admin/Staff roles)
- 📧 Contact form submissions
- 📄 CV/Resume submissions with file upload
- 💼 Job posting and management
- 📊 Admin dashboard with statistics
- 🛡️ Role-based access control

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
- MongoDB connection string
- JWT secret key
- Admin credentials

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## Default Admin Credentials

After first run, a default admin user will be created:
- **Email**: admin@siddhivinayak.com (or as set in .env)
- **Password**: admin123 (or as set in .env)

⚠️ **Important**: Change the default password after first login!

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password

### Admin (Protected)
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/contacts` - Get all contacts
- `PUT /api/admin/contacts/:id` - Update contact status
- `GET /api/admin/cvs` - Get all CVs
- `PUT /api/admin/cvs/:id` - Update CV status
- `GET /api/admin/jobs` - Get all jobs
- `POST /api/admin/jobs` - Create job
- `PUT /api/admin/jobs/:id` - Update job
- `DELETE /api/admin/jobs/:id` - Delete job

### Public
- `POST /api/contact` - Submit contact form
- `POST /api/cv` - Submit CV (with file upload)
- `GET /api/jobs` - Get active jobs
- `GET /api/jobs/:id` - Get single job

## Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@siddhivinayak.com
ADMIN_PASSWORD=admin123
```

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads

## License

ISC

