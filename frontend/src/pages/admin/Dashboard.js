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
        console.log('Dashboard data received:', response.data.data);
        console.log('Daily stats:', response.data.data.dailyStats);
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Dashboard fetch error:', error);
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">APPLICANTS/DAY (Last 14 Days)</h3>
                {stats.dailyStats && stats.dailyStats.length > 0 ? (
                  <div className="relative h-64 border border-gray-200 rounded-lg bg-gray-50 p-4">
                    {(() => {
                      const totals = stats.dailyStats.map(d => d.total);
                      const maxValue = Math.max(...totals, 1);
                      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                      
                      return (
                        <>
                          {/* Y-axis labels */}
                          <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-gray-500 pr-2 w-10">
                            <span className="font-medium">{maxValue}</span>
                            <span>{Math.ceil(maxValue * 0.8)}</span>
                            <span>{Math.ceil(maxValue * 0.6)}</span>
                            <span>{Math.ceil(maxValue * 0.4)}</span>
                            <span>{Math.ceil(maxValue * 0.2)}</span>
                            <span className="font-medium">0</span>
                          </div>
                          
                          {/* Chart bars */}
                          <div className="absolute left-12 right-0 top-0 bottom-12 flex items-end justify-between gap-1">
                            {stats.dailyStats.map((day, index) => {
                              const heightPercent = maxValue > 0 ? (day.total / maxValue) * 100 : 0;
                              const date = new Date(day.date + 'T00:00:00');
                              const dayName = dayNames[date.getDay()];
                              const isToday = new Date().toISOString().split('T')[0] === day.date;
                              
                              return (
                                <div
                                  key={index}
                                  className="flex-1 flex flex-col items-center justify-end relative group"
                                  style={{ minWidth: '20px' }}
                                >
                                  <div
                                    className={`w-full rounded-t transition-all duration-300 relative ${
                                      isToday 
                                        ? 'bg-teal-600 hover:bg-teal-700 ring-2 ring-teal-400' 
                                        : 'bg-teal-500 hover:bg-teal-600'
                                    }`}
                                    style={{ 
                                      height: `${Math.max(heightPercent, 2)}%`,
                                      minHeight: day.total > 0 ? '4px' : '2px'
                                    }}
                                  >
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-lg">
                                      <div className="font-semibold mb-1">{day.date}</div>
                                      <div>Total: {day.total}</div>
                                      <div className="text-gray-300">
                                        {day.contacts} Contacts, {day.cvs} CVs{day.consultations ? `, ${day.consultations} Consultations` : ''}
                                      </div>
                                      {isToday && <div className="mt-1 text-teal-300 text-xs">Today</div>}
                                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                    </div>
                                  </div>
                                  
                                  {/* Day label */}
                                  <div className="mt-2 text-xs text-gray-600 font-medium">
                                    {dayName.substring(0, 1)}
                                  </div>
                                  {/* Date number */}
                                  <div className="text-xs text-gray-400">
                                    {new Date(day.date).getDate()}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* X-axis line */}
                          <div className="absolute left-12 right-0 bottom-12 border-t border-gray-300"></div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg bg-gray-50">
                    No data available
                  </div>
                )}
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

