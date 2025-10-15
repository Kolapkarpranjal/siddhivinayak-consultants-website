import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resumeHero from '../assets/images/hero/resume.webp';

const BrowseJobs = () => {
  const navigate = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    jobTitle: '',
    function: '',
    location: ''
  });

  const handleInputChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  const jobListings = [
    {
      id: 1,
      title: "Senior Business Analyst",
      company: "Tech Solutions Inc.",
      location: "Mumbai, Maharashtra",
      function: "Business Analysis",
      experience: "5-8 years",
      type: "Full-time",
      posted: "2 days ago",
      description: "We are looking for a Senior Business Analyst to join our team and help drive strategic initiatives."
    },
    {
      id: 2,
      title: "Financial Consultant",
      company: "Finance Corp",
      location: "Delhi, NCR",
      function: "Finance",
      experience: "3-6 years",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our finance team as a consultant to help clients with financial planning and advisory services."
    },
    {
      id: 3,
      title: "Operations Manager",
      company: "Manufacturing Ltd",
      location: "Bangalore, Karnataka",
      function: "Operations",
      experience: "7-10 years",
      type: "Full-time",
      posted: "3 days ago",
      description: "Lead operations team and optimize business processes for improved efficiency."
    },
    {
      id: 4,
      title: "Strategy Consultant",
      company: "Consulting Group",
      location: "Pune, Maharashtra",
      function: "Strategy",
      experience: "4-7 years",
      type: "Full-time",
      posted: "5 days ago",
      description: "Work with senior leadership to develop and implement strategic business plans."
    },
    {
      id: 5,
      title: "Project Manager",
      company: "Digital Solutions",
      location: "Hyderabad, Telangana",
      function: "Project Management",
      experience: "6-9 years",
      type: "Full-time",
      posted: "1 day ago",
      description: "Manage complex projects and ensure successful delivery within timeline and budget."
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "Growth Agency",
      location: "Chennai, Tamil Nadu",
      function: "Marketing",
      experience: "2-5 years",
      type: "Full-time",
      posted: "4 days ago",
      description: "Develop and execute marketing strategies to drive business growth and brand awareness."
    }
  ];

  const functions = [
    "Business Analysis",
    "Finance",
    "Operations",
    "Strategy",
    "Project Management",
    "Marketing",
    "Human Resources",
    "Technology",
    "Sales"
  ];

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

      {/* Hero Section with Image */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${resumeHero})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Executive Careers</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Information Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <p className="text-gray-700 text-lg mb-2">
                Due to client confidentiality, we do not publish all the jobs we are currently working on.
              </p>
              <p className="text-gray-600">
                If you cannot find a relevant opportunity by browsing our jobs, please send us your details by clicking here.
              </p>
            </div>
            <button onClick={() => navigate('/submit-cv')} className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 flex items-center space-x-2">
              <span>Submit Your CV</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Job Search Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse Jobs</h2>
          
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={searchFilters.jobTitle}
                onChange={handleInputChange}
                placeholder="Job Title, Skills"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="function" className="block text-sm font-medium text-gray-700 mb-2">
                Function
              </label>
              <select
                id="function"
                name="function"
                value={searchFilters.function}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              >
                <option value="">Select Function</option>
                {functions.map((func, index) => (
                  <option key={index} value={func}>{func}</option>
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
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
            Search Jobs
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Available Positions</h3>
          
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <p className="text-sm text-gray-500">Posted {job.posted}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
                    Apply Now
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-2 rounded-lg transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Previous</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Next</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
