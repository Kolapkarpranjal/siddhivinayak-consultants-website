# Quick Setup Guide - .env File

## Step 1: Create .env File

In the `backend` folder, create a new file named `.env` (with the dot at the beginning).

**Windows:**
- Open `backend` folder in File Explorer
- Right-click → New → Text Document
- Rename it to `.env` (remove .txt extension)
- If Windows asks about changing extension, click "Yes"

**Mac/Linux:**
```bash
cd backend
touch .env
```

## Step 2: Copy This Content

Open the `.env` file and paste this content:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
# For MongoDB Atlas (Cloud - Recommended):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority

# For Local MongoDB (if installed):
MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db

# JWT Configuration
JWT_SECRET=siddhivinayak_secret_key_2024_change_this_in_production
JWT_EXPIRE=7d

# Admin Default Credentials
ADMIN_EMAIL=admin@siddhivinayak.com
ADMIN_PASSWORD=admin123
```

## Step 3: Choose MongoDB Option

### Option A: MongoDB Atlas (Cloud - EASIEST) ⭐ RECOMMENDED

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free account
3. Create a free cluster
4. Create database user (username + password)
5. Whitelist IP (click "Allow Access from Anywhere" for development)
6. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Add database name: `...mongodb.net/siddhivinayak_db?retryWrites=true&w=majority`

7. Update `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
   ```

### Option B: Local MongoDB

1. Download MongoDB: https://www.mongodb.com/try/download/community
2. Install MongoDB
3. Start MongoDB service
4. Keep the default in `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```

## Step 4: Test

1. Save the `.env` file
2. Restart your backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. You should see:
   ```
   ✅ MongoDB Connected Successfully
   ✅ Default admin user created
   🚀 Server running on port 5000
   ```

## Troubleshooting

**If you see "MongoDB Connection Error":**
- Check if MongoDB Atlas cluster is running (not paused)
- Verify connection string is correct
- Check username/password in connection string
- For local: Check if MongoDB service is running

**File Location:**
Your `.env` file should be here:
```
backend/
  ├── .env          ← This file
  ├── server.js
  ├── package.json
  └── ...
```

## Need Help?

See `MONGODB_SETUP.md` for detailed MongoDB setup instructions.

