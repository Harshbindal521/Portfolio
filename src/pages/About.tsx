import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, BookOpen, Briefcase, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-gray-300 mb-6">
                I'm a passionate software developer with expertise in full-stack web development, 
                specializing in creating responsive, user-friendly applications with modern technologies.
              </p>
              <p className="text-gray-400 mb-8">
                With over 1 year of experience in the industry, I've worked on a diverse range of projects 
                from e-commerce platforms to real-time applications. I'm dedicated to writing clean, 
                maintainable code and constantly learning new technologies to stay at the forefront of web development.
              </p>
              <a 
                href="/Harsh_bindal_resume_compressed.pdf" 
                target="_blank"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors inline-flex items-center"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                  <img 
                    src="/adminpic2.jpg" 
                    alt="Developer" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-95"
                  />
                </div>
                <div className="absolute inset-0 flex items-start pt-20 pl-4">
                  <div className="">
                    <h3 className="text-[40px] font-bold mb-2">Harsh Bindal</h3>
                    <p className="text-xl">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "Next.js", level: 80 },
                  { name: "Tailwind CSS", level: 90 },
                  { name: "Three.js", level: 75 }
                ]
              },
              {
                category: "Backend",
                skills: [
                  { name: "Node.js", level: 90 },
                  { name: "Express", level: 85 },
                  { name: "MongoDB", level: 80 },
                  { name: "PostgreSQL", level: 75 },
                  { name: "GraphQL", level: 70 }
                ]
              },
              {
                category: "Other",
                skills: [
                  { name: "Git", level: 85 },
                  { name: "Docker", level: 75 },
              
                  
                  { name: "Testing", level: 75 }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey and the companies I've had the pleasure to work with.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                role: "Full Stack Developer",
                company: "TestKart",
                period: "Feb-2025 - Present",
                description: "Leading development of enterprise web applications using Next.js. Implementing CI/CD pipelines and mentoring junior developers.",
                achievements: [
                  "Improved platform performance by reducing load time by 40% through efficient code optimization",
                  "Contibute in a team of 5 developers, ensuring timely project delivery while maintaining code quality and best practices.",
                  "Led a team of 5 developers to deliver projects on time and within budget"
                ]
              },
              {
                role: "Full Stack Developer",
                company: "Mai Labs pvt. Ltd.",
                period: "Dec-2024 - Feb-2025",
                description: "Working on TestKart, a test series platform where students can purchase and attempt test series to prepare for exams. Responsible for developing and optimizing the platform using React, Node.js, and MongoDB to enhance user experience and performance.",
                achievements: [
                
                ]
              },
              {
                role: "Frontend Developer",
                company: "WebCraft Agency",
                period: "2023 - 2023",
                description: "Created responsive, user-friendly interfaces for client websites using HTML, CSS, JavaScript, and React.",
                achievements: [
                  "Developed 20+ client websites with modern UI/UX principles",
                  "Implemented animation and interactive elements using CSS and JavaScript",
                  "Collaborated with designers to translate mockups into functional interfaces"
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5"></div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-blue-400">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 px-4 py-1 bg-gray-700 rounded-full text-sm inline-block">
                      {job.period}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic background and professional certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <div className="flex items-start mb-4">
                <BookOpen className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                  <p className="text-blue-400">Noida institute of engineering and technology</p>
                  <p className="text-gray-400">2022 - 2024</p>
                  <p className="text-gray-300 mt-2">
                    Focused on software engineering, algorithms, and web development.
                    Graduated with honors.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Bachelor of computer applications</h4>
                  <p className="text-blue-400">Silver Bells Institute of higher Education</p>
                  <p className="text-gray-400">2019 - 2022</p>
                  <p className="text-gray-300 mt-2">
                    Studied fundamentals of web design and development.
                    Completed with distinction.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <div className="flex items-start mb-4">
                <Award className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
              </div>
            { /* <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">AWS Certified Developer</h4>
                  <p className="text-blue-400">Amazon Web Services</p>
                  <p className="text-gray-400">2022</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">MongoDB Certified Developer</h4>
                  <p className="text-blue-400">MongoDB Inc.</p>
                  <p className="text-gray-400">2021</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">React Advanced Concepts</h4>
                  <p className="text-blue-400">Frontend Masters</p>
                  <p className="text-gray-400">2020</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Professional Scrum Master I</h4>
                  <p className="text-blue-400">Scrum.org</p>
                  <p className="text-gray-400">2019</p>
                </div>
              </div>*/}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              When I'm not coding, here's what keeps me busy and inspired.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Open Source",
                description: "Contributing to open source projects and giving back to the developer community."
              },
              {
                title: "Photography",
                description: "Capturing moments and exploring visual storytelling through my camera lens."
              },
              {
                title: "Hiking",
                description: "Exploring nature trails and mountains to disconnect and find inspiration."
              }
            ].map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl text-center"
              >
                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                <p className="text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;