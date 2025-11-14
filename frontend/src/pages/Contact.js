import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="(+91)" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@company.com" />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Message *</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us how we can help…" />
              </div>

              <div className="flex items-start space-x-3">
                <input id="agree" type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="agree" className="text-sm text-gray-600">You agree to our friendly privacy policy.</label>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
