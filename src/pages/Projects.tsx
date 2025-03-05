import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
      longDescription: "Built with React, Node.js, and MongoDB, this e-commerce platform features user authentication, product catalog with search and filtering, shopping cart functionality, secure checkout with Stripe integration, order tracking, and a comprehensive admin dashboard for inventory and order management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Secure messaging platform with real-time updates, file sharing, and user authentication.",
      longDescription: "This real-time chat application uses Socket.io for instant messaging, supports private and group conversations, includes file sharing capabilities, end-to-end encryption for secure communication, read receipts, and user presence indicators. Built with React for the frontend and Node.js/Express for the backend.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Socket.io", "React", "Express", "JWT"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard for monitoring business metrics and visualizing complex datasets.",
      longDescription: "This dashboard application provides real-time data visualization with interactive charts and graphs using D3.js and React. It features customizable widgets, data filtering options, export capabilities, and responsive design for mobile and desktop viewing. The backend is built with Node.js and PostgreSQL for efficient data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["D3.js", "React", "Node.js", "PostgreSQL"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative project management tool with task tracking, team assignments, and progress visualization.",
      longDescription: "A comprehensive task management system that allows teams to create projects, assign tasks, track progress, and collaborate effectively. Features include drag-and-drop task boards, time tracking, file attachments, comment threads, and detailed reporting. Built with React, Redux, and a Node.js/Express backend with MongoDB.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Redux", "Express", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and historical data.",
      longDescription: "This weather application provides current conditions and forecasts based on user location or search. It features interactive maps with weather layers, hourly and 7-day forecasts, severe weather alerts, and historical weather data visualization. Built with React and integrates with multiple weather APIs for accurate data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "APIs", "Geolocation", "Charts.js"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "Content Management System",
      description: "Custom CMS with rich text editing, media management, and role-based access control.",
      longDescription: "A flexible content management system that allows users to create, edit, and publish content with a rich text editor, media library, and customizable templates. Features include version history, scheduled publishing, SEO tools, and role-based permissions. Built with React for the frontend and Node.js with PostgreSQL for the backend.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Redis"],
      category: "backend",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore my portfolio of web applications, showcasing my skills in frontend and backend development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.longDescription}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                    >
                      Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Collaboration CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in collaborating?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded-full font-medium transition-colors inline-flex items-center"
          >
            Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;