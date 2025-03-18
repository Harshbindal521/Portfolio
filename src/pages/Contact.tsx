import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone,MessageCircleMore } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [statusMessage, setStatusMessage] = useState('');

  // CAPTCHA Question
  const captchaQuestion = 'What is 7 + 2?';
  const captchaAnswer = '9';

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
      captcha: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    if (formData.captcha !== captchaAnswer) {
      newErrors.captcha = 'Incorrect answer';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!form.current) return;

      const result = await emailjs.sendForm(
        'service_zu1fn1j',   // Your EmailJS Service ID
        'template_3q5s4ws',  // Your EmailJS Template ID
        form.current,
        'YDXMsvxGNB-EorxAb'  // Your EmailJS Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '', captcha: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-300 mb-8">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of the following methods. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">harsh521bindal@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">Noida, India</p>
                      <p className="text-gray-400">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+91 8755646436</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Harshbindal521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harsh-bindal-145213191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/918755646436"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                      
                    >
                    <MessageCircleMore  className="h-5 w-5" />
                      
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gray-900 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  {submitStatus && (
                    <div className={`mb-4 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                      {statusMessage}
                    </div>
                  )}
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your Name" 
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Your Email" 
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Your Message" 
                        rows={4} 
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-400 font-medium mb-2">{captchaQuestion}</label>
                      <input 
                        type="text" 
                        name="captcha" 
                        value={formData.captcha} 
                        onChange={handleChange} 
                        placeholder="Enter answer" 
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.captcha ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.captcha && <p className="mt-1 text-sm text-red-500">{errors.captcha}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center ${
                        isSubmitting
                          ? 'bg-gray-700 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } transition-colors`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Me Here</h2>
            <div className="h-96 rounded-xl overflow-hidden">
              <iframe
                title="Location Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85922746037!2d77.23700751999432!3d28.52240403862467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1741809830625!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;