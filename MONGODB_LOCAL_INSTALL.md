# MongoDB Local Installation Guide

## Windows Installation

### Step 1: Download MongoDB
1. Go to: https://www.mongodb.com/try/download/community
2. Select:
   - Version: Latest (7.0 or 6.0)
   - Platform: Windows
   - Package: MSI
3. Click "Download"

### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Click "Next" on the setup wizard
3. Accept the license agreement
4. Choose "Complete" installation
5. **Important:** Check "Install MongoDB as a Service"
   - Service Name: MongoDB
   - Service runs as: Network Service User
6. Check "Install MongoDB Compass" (optional but helpful GUI tool)
7. Click "Install"
8. Wait for installation to complete
9. Click "Finish"

### Step 3: Verify Installation
1. Open Command Prompt (as Administrator)
2. Run: `mongod --version`
   - Should show MongoDB version (e.g., "db version v7.0.x")
3. Check if MongoDB service is running:
   - Press `Win + R`
   - Type: `services.msc`
   - Press Enter
   - Look for "MongoDB" service
   - Status should be "Running"
   - If not running, right-click → Start

### Step 4: Test MongoDB
1. Open Command Prompt
2. Run: `mongosh`
   - This opens MongoDB shell
   - You should see: `test>`
3. Type: `show dbs`
   - Should show list of databases
4. Type: `exit` to quit

### Step 5: Configure Your Project
1. Your `.env` file in `backend` folder should have:
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```

2. Start your backend:
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

## Mac Installation

### Step 1: Install Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Step 2: Install MongoDB
```bash
# Tap MongoDB repository
brew tap mongodb/brew

# Install MongoDB
brew install mongodb-community
```

### Step 3: Start MongoDB Service
```bash
brew services start mongodb-community
```

### Step 4: Verify Installation
```bash
# Check if MongoDB is running
brew services list

# Test MongoDB
mongosh
```

### Step 5: Configure Your Project
Same as Windows - use `mongodb://localhost:27017/siddhivinayak_db` in `.env`

## Linux (Ubuntu/Debian) Installation

### Step 1: Import MongoDB Public Key
```bash
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
```

### Step 2: Add MongoDB Repository
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

### Step 3: Update and Install
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Step 4: Start MongoDB
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Step 5: Verify
```bash
sudo systemctl status mongod
mongosh
```

## Troubleshooting

### MongoDB Service Won't Start (Windows)
1. Open Services (`services.msc`)
2. Find "MongoDB"
3. Right-click → Properties
4. Check "Startup type" is "Automatic"
5. Click "Start"
6. If it fails, check the error message

### Port 27017 Already in Use
1. Check what's using the port:
   ```bash
   # Windows
   netstat -ano | findstr :27017
   
   # Mac/Linux
   lsof -i :27017
   ```
2. Stop the conflicting service or change MongoDB port

### Can't Connect from Backend
1. Make sure MongoDB service is running
2. Check `.env` file has correct connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```
3. Try connecting with MongoDB Compass:
   - Connection string: `mongodb://localhost:27017`
   - If Compass connects, MongoDB is working

### MongoDB Compass (GUI Tool)
- Download: https://www.mongodb.com/try/download/compass
- Connect to: `mongodb://localhost:27017`
- View databases, collections, and documents visually

## Quick Commands

### Start MongoDB
- **Windows:** Service starts automatically, or use Services panel
- **Mac:** `brew services start mongodb-community`
- **Linux:** `sudo systemctl start mongod`

### Stop MongoDB
- **Windows:** Services panel → Stop
- **Mac:** `brew services stop mongodb-community`
- **Linux:** `sudo systemctl stop mongod`

### Check MongoDB Status
- **Windows:** Services panel
- **Mac:** `brew services list`
- **Linux:** `sudo systemctl status mongod`

### Access MongoDB Shell
```bash
mongosh
```

### Common MongoDB Shell Commands
```javascript
show dbs                    // List all databases
use siddhivinayak_db       // Switch to your database
show collections           // List collections
db.users.find()            // Find all users
exit                       // Exit shell
```

## After Installation

1. ✅ MongoDB is installed and running
2. ✅ Create `.env` file in `backend` folder with:
   ```env
   MONGODB_URI=mongodb://localhost:27017/siddhivinayak_db
   ```
3. ✅ Start backend server: `cd backend && npm run dev`
4. ✅ You should see: "MongoDB Connected Successfully"
5. ✅ Try admin login: `admin@siddhivinayak.com` / `admin123`

That's it! Your local MongoDB is ready to use.

