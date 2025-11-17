# Fix MongoDB Authentication Error

## 🔐 Error: "bad auth : Authentication failed"

This error means your **username or password** in the MongoDB connection string is incorrect.

## ✅ Step-by-Step Fix

### Step 1: Check Your MongoDB Atlas Credentials

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Log in to your account
3. Click **"Database Access"** in the left sidebar
4. Find your database user in the list
5. Check the **username** - make sure it matches what's in your `.env` file

### Step 2: Verify or Reset Password

**Option A: If you know the password:**
- Make sure it's typed correctly in your `.env` file
- Check for typos or extra spaces

**Option B: If you forgot the password:**
1. Click **"Edit"** next to your database user
2. Click **"Edit Password"**
3. Enter a new password (save it somewhere safe!)
4. Click **"Update User"**

### Step 3: Update Your .env File

Open `backend/.env` and update the `MONGODB_URI`:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
```

**Replace:**
- `YOUR_USERNAME` with your actual MongoDB username
- `YOUR_PASSWORD` with your actual MongoDB password
- `cluster0.xxxxx.mongodb.net` with your actual cluster URL

### Step 4: Handle Special Characters in Password

If your password contains special characters, you **MUST** URL-encode them:

| Character | URL-Encoded |
|-----------|-------------|
| `@` | `%40` |
| `#` | `%23` |
| `%` | `%25` |
| `&` | `%26` |
| `+` | `%2B` |
| Space | `%20` or `+` |
| `/` | `%2F` |
| `?` | `%3F` |
| `=` | `%3D` |

**Example:**
- Password: `MyP@ss#123`
- In connection string: `MyP%40ss%23123`

**Full example:**
```env
MONGODB_URI=mongodb+srv://admin:MyP%40ss%23123@cluster0.abc123.mongodb.net/siddhivinayak_db?retryWrites=true&w=majority
```

### Step 5: Test the Connection

Run the diagnostic tool:

```bash
cd backend
npm run check-db
```

If it shows "✅ Connection successful!", you're good to go!

### Step 6: Restart Your Server

Stop your server (Ctrl+C) and restart it:

```bash
npm start
```

You should now see: `✅ MongoDB Connected Successfully`

## 🔍 Quick Check: Connection String Format

Your connection string should look like this:

```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

**Important parts:**
- `mongodb+srv://` - Protocol (for Atlas)
- `username:password` - Your credentials
- `@cluster.mongodb.net` - Your cluster URL
- `/siddhivinayak_db` - Database name
- `?retryWrites=true&w=majority` - Connection options

## ❌ Common Mistakes

1. **Copy-paste errors** - Extra spaces or missing characters
2. **Wrong username** - Using email instead of database username
3. **Special characters not encoded** - Passwords with @, #, %, etc.
4. **Old password** - Password was changed in Atlas but not in .env
5. **Using `<password>` placeholder** - Must replace with actual password

## 🆘 Still Not Working?

1. **Double-check in MongoDB Atlas:**
   - Database Access → Verify username
   - Network Access → Make sure your IP is allowed (or "Allow Access from Anywhere")

2. **Try resetting the password:**
   - Create a simple password without special characters (e.g., `MyPassword123`)
   - Update it in both Atlas and your .env file

3. **Test with the diagnostic tool:**
   ```bash
   npm run check-db
   ```

4. **Check your .env file location:**
   - Must be in the `backend` folder
   - Must be named exactly `.env` (with the dot)

