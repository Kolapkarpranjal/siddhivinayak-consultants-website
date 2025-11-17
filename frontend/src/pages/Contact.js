import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: response.data.message || 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      if (error.response?.data?.errors) {
        // Validation errors from backend
        const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
        setSubmitStatus({
          type: 'error',
          message: errorMessages
        });
      } else if (error.response?.data?.message) {
        setSubmitStatus({
          type: 'error',
          message: error.response.data.message
        });
      } else if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        setSubmitStatus({
          type: 'error',
          message: 'Cannot connect to server. Please make sure the backend server is running.'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const avatars = [
    'https://i.pravatar.cc/80?img=1',
    'https://i.pravatar.cc/80?img=2',
    'https://i.pravatar.cc/80?img=3',
    'https://i.pravatar.cc/80?img=4',
    'https://i.pravatar.cc/80?img=5',
    'https://i.pravatar.cc/80?img=6',
    'https://i.pravatar.cc/80?img=7',
    'https://i.pravatar.cc/80?img=8'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Decorative left panel - Mobile and Desktop designs */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-md p-4 sm:p-6 min-h-[400px] sm:min-h-[520px]">
            {/* Mobile Design - Simple and clean */}
            <div className="sm:hidden flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're here to help you with your career goals. Send us a message and we'll respond within 24 hours.
              </p>
              <div className="mt-6 flex space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>info@svc.com</span>
                </div>
              </div>
            </div>

            {/* Desktop Design - Original with concentric rings */}
            <div className="hidden sm:block">
              {/* Concentric dashed rings */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 w-[520px] h-[520px] animate-spin" style={{animationDuration:'50s'}} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 w-[420px] h-[420px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 w-[320px] h-[320px] animate-spin" style={{animationDuration:'35s'}} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 w-[220px] h-[220px]" />

              {/* Orbiting avatars */}
              {avatars.map((src, i) => {
                const angle = (i / avatars.length) * 360;
                const radius = 210 + (i % 2 === 0 ? 0 : -60);
                const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
                return (
                  <div key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform }}>
                    <img src={src} alt="avatar" className="w-10 h-10 rounded-full ring-2 ring-white shadow-md" />
                  </div>
                );
              })}

              {/* Center badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right modern form card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">We'd love to help</h2>
              <p className="text-gray-600">Reach out and we'll get in touch within 24 hours.</p>
            </div>

            {/* Requirements Request Section */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Resourcing Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We request you to forward us the requirements time to time with criteria. Assuring you of committed engagement & our quality services.
              </p>
              <p className="text-gray-700 font-medium">
                Contact us if you have a Resourcing Requirement or one coming up..!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    placeholder="(+91)" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                  placeholder="you@company.com" 
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Message *</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                  placeholder="Tell us how we can help…" 
                />
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  id="agree" 
                  type="checkbox" 
                  required
                  disabled={loading}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed" 
                />
                <label htmlFor="agree" className="text-sm text-gray-600">You agree to our friendly privacy policy.</label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
