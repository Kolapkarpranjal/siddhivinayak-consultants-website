import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import resumeHero from '../assets/images/hero/resume.webp';
import jobsHero from '../assets/images/jobs.jpg';
import API_URL from '../config/api';

const SubmitCV = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    mobile: '',
    city: '',
    company: '',
    designation: '',
    experience: '',
    currentCTC: '',
    degree: '',
    resume: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
    setMessage({ type: '', text: '' }); // Clear message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.mobile);
      submitData.append('position', formData.designation || '');
      submitData.append('experience', formData.experience || '');
      
      // Add resume file
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      } else {
        setMessage({ type: 'error', text: 'Please upload your resume file' });
        setLoading(false);
        return;
      }

      const response = await axios.post(`${API_URL}/api/cv`, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setMessage({ 
          type: 'success', 
          text: response.data.message || 'CV submitted successfully! We will review it and get back to you soon.' 
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          gender: '',
          dob: '',
          email: '',
          mobile: '',
          city: '',
          company: '',
          designation: '',
          experience: '',
          currentCTC: '',
          degree: '',
          resume: null
        });
        
        // Reset file input
        const fileInput = document.getElementById('resume');
        if (fileInput) fileInput.value = '';
      }
    } catch (error) {
      console.error('CV Submission Error:', error);
      
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        setMessage({ 
          type: 'error', 
          text: 'Cannot connect to server. Please make sure the backend server is running on port 5000.' 
        });
      } else if (error.response?.data?.message) {
        setMessage({ type: 'error', text: error.response.data.message });
      } else if (error.response?.data?.errors) {
        const errorMsg = error.response.data.errors.map(e => e.msg).join(', ');
        setMessage({ type: 'error', text: errorMsg });
      } else if (error.response?.data?.error) {
        setMessage({ type: 'error', text: error.response.data.error });
      } else if (error.message) {
        setMessage({ type: 'error', text: error.message });
      } else {
        setMessage({ type: 'error', text: 'Failed to submit CV. Please check your connection and try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      {/* Breadcrumb */}
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white">
            <span className="text-blue-200">HOME</span>
            <span className="mx-2">&gt;</span>
            <span>SUBMIT YOUR CV</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Modern Design with Centered Focus */}
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700">
        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/30 to-transparent"></div>
        </div>

        {/* Floating Icons - Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Upload Icon */}
          <div className="absolute top-12 left-8 md:left-16 w-8 h-8 md:w-12 md:h-12 text-white/20 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
            </svg>
          </div>
          
          {/* Document Icon */}
          <div className="absolute bottom-20 left-12 md:left-24 w-6 h-6 md:w-10 md:h-10 text-white/15 animate-float-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
          </div>
          
          {/* Checkmark Icon */}
          <div className="absolute top-24 right-20 md:right-32 w-7 h-7 md:w-11 md:h-11 text-white/15 animate-float-slow-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>

          {/* Briefcase Icon */}
          <div className="absolute bottom-12 right-12 md:right-20 w-6 h-6 md:w-10 md:h-10 text-white/15 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2v2H8v2H6v2H4v12h16V8h-2V6h-2V4h-2V2h-4zm2 2h2v2h-2V4zm-6 4h12v10H6V8zm4 2v6h4v-6h-4z"/>
            </svg>
          </div>
        </div>

        {/* Animated Jobs Image - Top Right Corner (Same as BrowseJobs) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-12 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg animate-pulse"></div>
            <div 
              onClick={() => navigate('/browse-jobs')}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-2 md:p-3 shadow-2xl border border-white/20 transform hover:scale-110 transition-all duration-500 animate-bounce-slow cursor-pointer"
            >
              <img 
                src={jobsHero} 
                alt="Browse Jobs - Career Opportunities" 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover rounded-xl shadow-xl"
              />
              <div className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-r from-blue-500 to-indigo-600 backdrop-blur-sm rounded-lg p-1 md:p-2 text-white text-xs md:text-sm font-bold text-center shadow-lg">
                Browse Jobs
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Main Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
          <div className="max-w-5xl mx-auto">
            {/* Main Title with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient">
                Submit Your CV
              </span>
            </h1>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm md:text-base font-semibold">4.5L+ CVs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm md:text-base font-semibold">16hrs Lead Time</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm md:text-base font-semibold">500+ Jobs</span>
              </div>
            </div>
            
            {/* Glassmorphic Info Text */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl px-6 py-3 md:px-8 md:py-4 mx-auto max-w-2xl border border-white/20 shadow-xl">
              <p className="text-white text-sm md:text-base font-medium">
                Join thousands of professionals who found their dream job through us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Illustration Section */}
        <div className="lg:hidden mb-8">
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="relative z-10 flex items-center justify-center py-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 animate-float">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-xl flex items-center justify-center transform rotate-12">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 animate-float-delayed">
                  <div className="w-10 h-10 bg-green-500 rounded-full shadow-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Animated Illustration Section - Desktop */}
          <div className="hidden lg:block sticky top-8">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                {/* Animated Illustration Container */}
                <div className="flex flex-col items-center justify-center min-h-[500px]">
                  {/* Animated Person Illustration */}
                  <div className="relative mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    {/* Floating Document Icon */}
                    <div className="absolute -top-4 -right-4 animate-float">
                      <div className="w-16 h-16 bg-white rounded-lg shadow-xl flex items-center justify-center transform rotate-12">
                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    {/* Checkmark Icon */}
                    <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                      <div className="w-12 h-12 bg-green-500 rounded-full shadow-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Animated Text */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 animate-fade-in">
                      Submit Your CV
                    </h3>
                    <p className="text-gray-600 text-lg animate-fade-in-delayed">
                      Join thousands of professionals who found their dream job through us
                    </p>
                    
                    {/* Animated Stats */}
                    <div className="flex items-center justify-center space-x-6 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">4.5L+</div>
                        <div className="text-sm text-gray-600">CV Database</div>
                      </div>
                      <div className="w-px h-12 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">16hrs</div>
                        <div className="text-sm text-gray-600">Lead Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
              <p className="text-gray-600">
                Please fill out the form below with your details. All fields marked with * are required.
              </p>
            </div>

          {/* Success/Error Message */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center">
                {message.type === 'success' ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <p className="font-medium">{message.text}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile No. *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City Name *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your current company"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                  Designation *
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Enter your current designation"
                />
              </div>
            </div>

            {/* Experience and Education */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience (in years) *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8-12">8-12 years</option>
                  <option value="12+">12+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentCTC" className="block text-sm font-medium text-gray-700 mb-2">
                  Current CTC (INR) *
                </label>
                <input
                  type="text"
                  id="currentCTC"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Eg. 123000 In Lacs"
                />
              </div>

              <div>
                <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
                  Degree *
                </label>
                <select
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                >
                  <option value="">Select Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="mba">MBA</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume *
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition duration-300 ${
                formData.resume 
                  ? 'border-green-400 bg-green-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <div className="space-y-1 text-center w-full">
                  {formData.resume ? (
                    <div className="space-y-2">
                      <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium text-green-700">{formData.resume.name}</p>
                      <p className="text-xs text-green-600">{(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                      <label htmlFor="resume" className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer underline">
                        Change file
                      </label>
                    </div>
                  ) : (
                    <>
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                      <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleInputChange}
                        required
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                    </>
                  )}
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Submitting...' : 'Submit CV'}
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitCV;
