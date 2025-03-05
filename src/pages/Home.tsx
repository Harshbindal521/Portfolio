import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
  return (
    <div className="relative">
      <ThreeScene />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Software Developer & Full Stack Engineer
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Building innovative web applications with modern technologies.
                Specialized in React, Node.js, and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors flex items-center">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors">
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              With a strong foundation in full-stack development, I bring ideas to life with clean, efficient code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-blue-500" />,
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
                skills: ["React", "TypeScript", "Tailwind CSS", "Three.js"]
              },
              {
                icon: <Server className="h-10 w-10 text-green-500" />,
                title: "Backend Development",
                description: "Building robust server-side applications with Node.js, Express, and various databases.",
                skills: ["Node.js", "Express", "REST APIs", "GraphQL"]
              },
              {
                icon: <Database className="h-10 w-10 text-yellow-500" />,
                title: "Database Management",
                description: "Designing and optimizing database schemas for performance and scalability.",
                skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
              },
              {
                icon: <Globe className="h-10 w-10 text-purple-500" />,
                title: "DevOps & Cloud",
                description: "Deploying and managing applications in cloud environments with CI/CD pipelines.",
                skills: ["AWS", "Docker", "GitHub Actions", "Kubernetes"]
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A selection of my recent work showcasing my technical abilities and problem-solving skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React", "Node.js", "MongoDB", "Stripe"]
              },
              {
                title: "Real-time Chat Application",
                description: "Secure messaging platform with real-time updates, file sharing, and user authentication.",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Socket.io", "React", "Express", "JWT"]
              },
              {
                title: "Data Visualization Dashboard",
                description: "Interactive analytics dashboard for monitoring business metrics and visualizing complex datasets.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["D3.js", "React", "Node.js", "PostgreSQL"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
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
                      <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/projects" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting opportunities.
            Let's discuss how I can help with your next project.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded-full font-medium transition-colors inline-flex items-center">
            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;