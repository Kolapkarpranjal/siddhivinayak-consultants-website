# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Cloud - EASIEST & RECOMMENDED) ⭐

MongoDB Atlas is free and doesn't require installation. This is the easiest option.

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Verify your email

### Step 2: Create a Free Cluster
1. After login, click "Build a Database"
2. Choose "FREE" (M0) tier
3. Select a cloud provider and region (choose closest to you)
4. Click "Create"

### Step 3: Create Database User
1. Go to "Database Access" in left menu
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter username and password (save these!)
5. Set privileges to "Atlas admin" or "Read and write to any database"
6. Click "Add User"

### Step 4: Whitelist Your IP
1. Go to "Network Access" in left menu
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP address
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" in left menu
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
5. Replace `<password>` with your database user password
6. Add database name at the end: `...mongodb.net/siddhivinayak_db?retryWrites=true&w=majority`

### Step 6: Update .env File
Open `backend/.env` and update:
```env
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
```

**Example:**
```env
MONGODB_URI=mongodb+srv://admin:MyPassword123@cluster0.abc123.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
```

### Step 7: Test Connection
1. Restart your backend server
2. You should see: `✅ MongoDB Connected Successfully`

---

## Option 2: Local MongoDB Installation

### Windows Installation

1. **Download MongoDB:**
   - Go to: https://www.mongodb.com/try/download/community
   - Select: Windows, MSI package
   - Download and run installer

2. **Install MongoDB:**
   - Run the installer
   - Choose "Complete" installation
   - Install as Windows Service (recommended)
   - Install MongoDB Compass (GUI tool - optional but helpful)

3. **Verify Installation:**
   - Open Command Prompt as Administrator
   - Run: `mongod --version`
   - Should show MongoDB version

4. **Start MongoDB Service:**
   - Open Services (Win + R, type `services.msc`)
   - Find "MongoDB" service
   - Right-click → Start (if not running)

5. **Test Connection:**
   - MongoDB runs on `localhost:27017` by default
   - Your `.env` file should have:
     ```env
     MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
     ```

### Mac Installation

1. **Using Homebrew:**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. **Verify:**
   ```bash
   brew services list
   # Should show mongodb-community started
   ```

3. **Update .env:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```

### Linux Installation

1. **Ubuntu/Debian:**
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

2. **Update .env:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```

---

## Quick Setup Summary

### For MongoDB Atlas (Recommended):
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist IP (or allow all)
5. Get connection string
6. Update `backend/.env` with connection string
7. Restart backend server

### For Local MongoDB:
1. Install MongoDB on your computer
2. Start MongoDB service
3. Update `backend/.env` with: `mongodb://localhost:27017/siddhivinayak_db`
4. Restart backend server

---

## Verify Setup

After setup, restart your backend:
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
✅ Default admin user created
   Email: admin@siddhivinayak.com
   Password: admin123
🚀 Server running on port 5000
```

If you see MongoDB connection errors, check:
- MongoDB is running (local) or cluster is active (Atlas)
- Connection string is correct in `.env`
- No typos in username/password
- IP is whitelisted (Atlas)

---

## Need Help?

**MongoDB Atlas Issues:**
- Check connection string format
- Verify username/password
- Check IP whitelist
- Ensure cluster is running (not paused)

**Local MongoDB Issues:**
- Check if service is running
- Verify port 27017 is not blocked
- Check MongoDB logs for errors

