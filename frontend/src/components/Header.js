import React, { useEffect, useState } from 'react';

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
    <header className={`${scrolled ? 'bg-white/90 shadow-md' : 'bg-white/70 shadow-sm'} backdrop-blur-md sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              <span className="hidden sm:inline">Siddhivinayak Consultants</span>
              <span className="sm:hidden">SVC</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600">
              Home
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="group text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1"
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a 
                    href="/services/staff-recruitment" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Staff Recruitment
                  </a>
                  <a 
                    href="/services/staffing" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Staffing
                  </a>
                  <a 
                    href="/services/training" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Training
                  </a>
                  <a 
                    href="/services/resume-building" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Resume Building
                  </a>
                  <a 
                    href="/services/interview-preparation" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Interview Preparation
                  </a>
                </div>
              )}
            </div>
            
            <a href="/about" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600">
              About Us
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="/portfolio" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600">
              Portfolio
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            
            {/* Jobs Dropdown */}
            <div className="relative">
              <button
                onClick={toggleJobsDropdown}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center space-x-1"
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
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a 
                    href="/browse-jobs" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Browse Jobs
                  </a>
                  <a 
                    href="/submit-cv" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    Submit Your CV
                  </a>
                </div>
              )}
            </div>
            
            <a href="/contact" className="group relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600">
              Contact
              <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </nav>
          
              {/* CTA Button */}
              <div className="hidden md:block">
                <a href="/consultation" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 transform hover:scale-105 inline-block shadow-sm">
                  Get Consultation
                </a>
              </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-transform duration-300"
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                Home
              </a>
              
              {/* Mobile Services Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Services</div>
                <div className="ml-4 space-y-2">
                  <a href="/services/staff-recruitment" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Staff Recruitment
                  </a>
                  <a href="/services/staffing" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Staffing
                  </a>
                  <a href="/services/training" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Training
                  </a>
                  <a href="/services/resume-building" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Resume Building
                  </a>
                  <a href="/services/interview-preparation" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Interview Preparation
                  </a>
                </div>
              </div>
              
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                About Us
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                Portfolio
              </a>
              
              {/* Mobile Jobs Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Jobs</div>
                <div className="ml-4 space-y-2">
                  <a href="/browse-jobs" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Browse Jobs
                  </a>
                  <a href="/submit-cv" className="block text-gray-600 hover:text-blue-600 transition duration-300">
                    Submit Your CV
                  </a>
                </div>
              </div>
              
                  <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                    Contact
                  </a>
                  <a href="/consultation" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 w-full mt-4 text-center block">
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
