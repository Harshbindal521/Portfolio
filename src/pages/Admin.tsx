import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Trash2, Upload, FileText, RefreshCw, Mail } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

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
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/contacts`);
      setContacts(response.data);
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
        toast.error('Only PDF files are allowed');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }

      setResumeFile(file);
      setUploadStatus('idle');
    }
  };

  const handleUpload = async () => {
    if (!resumeFile) return;

    setUploadStatus('uploading');

    const formData = new FormData();
    formData.append('resume', resumeFile);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/upload-resume`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        toast.success('Resume uploaded successfully!');
        setUploadStatus('success');
        setResumeFile(null);
      } else {
        throw new Error(response.data.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast.error('Failed to upload resume. Please try again.');
      setUploadStatus('error');
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete message');
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="bg-gray-800 rounded-xl p-6 mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" />
                Resume Management
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Resume File (PDF only, max 5MB)</label>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="resume-upload" />
                <label htmlFor="resume-upload" className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors">
                  <Upload className="mr-2 h-5 w-5" />
                  {resumeFile ? resumeFile.name : "Upload Resume"}
                </label>
                <button onClick={handleUpload} disabled={!resumeFile || uploadStatus === 'uploading'}
                  className={`px-6 py-2 rounded-lg font-medium flex items-center justify-center ${
                    uploadStatus === 'uploading' ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}>
                  {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Resume'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                Contact Messages
              </h2>
              <button onClick={fetchContacts} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center transition-colors">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </button>

              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                  <span className="ml-3 text-lg">Loading messages...</span>
                </div>
              ) : contacts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-400">No messages received.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {contacts.map((contact) => (
                    <motion.div key={contact._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                      className="bg-gray-900 rounded-lg p-5">
                      <h3 className="font-semibold text-lg">{contact.name}</h3>
                      <p className="text-blue-400">{contact.email}</p>
                      <p className="text-gray-300 mb-3">{contact.message}</p>
                      <button onClick={() => handleDeleteContact(contact._id)} className="text-red-400 hover:text-red-300 flex items-center text-sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </button>
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
