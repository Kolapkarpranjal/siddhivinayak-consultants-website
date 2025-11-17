import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../components/admin/Layout';
import API_URL from '../../config/api';

const Consultations = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalConsultations, setTotalConsultations] = useState(0);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchConsultations();
  }, [statusFilter, currentPage]);

  const fetchConsultations = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const params = {
        ...(statusFilter !== 'all' && { status: statusFilter }),
        page: currentPage,
        limit: itemsPerPage
      };
      const response = await axios.get(`${API_URL}/api/admin/consultations`, {
        headers: { Authorization: `Bearer ${token}` },
        params
      });

      if (response.data.success) {
        setConsultations(response.data.data.consultations);
        if (response.data.data.pagination) {
          setTotalPages(response.data.data.pagination.pages);
          setTotalConsultations(response.data.data.pagination.total);
        }
      }
    } catch (error) {
      console.error('Fetch consultations error:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
        toast.error('Session expired. Please login again.');
      } else if (error.response?.status === 404) {
        toast.error('Consultations endpoint not found. Please restart the backend server.');
      } else if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        toast.error('Cannot connect to backend server. Make sure it is running on port 5000.');
      } else {
        toast.error(`Failed to fetch consultations: ${error.response?.data?.message || error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${API_URL}/api/admin/consultations/${id}`,
        { status, isRead: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Status updated successfully');
      fetchConsultations();
      if (selectedConsultation && selectedConsultation._id === id) {
        setSelectedConsultation({ ...selectedConsultation, status });
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${type} copied to clipboard!`);
    }).catch(() => {
      toast.error('Failed to copy');
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const openModal = (consultation) => {
    setSelectedConsultation(consultation);
    setShowModal(true);
    // Mark as read when viewing
    if (consultation.status === 'new' && !consultation.isRead) {
      updateStatus(consultation._id, 'contacted');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedConsultation(null);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consultations</h1>
            <p className="text-gray-600 mt-1">Manage consultation requests</p>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>
        </div>

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
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {consultations.length > 0 ? (
                    consultations.map((consultation) => (
                      <tr key={consultation._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{consultation.name}</div>
                          {consultation.phone && (
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">{consultation.phone}</span>
                              <button
                                onClick={() => copyToClipboard(consultation.phone, 'Phone')}
                                className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                title="Copy phone"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-900">{consultation.email}</span>
                            <button
                              onClick={() => copyToClipboard(consultation.email, 'Email')}
                              className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                              title="Copy email"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{consultation.company || '-'}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{consultation.service || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(consultation.status)}`}>
                            {consultation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(consultation.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => openModal(consultation)}
                              className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                            >
                              View
                            </button>
                            <select
                              value={consultation.status}
                              onChange={(e) => updateStatus(consultation._id, e.target.value)}
                              className="px-3 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="scheduled">Scheduled</option>
                              <option value="completed">Completed</option>
                              <option value="archived">Archived</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                        No consultations found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalConsultations)}</span> of{' '}
                      <span className="font-medium">{totalConsultations}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                currentPage === page
                                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>;
                        }
                        return null;
                      })}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Consultation Details Modal */}
        {showModal && selectedConsultation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Consultation Details</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-sm text-gray-900">{selectedConsultation.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-900">{selectedConsultation.email}</p>
                      <button
                        onClick={() => copyToClipboard(selectedConsultation.email, 'Email')}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Copy email"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {selectedConsultation.phone && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-900">{selectedConsultation.phone}</p>
                        <button
                          onClick={() => copyToClipboard(selectedConsultation.phone, 'Phone')}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Copy phone"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  {selectedConsultation.company && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <p className="text-sm text-gray-900">{selectedConsultation.company}</p>
                    </div>
                  )}
                  {selectedConsultation.service && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                      <p className="text-sm text-gray-900">{selectedConsultation.service}</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedConsultation.status)}`}>
                      {selectedConsultation.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <p className="text-sm text-gray-900">
                      {new Date(selectedConsultation.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                {selectedConsultation.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <div className="mt-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedConsultation.message}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <select
                  value={selectedConsultation.status}
                  onChange={(e) => {
                    updateStatus(selectedConsultation._id, e.target.value);
                    setSelectedConsultation({ ...selectedConsultation, status: e.target.value });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Consultations;

