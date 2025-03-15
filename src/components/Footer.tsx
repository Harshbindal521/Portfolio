import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div >
             <img src="./logo2.png" alt="logo"  className='h-20 w-40  grayscale hover:grayscale-0 pl-1' />
            <p className="text-gray-400 mb-4">
              Showcasing my journey, projects, and expertise as a software developer.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Harshbindal521" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="www.linkedin.com/in/harsh-bindal-145213191

" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="www.linkedin.com/in/harsh-bindal-145213191

" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:harsh521bindal@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: harsh521bindal@gnail.com</p>
            <p className="text-gray-400 mb-2">Location: Noida, India</p>
            <p className="text-gray-400">Available for remote work worldwide</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Harsh's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;