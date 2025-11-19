import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jobsHero from '../assets/images/jobs.jpg';
import API_URL from '../config/api';

const BrowseJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    jobTitle: '',
    category: '',
    location: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });

  const categoriesList = [
    'Engineering',
    'Automobile',
    'Pharmaceutical',
    'Food',
    'Chemical',
    'Civil',
    'Glass',
    'Paper',
    'Polymer',
    'BPO',
    'ITES',
    'Telecom',
    'Banking',
    'Hospitality',
    'Healthcare',
    'Medical',
    'Secretary',
    'Front Office',
    'Data Entry'
  ];

  useEffect(() => {
    fetchCategories();
    fetchJobs();
  }, [currentPage, searchFilters]);

  const fetchCategories = async () => {
    try {
      setCategories(categoriesList);
    } catch (error) {
      console.error('Failed to load categories');
    }
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: 10,
        ...(searchFilters.jobTitle && { search: searchFilters.jobTitle }),
        ...(searchFilters.category && { category: searchFilters.category }),
        ...(searchFilters.location && { location: searchFilters.location })
      };

      const response = await axios.get(`${API_URL}/api/jobs`, { params });

      if (response.data.success) {
        setJobs(response.data.data.jobs);
        setPagination(response.data.data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: value
    });
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchJobs();
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'full-time': return 'bg-blue-100 text-blue-800';
      case 'part-time': return 'bg-purple-100 text-purple-800';
      case 'contract': return 'bg-orange-100 text-orange-800';
      case 'internship': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApply = (jobId) => {
    navigate(`/submit-cv?jobId=${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      {/* Breadcrumb */}
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white">
            <span className="text-blue-200">HOME</span>
            <span className="mx-2">></span>
            <span>BROWSE JOBS</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Blue Background - Option 2: Centered Focus */}
      <div className="relative h-[220px] md:h-[300px] lg:h-[380px] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
        </div>

        {/* Floating Icons - Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Briefcase Icon */}
          <div className="absolute top-10 left-8 md:left-16 w-8 h-8 md:w-12 md:h-12 text-white/20 animate-float-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2v2H8v2H6v2H4v12h16V8h-2V6h-2V4h-2V2h-4zm2 2h2v2h-2V4zm-6 4h12v10H6V8zm4 2v6h4v-6h-4z"/>
            </svg>
          </div>
          
          {/* Document Icon */}
          <div className="absolute bottom-16 left-12 md:left-24 w-6 h-6 md:w-10 md:h-10 text-white/15 animate-float-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
          </div>
          
          {/* Checkmark Icon */}
          <div className="absolute top-20 right-20 md:right-32 w-7 h-7 md:w-11 md:h-11 text-white/15 animate-float-slow-delayed">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
        </div>

        {/* Animated Image - Top Right Corner (Decorative) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-12 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg animate-pulse"></div>
            <div 
              onClick={() => navigate('/submit-cv')}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-2 md:p-3 shadow-2xl border border-white/20 transform hover:scale-110 transition-all duration-500 animate-bounce-slow cursor-pointer"
            >
              <img 
                src={jobsHero} 
                alt="Career Opportunities - Submit Your CV" 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover rounded-xl shadow-xl"
              />
              <div className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Centered Main Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
          <div className="max-w-5xl mx-auto">
            {/* Main Title with Gradient */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient">
                Browse Jobs
              </span>
            </h1>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm md:text-base font-semibold">500+ Jobs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm md:text-base font-semibold">50+ Companies</span>
              </div>
            </div>
            
            {/* Glassmorphic Submit CV Button */}
            <button 
              onClick={() => navigate('/submit-cv')} 
              className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-2xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 shadow-2xl mx-auto border-2 border-white/30 text-base md:text-lg group"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Submit Your CV</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Information Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 mb-8 border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Important Notice</h3>
              </div>
              <p className="text-gray-700 text-lg mb-2">
                Due to client confidentiality, we do not publish all the jobs we are currently working on.
              </p>
              <p className="text-gray-600">
                If you cannot find a relevant opportunity by browsing our jobs, please submit your CV using the button above.
              </p>
            </div>
          </div>
        </div>

        {/* Job Search Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Jobs</h2>
          <p className="text-gray-700 mb-6">
            We cater recruitment solutions to various industries like Engineering, Automobile,
            Pharmaceutical, Food, Chemical, Civil, Glass, Paper, Polymer, BPO, ITES, Telecom,
            Banking, Hospitality, Healthcare, Medical, Secretary, Front Office, Data Entry, etc.
          </p>
          
          {/* Search Filters */}
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title / Keywords
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={searchFilters.jobTitle}
                onChange={handleInputChange}
                  placeholder="Job Title, Skills, Keywords"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category / Industry
              </label>
              <select
                  id="category"
                  name="category"
                  value={searchFilters.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              >
                  <option value="">All Categories</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchFilters.location}
                onChange={handleInputChange}
                placeholder="Search Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>
          
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
            Search Jobs
          </button>
          </form>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              Available Positions {pagination.total > 0 && `(${pagination.total})`}
            </h3>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : jobs.length > 0 ? (
            <>
              {jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0 flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        {job.company && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.company}
                    </span>
                        )}
                        {job.location && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                        )}
                        {job.experience && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                            {job.experience} years
                          </span>
                        )}
                        {job.category && (
                          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                            {job.category}
                    </span>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
                          {job.type?.replace('-', ' ').toUpperCase() || 'FULL-TIME'}
                    </span>
                  </div>
                      {job.description && (
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description}
                        </p>
                      )}
                      <p className="text-sm text-gray-500">
                        Posted {formatDate(job.createdAt)}
                        {job.views > 0 && ` • ${job.views} views`}
                      </p>
                </div>
                
                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                      <button 
                        onClick={() => handleApply(job._id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 whitespace-nowrap"
                      >
                    Apply Now
                  </button>
                      <button 
                        onClick={() => navigate(`/job-details/${job._id}`)}
                        className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-2 rounded-lg transition duration-300 whitespace-nowrap"
                      >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Found</h3>
              <p className="text-gray-600 mb-6">
                {Object.values(searchFilters).some(v => v) 
                  ? 'Try adjusting your search filters to find more jobs.'
                  : 'No active job postings at the moment. Please check back later or submit your CV.'}
              </p>
              <button
                onClick={() => navigate('/submit-cv')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
              >
                Submit Your CV
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(pagination.pages)].map((_, i) => {
                const page = i + 1;
                if (page === 1 || page === pagination.pages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2 text-gray-500">...</span>;
                }
                return null;
              })}
              <button
                onClick={() => setCurrentPage(prev => Math.min(pagination.pages, prev + 1))}
                disabled={currentPage === pagination.pages}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
          </nav>
        </div>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
