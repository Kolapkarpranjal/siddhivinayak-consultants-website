import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  // Sidebar starts closed on mobile, open on desktop
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const mainMenuItems = [
    { path: '/admin/dashboard', label: 'HOME', icon: '🏠' },
    { path: '/admin/jobs', label: 'JOBS', icon: '💼' },
    { path: '/admin/cvs', label: 'RESUMES', icon: '📄' },
    { path: '/admin/contacts', label: 'CONTACT', icon: '✓' },
    { path: '/admin/consultations', label: 'CONSULTATIONS', icon: '💬' },
  ];

  const adminMenuItems = [
    // Removed: USERS, LOCATIONS, WORKFLOWS as requested
    // { path: '/admin/jobs', label: 'JOB BOARDS', icon: '📋' }, // Removed - duplicate of JOBS in main menu
  ];

  const getInitials = (name) => {
    if (!name) return 'A';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Dark Blue Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-900 to-blue-800 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="px-6 py-6 border-b border-blue-700">
            <div className="relative">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-lg mr-3">
                  {getInitials(user.name)}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{user.name || 'Admin User'}</p>
                  <p className="text-blue-200 text-xs">{user.email || 'admin@example.com'}</p>
                </div>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {profileDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <div className="mb-6">
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider px-4 mb-3">Main</p>
              {mainMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    // Close sidebar on mobile after navigation
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={`relative flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-white bg-blue-800'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
                  }`}
                >
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                  )}
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {adminMenuItems.length > 0 && (
              <div>
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider px-4 mb-3">Admin</p>
                {adminMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      // Close sidebar on mobile after navigation
                      if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`relative flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-white bg-blue-800'
                        : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
                    }`}
                  >
                    {location.pathname === item.path && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                    )}
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar with Search */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a job, task or resume..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

