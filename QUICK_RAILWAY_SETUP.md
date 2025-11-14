# Quick Railway Setup Guide

## 🚀 Quick Steps to Deploy Backend to Railway

### Step 1: MongoDB Atlas Setup (5 minutes)
1. Go to https://www.mongodb.com/cloud/atlas → Sign up (FREE)
2. Create cluster → Choose FREE tier (M0)
3. **Database Access**: Create user (username: `siddhivinayak_admin`, strong password)
4. **Network Access**: Allow from anywhere (0.0.0.0/0)
5. **Get Connection String**: 
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Add database name: `...mongodb.net/siddhivinayak_db?retryWrites=true&w=majority`

### Step 2: Railway Deployment (5 minutes)
1. Go to https://railway.app → Sign in with GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Select your repository
4. **Add Service** → Set **Root Directory**: `backend`
5. **Variables Tab** → Add these:
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string_here
   JWT_SECRET=your_random_secret_key_here
   JWT_EXPIRE=7d
   ```
6. Wait for deployment (2-5 minutes)
7. Copy your Railway URL (e.g., `https://siddhivinayak-backend.up.railway.app`)

### Step 3: Update Netlify (2 minutes)
1. Go to Netlify Dashboard → Your site
2. **Site settings** → **Environment variables**
3. Add:
   ```
   REACT_APP_API_URL = https://your-railway-url.up.railway.app
   ```
4. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

### Step 4: Test
1. Visit: `https://your-railway-url.up.railway.app/api/health`
   - Should return: `{"status":"OK","message":"Siddhivinayak API is running"}`
2. Visit your Netlify site
3. Try admin login - should work! ✅

## ✅ Checklist
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured
- [ ] Connection string copied
- [ ] Railway project created
- [ ] Backend deployed
- [ ] Environment variables set
- [ ] Railway URL obtained
- [ ] Netlify environment variable set
- [ ] Site redeployed
- [ ] Everything tested

## 🆘 Troubleshooting

**Backend not starting?**
- Check Railway logs
- Verify MongoDB connection string
- Check all environment variables are set

**Frontend can't connect?**
- Verify `REACT_APP_API_URL` in Netlify
- Check browser console for errors
- Make sure Railway URL is accessible

**CORS errors?**
- Backend CORS is already configured for Netlify domain
- If issues persist, check `backend/server.js` CORS settings

## 💰 Cost
- **MongoDB Atlas**: FREE (M0 tier)
- **Railway**: FREE ($5 credit/month)
- **Netlify**: FREE
- **Total: $0/month** 🎉

---

**Need detailed instructions?** See `RAILWAY_DEPLOYMENT_GUIDE.md`

