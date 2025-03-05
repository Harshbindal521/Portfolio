import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Trash2, Upload, FileText, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<null | 'uploading' | 'success' | 'error'>(null);
  const [uploadMessage, setUploadMessage] = useState('');
  
  useEffect(() => {
    fetchContacts();
  }, []);
  
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/contacts');
      setContacts(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contact messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setUploadStatus('error');
        setUploadMessage('Only PDF files are allowed');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setUploadStatus('error');
        setUploadMessage('File size must be less than 5MB');
        return;
      }
      setResumeFile(file);
      setUploadStatus(null);
      setUploadMessage('');
    }
  };
  
  const handleUpload = async () => {
    if (!resumeFile) return;
    
    setUploadStatus('uploading');
    setUploadMessage('Uploading resume...');
    
    const formData = new FormData();
    formData.append('resume', resumeFile);
    
    try {
      const response = await axios.post('/api/upload-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        setUploadStatus('success');
        setUploadMessage('Resume uploaded successfully!');
        setResumeFile(null);
      } else {
        throw new Error(response.data.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading resume:', error);
      setUploadStatus('error');
      setUploadMessage('Failed to upload resume. Please try again.');
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            
            {/* Resume Upload Section */}
            <div className="bg-gray-800 rounded-xl p-6 mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" />
                Resume Management
              </h2>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-4">
                  Upload your resume in PDF format. This will be available for download on your portfolio.
                </p>
                
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                  <div className="flex-grow">
                    <label className="block text-sm font-medium mb-2">
                      Resume File (PDF only, max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors"
                      >
                        <Upload className="mr-2 h-5 w-5" />
                        {resumeFile ? resumeFile.name : 'Choose PDF file'}
                      </label>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleUpload}
                    disabled={!resumeFile || uploadStatus === 'uploading'}
                    className={`px-6 py-2 rounded-lg font-medium flex items-center justify-center ${
                      !resumeFile || uploadStatus === 'uploading'
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors`}
                  >
                    {uploadStatus === 'uploading' ? (
                      <>
                        <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-5 w-5" />
                        Upload Resume
                      </>
                    )}
                  </button>
                </div>
                
                {uploadStatus && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    uploadStatus === 'success' ? 'bg-green-900/30 border border-green-500' :
                    uploadStatus === 'error' ? 'bg-red-900/30 border border-red-500' :
                    'bg-blue-900/30 border border-blue-500'
                  }`}>
                    <div className="flex items-center">
                      {uploadStatus === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                      {uploadStatus === 'error' && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
                      {uploadStatus === 'uploading' && <RefreshCw className="h-5 w-5 text-blue-500 mr-2 animate-spin" />}
                      <p className={`text-sm ${
                        uploadStatus === 'success' ? 'text-green-400' :
                        uploadStatus === 'error' ? 'text-red-400' :
                        'text-blue-400'
                      }`}>
                        {uploadMessage}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Contact Messages Section */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-500" />
                  Contact Messages
                </h2>
                
                <button
                  onClick={fetchContacts}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center transition-colors"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </button>
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                  <span className="ml-3 text-lg">Loading messages...</span>
                </div>
              ) : error ? (
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                  <p className="text-red-400">{error}</p>
                </div>
              ) : contacts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-400">No contact messages yet.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {contacts.map((contact, index) => (
                    <motion.div
                      key={contact._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-900 rounded-lg p-5"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{contact.name}</h3>
                          <p className="text-blue-400">{contact.email}</p>
                        </div>
                        <span className="text-sm text-gray-500">{formatDate(contact.createdAt)}</span>
                      </div>
                      <p className="text-gray-300 mb-3 whitespace-pre-line">{contact.message}</p>
                      <div className="flex justify-end">
                        <button className="text-red-400 hover:text-red-300 flex items-center text-sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;