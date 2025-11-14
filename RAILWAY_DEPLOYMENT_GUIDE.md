# Railway Backend Deployment Guide

This guide will help you deploy your backend to Railway so your admin panel works on Netlify.

## Prerequisites

1. **Railway Account**: Sign up at https://railway.app (free tier available)
2. **GitHub Account**: Your code should be on GitHub
3. **MongoDB Atlas Account**: For cloud database (or use Railway's MongoDB)

---

## Step 1: Set Up MongoDB Atlas (Cloud Database)

Since Railway doesn't provide MongoDB by default, we'll use MongoDB Atlas (free tier available).

### 1.1 Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new cluster (choose FREE tier - M0)
4. Choose a cloud provider and region (closest to you)
5. Click "Create Cluster" (takes 3-5 minutes)

### 1.2 Configure Database Access
1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `siddhivinayak_admin`
5. Password: Create a strong password (save it!)
6. Database User Privileges: **"Atlas admin"** or **"Read and write to any database"**
7. Click **"Add User"**

### 1.3 Configure Network Access
1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Railway deployment)
   - Or add Railway's IP ranges later
4. Click **"Confirm"**

### 1.4 Get Connection String
1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your database user credentials
6. Add database name at the end:
   ```
   mongodb+srv://siddhivinayak_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
   ```
7. **Save this connection string** - you'll need it for Railway!

---

## Step 2: Prepare Backend for Railway

### 2.1 Update package.json Scripts
Make sure your `backend/package.json` has a start script:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  }
}
```

### 2.2 Create Railway-Specific Files (Optional)
Railway will auto-detect Node.js, but you can create a `Procfile` or `railway.json` if needed.

---

## Step 3: Deploy to Railway

### 3.1 Create Railway Project
1. Go to: https://railway.app
2. Sign in with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your repository: `siddhivinayak-consultants-website`
6. Railway will detect your project

### 3.2 Configure Service
1. Railway will show your repo structure
2. Click **"Add Service"** → **"GitHub Repo"**
3. Select your repository
4. In the settings, set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3.3 Set Environment Variables
1. Click on your service
2. Go to **"Variables"** tab
3. Add these environment variables:

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://siddhivinayak_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_random
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@siddhivinayak.com
ADMIN_PASSWORD=admin123
```

**Important**: Replace `YOUR_PASSWORD` with your actual MongoDB Atlas password!

### 3.4 Deploy
1. Railway will automatically start building
2. Wait for deployment to complete (2-5 minutes)
3. Once deployed, Railway will give you a URL like: `https://your-app-name.up.railway.app`

### 3.5 Get Your Railway URL
1. Click on your service
2. Go to **"Settings"** tab
3. Under **"Domains"**, you'll see your Railway URL
4. Copy this URL (e.g., `https://siddhivinayak-backend.up.railway.app`)

---

## Step 4: Update Frontend to Use Railway Backend

### 4.1 Create Environment Variable File
Create `frontend/.env.production`:

```env
REACT_APP_API_URL=https://your-railway-url.up.railway.app
```

### 4.2 Update Frontend Code to Use Environment Variable

We need to update all API calls to use the environment variable instead of hardcoded `localhost:5000`.

**Files to update:**
- `frontend/src/pages/admin/Login.js`
- `frontend/src/pages/admin/Dashboard.js`
- `frontend/src/pages/admin/Jobs.js`
- `frontend/src/pages/admin/CVs.js`
- `frontend/src/pages/admin/Contacts.js`
- `frontend/src/pages/SubmitCV.js`
- `frontend/src/pages/BrowseJobs.js`
- `frontend/src/pages/Contact.js`

### 4.3 Create API Configuration File
Create `frontend/src/config/api.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default API_URL;
```

Then update all files to use:
```javascript
import API_URL from '../config/api';
// Instead of: 'http://localhost:5000'
```

---

## Step 5: Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site
3. Go to **"Site settings"** → **"Environment variables"**
4. Add:
   ```
   REACT_APP_API_URL = https://your-railway-url.up.railway.app
   ```
5. Redeploy your site (or push a new commit)

---

## Step 6: Test Everything

1. **Test Backend**: Visit `https://your-railway-url.up.railway.app/api/health`
   - Should return: `{"status":"OK","message":"Siddhivinayak API is running"}`

2. **Test Frontend**: Visit your Netlify site
   - Admin login should work
   - CV submission should work
   - Browse jobs should work

---

## Troubleshooting

### Backend Not Starting
- Check Railway logs: Go to your service → "Deployments" → Click on latest deployment → "View Logs"
- Check environment variables are set correctly
- Verify MongoDB connection string is correct

### Frontend Can't Connect to Backend
- Verify `REACT_APP_API_URL` is set in Netlify
- Check browser console for CORS errors
- Make sure Railway URL is accessible

### CORS Errors
- Update `backend/server.js` to allow your Netlify domain:
```javascript
app.use(cors({
  origin: ['https://siddhivinayak-consultants.netlify.app', 'http://localhost:3000'],
  credentials: true
}));
```

### MongoDB Connection Issues
- Verify MongoDB Atlas network access allows all IPs (0.0.0.0/0)
- Check database user credentials
- Verify connection string format

---

## Quick Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured (allow all IPs)
- [ ] Connection string copied
- [ ] Railway project created
- [ ] Backend service deployed
- [ ] Environment variables set in Railway
- [ ] Railway URL obtained
- [ ] Frontend code updated to use environment variable
- [ ] Netlify environment variable set
- [ ] Site redeployed
- [ ] Everything tested

---

## Cost Estimate

- **MongoDB Atlas**: FREE (M0 tier - 512MB storage)
- **Railway**: FREE tier includes $5 credit/month (usually enough for small apps)
- **Netlify**: FREE (generous free tier)

**Total Cost: $0/month** (for small to medium traffic)

---

## Support

If you encounter issues:
1. Check Railway deployment logs
2. Check MongoDB Atlas connection
3. Verify all environment variables
4. Check browser console for errors
5. Test backend health endpoint directly

Good luck with your deployment! 🚀

