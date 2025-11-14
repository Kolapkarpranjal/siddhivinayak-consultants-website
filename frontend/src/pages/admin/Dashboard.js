import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/admin/Layout';
import API_URL from '../../config/api';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/api/admin/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  // Calculate percentages for circular progress
  const calculatePercentage = (value, total) => {
    if (!total || total === 0) return 0;
    return Math.min((value / total) * 100, 100);
  };

  const CircularProgress = ({ value, total, label, color = 'blue' }) => {
    const percentage = calculatePercentage(value, total);
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;
    
    const colorClasses = {
      teal: 'text-teal-500',
      blue: 'text-blue-500',
      purple: 'text-purple-500',
    };

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className={`${colorClasses[color]} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-sm font-semibold text-gray-700">{label}</div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {stats && (
          <>
            {/* Summary Section with Circular Progress */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    TOTALS Out of {stats.statistics.contacts.total + stats.statistics.cvs.total + stats.statistics.jobs.total} views
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <CircularProgress
                  value={stats.statistics.contacts.total}
                  total={stats.statistics.contacts.total + stats.statistics.cvs.total + stats.statistics.jobs.total}
                  label="APPLICANTS"
                  color="teal"
                />
                <CircularProgress
                  value={stats.statistics.cvs.total}
                  total={stats.statistics.contacts.total + stats.statistics.cvs.total + stats.statistics.jobs.total}
                  label="INTERVIEWS"
                  color="blue"
                />
                <CircularProgress
                  value={stats.statistics.jobs.active}
                  total={stats.statistics.contacts.total + stats.statistics.cvs.total + stats.statistics.jobs.total}
                  label="FORWARDS"
                  color="purple"
                />
              </div>

              {/* Applicants/Day Chart */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">APPLICANTS/DAY</h3>
                <div className="relative h-64">
                  <div className="absolute inset-0 flex items-end justify-between space-x-1">
                    {[50, 120, 180, 200, 150, 100, 80, 90, 130, 190, 210, 160, 110, 85].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-teal-500 rounded-t hover:bg-teal-600 transition-colors relative group"
                        style={{ height: `${(height / 250) * 100}%` }}
                      >
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {height} Applicants
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <span key={index}>{day}</span>
                    ))}
                  </div>
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 pr-2">
                    <span>500</span>
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.statistics.contacts.total}</p>
                    <p className="text-sm text-gray-500 mt-1">{stats.statistics.contacts.new} new</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">📧</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total CVs</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.statistics.cvs.total}</p>
                    <p className="text-sm text-gray-500 mt-1">{stats.statistics.cvs.pending} pending</p>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">📄</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.statistics.jobs.active}</p>
                    <p className="text-sm text-gray-500 mt-1">{stats.statistics.jobs.total} total</p>
                  </div>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">💼</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.statistics.users.total}</p>
                    <p className="text-sm text-gray-500 mt-1">System users</p>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">👥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Contacts */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Contacts</h2>
                <div className="space-y-3">
                  {stats.recent.contacts.length > 0 ? (
                    stats.recent.contacts.map((contact, index) => (
                      <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{contact.name}</p>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          {contact.subject && (
                            <p className="text-sm text-gray-500 mt-1">{contact.subject}</p>
                          )}
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          contact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          contact.status === 'read' ? 'bg-gray-100 text-gray-800' :
                          contact.status === 'replied' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {contact.status}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No recent contacts</p>
                  )}
                </div>
              </div>

              {/* Recent CVs */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent CVs</h2>
                <div className="space-y-3">
                  {stats.recent.cvs.length > 0 ? (
                    stats.recent.cvs.map((cv, index) => (
                      <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {cv.firstName} {cv.lastName}
                          </p>
                          <p className="text-sm text-gray-600">{cv.email}</p>
                          {cv.position && (
                            <p className="text-sm text-gray-500 mt-1">Position: {cv.position}</p>
                          )}
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          cv.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          cv.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          cv.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {cv.status}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No recent CVs</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;

