import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo/logo2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleJobsDropdown = () => {
    setIsJobsDropdownOpen(!isJobsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className={`${scrolled ? 'bg-white shadow-2xl' : 'bg-white shadow-xl'} rounded-2xl mx-4 mt-4 sticky top-0 z-50 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center hover:opacity-90 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
              <img 
                src={logo} 
                alt="Siddhivinayak Consultants Logo" 
                className="h-24 w-auto object-contain m-0 p-0 block cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-110"
              />
              
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md">
              Home
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="group text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md"
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50">
                  <a 
                    href="/services/staff-recruitment" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Staff Recruitment
                  </a>
                  <a 
                    href="/services/staffing" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Staffing
                  </a>
                  <a 
                    href="/services/training" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Training
                  </a>
                  <a 
                    href="/services/resume-building" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Resume Building
                  </a>
                  <a 
                    href="/services/interview-preparation" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Interview Preparation
                  </a>
                </div>
              )}
            </div>
            
            <a href="/about" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md">
              About Us
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="/portfolio" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md">
              Portfolio
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            
            {/* Jobs Dropdown */}
            <div className="relative">
              <button
                onClick={toggleJobsDropdown}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md"
              >
                <span>Jobs</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isJobsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isJobsDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50">
                  <a 
                    href="/browse-jobs" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Browse Jobs
                  </a>
                  <a 
                    href="/submit-cv" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-300 rounded-xl mx-2 hover:shadow-sm"
                  >
                    Submit Your CV
                  </a>
                </div>
              )}
            </div>
            
            <a href="/contact" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-50 hover:shadow-md">
              Contact
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </nav>
          
              {/* CTA Button */}
              <div className="hidden md:block">
                <a href="/consultation" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-block shadow-xl hover:shadow-2xl">
                  Get Consultation
                </a>
              </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-transform duration-300 p-3 rounded-xl hover:bg-gray-50 hover:shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                Home
              </a>
              
              {/* Mobile Services Section */}
              <div className="space-y-2">
                <div className="text-gray-800 font-medium px-4 py-2">Services</div>
                <div className="ml-4 space-y-1">
                  <a href="/services/staff-recruitment" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Staff Recruitment
                  </a>
                  <a href="/services/staffing" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Staffing
                  </a>
                  <a href="/services/training" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Training
                  </a>
                  <a href="/services/resume-building" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Resume Building
                  </a>
                  <a href="/services/interview-preparation" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Interview Preparation
                  </a>
                </div>
              </div>
              
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                About Us
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                Portfolio
              </a>
              
              {/* Mobile Jobs Section */}
              <div className="space-y-2">
                <div className="text-gray-800 font-medium px-4 py-2">Jobs</div>
                <div className="ml-4 space-y-1">
                  <a href="/browse-jobs" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Browse Jobs
                  </a>
                  <a href="/submit-cv" className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Submit Your CV
                  </a>
                </div>
              </div>
              
                  <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-sm">
                    Contact
                  </a>
                  <a href="/consultation" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 w-full mt-4 text-center block shadow-xl hover:shadow-2xl">
                    Get Consultation
                  </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
