# Troubleshooting Guide - Admin Login Issues

## Common Login Errors and Solutions

### 1. "Cannot connect to server" or "Network Error"

**Problem:** Backend server is not running or not accessible.

**Solution:**
1. Make sure you're in the `backend` directory
2. Check if server is running:
   ```bash
   cd backend
   npm run dev
   ```
3. You should see: `🚀 Server running on port 5000`
4. If you see MongoDB connection errors, see section 2 below

### 2. MongoDB Connection Error

**Problem:** Cannot connect to MongoDB database.

**Solution:**
1. **Check if MongoDB is installed and running:**
   - Windows: Check Services for "MongoDB"
   - Mac: `brew services list` or check Activity Monitor
   - Linux: `sudo systemctl status mongod`

2. **Start MongoDB:**
   - Windows: Start MongoDB service from Services
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

3. **Or use MongoDB Atlas (Cloud):**
   - Create free account at https://www.mongodb.com/cloud/atlas
   - Get connection string
   - Update `MONGODB_URI` in `.env` file

4. **Check `.env` file:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```

### 3. "Invalid credentials" Error

**Problem:** Admin user doesn't exist or password is wrong.

**Solution:**
1. **Check if admin user was created:**
   - When server starts, you should see: `✅ Default admin user created`
   - If not, the admin user might not exist

2. **Create admin user manually:**
   - Option 1: Delete the database and restart server (admin will be auto-created)
   - Option 2: Use MongoDB Compass or mongo shell:
     ```javascript
     use siddhivinayak_db
     db.users.deleteMany({})
     ```
   - Then restart the server

3. **Default credentials:**
   - Email: `admin@siddhivinayak.com`
   - Password: `admin123`
   - (Or as set in your `.env` file)

### 4. "Server error" with details in console

**Problem:** Backend code error.

**Solution:**
1. Check backend console for error details
2. Common issues:
   - Missing `.env` file
   - Wrong JWT_SECRET format
   - Database schema issues

3. **Check backend console output:**
   - Look for error messages
   - Check if MongoDB connected: `✅ MongoDB Connected Successfully`

### 5. CORS Error

**Problem:** Frontend can't communicate with backend.

**Solution:**
1. Backend already has CORS enabled
2. Make sure backend is running on port 5000
3. Make sure frontend is calling correct URL: `http://localhost:5000`

### 6. "User password not found" Error

**Problem:** User exists but password field is missing.

**Solution:**
1. Delete the user from database
2. Restart server to recreate admin user
3. Or manually create user with hashed password

## Step-by-Step Setup Verification

### Step 1: Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your settings
npm run dev
```

**Expected output:**
```
✅ MongoDB Connected Successfully
✅ Default admin user created
   Email: admin@siddhivinayak.com
   Password: admin123
🚀 Server running on port 5000
```

### Step 2: Frontend Setup
```bash
cd frontend
npm install
npm start
```

**Expected output:**
```
Compiled successfully!
You can now view frontend in the browser.
  Local:            http://localhost:3000
```

### Step 3: Test Login
1. Go to: `http://localhost:3000/admin/login`
2. Enter credentials:
   - Email: `admin@siddhivinayak.com`
   - Password: `admin123`
3. Click "Sign In"

## Quick Fixes

### Reset Everything
```bash
# Stop both servers (Ctrl+C)

# Backend
cd backend
rm -rf node_modules
npm install
# Make sure .env file exists and is correct
npm run dev

# Frontend (new terminal)
cd frontend
rm -rf node_modules
npm install
npm start
```

### Check Backend Health
Visit: `http://localhost:5000/api/health`

Should return:
```json
{
  "status": "OK",
  "message": "Siddhivinayak API is running",
  "timestamp": "..."
}
```

### Check MongoDB Connection
```bash
# Using mongo shell
mongo
use siddhivinayak_db
db.users.find()
```

Should show at least one user document.

## Still Having Issues?

1. **Check browser console** (F12) for detailed errors
2. **Check backend console** for server errors
3. **Verify all environment variables** in `.env`
4. **Make sure ports are not in use:**
   - Port 3000 (frontend)
   - Port 5000 (backend)
   - Port 27017 (MongoDB)

## Contact Support

If none of these solutions work, please provide:
1. Error message from browser console
2. Error message from backend console
3. Your `.env` file (without sensitive data)
4. MongoDB connection status

