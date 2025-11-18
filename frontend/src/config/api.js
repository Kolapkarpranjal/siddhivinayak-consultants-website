// API Configuration
// In production, this will use the Render backend URL
// In development, it will use localhost:5000
const API_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://siddhivinayak-consultants-website.onrender.com'
    : 'http://localhost:5000');

export default API_URL;

