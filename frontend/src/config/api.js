// API Configuration
// Force Render backend URL in production
const API_URL = process.env.REACT_APP_API_URL || 
  (typeof window !== 'undefined' && window.location.hostname.includes('netlify')
    ? 'https://siddhivinayak-consultants-website.onrender.com'
    : process.env.NODE_ENV === 'production' 
    ? 'https://siddhivinayak-consultants-website.onrender.com'
    : 'http://localhost:5000');

export default API_URL;

