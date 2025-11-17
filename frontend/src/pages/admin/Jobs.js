import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../components/admin/Layout';
import API_URL from '../../config/api';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  
  // Filters and Search
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    category: '',
    description: '',
    requirements: '',
    status: 'draft'
  });
  const [categories, setCategories] = useState([
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
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, [statusFilter, categoryFilter, dateFrom, dateTo, searchQuery]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/api/admin/jobs/categories`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setCategories(response.data.data);
        console.log('Categories loaded:', response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      // Fallback to hardcoded categories if API fails
      setCategories([
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
      ]);
    }
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const params = {
        ...(statusFilter !== 'all' && { status: statusFilter }),
        ...(categoryFilter !== 'all' && { category: categoryFilter }),
        ...(dateFrom && { dateFrom }),
        ...(dateTo && { dateTo }),
        ...(searchQuery && { search: searchQuery })
      };
      
      const response = await axios.get(`${API_URL}/api/admin/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
        params
      });

      if (response.data.success) {
        setJobs(response.data.data.jobs);
        setStats(response.data.data.stats);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to fetch jobs');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const jobData = {
        ...formData,
        requirements: formData.requirements.split('\n').filter(r => r.trim())
      };

      if (editingJob) {
        await axios.put(
          `${API_URL}/api/admin/jobs/${editingJob._id}`,
          jobData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(
          `${API_URL}/api/admin/jobs`,
          jobData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setShowModal(false);
      setEditingJob(null);
      resetForm();
      toast.success(editingJob ? 'Job updated successfully' : 'Job created successfully');
      fetchJobs();
    } catch (error) {
      toast.error('Failed to save job');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      type: 'full-time',
      category: '',
      description: '',
      requirements: '',
      status: 'draft'
    });
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      company: job.company || '',
      location: job.location || '',
      type: job.type,
      category: job.category || '',
      description: job.description,
      requirements: job.requirements?.join('\n') || '',
      status: job.status
    });
    setShowModal(true);
  };

  const handleDuplicate = async (job) => {
    try {
      const token = localStorage.getItem('token');
      const duplicateData = {
        ...job,
        title: `${job.title} (Copy)`,
        status: 'draft'
      };
      delete duplicateData._id;
      delete duplicateData.createdAt;
      delete duplicateData.updatedAt;
      delete duplicateData.postedBy;
      delete duplicateData.applications;
      delete duplicateData.views;
      
      await axios.post(
        `${API_URL}/api/admin/jobs`,
        duplicateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchJobs();
    } catch (error) {
      toast.error('Failed to duplicate job');
    }
  };

  const handleDeleteClick = (id) => {
    setJobToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!jobToDelete) return;
    
    try {
      const token = localStorage.getItem('token');
      await axios.delete(
        `${API_URL}/api/admin/jobs/${jobToDelete}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Job deleted successfully');
      fetchJobs();
      setShowDeleteConfirm(false);
      setJobToDelete(null);
    } catch (error) {
      toast.error('Failed to delete job');
      setShowDeleteConfirm(false);
      setJobToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
    setJobToDelete(null);
  };

  const handleToggleStatus = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        `${API_URL}/api/admin/jobs/${id}/toggle-status`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchJobs();
    } catch (error) {
      toast.error('Failed to toggle status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      case 'archived': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Stats */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Jobs</h1>
            <p className="text-gray-600 mt-1">Manage job postings</p>
          </div>
          <button
            onClick={() => {
              setEditingJob(null);
              resetForm();
              setShowModal(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + Add New Job
          </button>
        </div>

        {/* Statistics Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalJobs}</p>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeJobs}</p>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Applications Received</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.applicationsReceived}</p>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">📄</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by title, location, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Posted</label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="From"
                />
              </div>
            </div>
          </div>
          
          {/* Date To Filter */}
          {dateFrom && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {dateTo && (
                <button
                  onClick={() => {
                    setDateFrom('');
                    setDateTo('');
                  }}
                  className="ml-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>

        {/* Jobs Table */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <tr key={job._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{job.title}</div>
                          {job.company && (
                            <div className="text-sm text-gray-500">{job.company}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{job.location || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(job.type)}`}>
                            {job.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {job.applications?.length || 0}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleEdit(job)}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                              title="Edit"
                            >
                              ✏️ Edit
                            </button>
                            <button
                              onClick={() => handleDuplicate(job)}
                              className="text-purple-600 hover:text-purple-800 font-medium"
                              title="Duplicate"
                            >
                              📋 Duplicate
                            </button>
                            <button
                              onClick={() => handleToggleStatus(job._id)}
                              className="text-green-600 hover:text-green-800 font-medium"
                              title="Toggle Status"
                            >
                              🔄 Toggle
                            </button>
                            <button
                              onClick={() => handleDeleteClick(job._id)}
                              className="text-red-600 hover:text-red-800 font-medium"
                              title="Delete"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                        No jobs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add/Edit Job Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {editingJob ? 'Edit Job' : 'Add New Job'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Requirements (one per line)
                    </label>
                    <textarea
                      rows="4"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="draft">Draft</option>
                      <option value="active">Active</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setEditingJob(null);
                        resetForm();
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingJob ? 'Update' : 'Create'} Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this job? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleDeleteCancel}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Jobs;
