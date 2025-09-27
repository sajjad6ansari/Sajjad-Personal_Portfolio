import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Filter,
  Star,
  GitFork
} from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'College Appointment System',
      subtitle: 'Full-Stack MERN Application',
      description: 'A comprehensive appointment booking system for students and professors with JWT authentication, role-based access control, and smart scheduling with conflict detection.',
      longDescription: 'Built with React 19, Node.js 18, MongoDB, and Docker. Features include real-time scheduling, comprehensive API documentation with Swagger, and responsive mobile-first design. Deployed on Vercel + Render + MongoDB Atlas.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Docker', 'Swagger'],
      category: 'Full-Stack',
      featured: true,
      githubUrl: 'https://github.com/sajjad6ansari/College-Appointment-System-API',
      liveUrl: 'https://college-appointment-system-frontend.vercel.app/',
      stats: {
        stars: 12,
        forks: 5,
        language: 'JavaScript'
      },
      highlights: [
        'JWT Authentication & Authorization',
        'Role-based Access Control',
        'Smart Conflict Detection',
        'Docker Containerization',
        'Cloud Deployment',
        'API Documentation'
      ]
    },
    {
      id: 2,
      title: 'The Reading Retreat',
      subtitle: 'Microservices Blog Platform',
      description: 'A sophisticated blog platform built with microservices architecture, featuring event-driven communication, real-time comments, and advanced content moderation.',
      longDescription: 'Next.js 15 frontend with TypeScript, distributed microservices backend, Docker containerization, and polyglot persistence strategy using both PostgreSQL and MongoDB.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Microservices', 'Docker', 'PostgreSQL', 'MongoDB', 'RabbitMQ'],
      category: 'Microservices',
      featured: true,
      githubUrl: 'https://github.com/sajjad6ansari/Blog-App-Microservices-frontend',
      liveUrl: 'https://blog-app-microservices-frontend.vercel.app/',
      stats: {
        stars: 8,
        forks: 3,
        language: 'TypeScript'
      },
      highlights: [
        'Event-Driven Architecture',
        'Real-time Communication',
        'Content Moderation Pipeline',
        'Service Discovery',
        'Load Balancing',
        'Polyglot Persistence'
      ]
    },
    {
      id: 3,
      title: 'Jobs API',
      subtitle: 'RESTful API Service',
      description: 'A robust RESTful API for managing job postings with user authentication, CRUD operations, and comprehensive error handling built with Node.js and MongoDB.',
      longDescription: 'Complete backend solution with secure authentication, data validation, pagination, search functionality, and detailed API documentation.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'Bcrypt'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/Jobs-API',
      liveUrl: 'https://jobs-api-sajjad.onrender.com/',
      stats: {
        stars: 6,
        forks: 2,
        language: 'JavaScript'
      },
      highlights: [
        'RESTful API Design',
        'User Authentication',
        'CRUD Operations',
        'Error Handling',
        'Data Validation',
        'Search & Pagination'
      ]
    },
    {
      id: 4,
      title: 'Task Manager API',
      subtitle: 'Node.js REST API',
      description: 'A comprehensive task management API with user authentication, CRUD operations, and MongoDB integration for efficient task organization.',
      longDescription: 'Built with Node.js and Express.js, featuring secure user authentication, task categorization, due date management, and comprehensive error handling.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'Bcrypt'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/Task-Manager-API',
      liveUrl: '#',
      stats: {
        stars: 4,
        forks: 1,
        language: 'JavaScript'
      },
      highlights: [
        'User Authentication',
        'Task CRUD Operations',
        'MongoDB Integration',
        'JWT Token Management',
        'Input Validation',
        'Error Handling'
      ]
    },
    {
      id: 5,
      title: 'Store API',
      subtitle: 'E-commerce Backend',
      description: 'A scalable e-commerce store API with product management, filtering, sorting, and search functionality built with Node.js and MongoDB.',
      longDescription: 'Advanced backend solution for e-commerce with product catalog management, dynamic filtering, sorting capabilities, and optimized database queries.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Query Optimization'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/Store-API',
      liveUrl: '#',
      stats: {
        stars: 3,
        forks: 1,
        language: 'JavaScript'
      },
      highlights: [
        'Product Management',
        'Advanced Filtering',
        'Dynamic Sorting',
        'Search Functionality',
        'Query Optimization',
        'RESTful Design'
      ]
    },
    {
      id: 6,
      title: 'Travel Responsive Website',
      subtitle: 'Responsive Web Design',
      description: 'A responsive travel website designed to adapt seamlessly across various screen sizes and devices, utilizing modern CSS techniques and media queries.',
      longDescription: 'Built with HTML5 and CSS3, featuring CSS Flexbox for layout management, media queries for responsive design, and optimal user experience across desktops, tablets, and smartphones.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'CSS Flexbox', 'Responsive Design', 'Media Queries'],
      category: 'Frontend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/todo-list',
      liveUrl: 'https://traveltheworldresponsive.netlify.app/',
      stats: {
        stars: 3,
        forks: 1,
        language: 'HTML'
      },
      highlights: [
        'Responsive Design',
        'Cross-device Compatibility',
        'Modern CSS Techniques',
        'Mobile-first Approach',
        'Optimized Performance',
        'Clean UI/UX'
      ]
    },
    {
      id: 7,
      title: 'JavaScript Todo List',
      subtitle: 'Modern JavaScript App',
      description: 'A sophisticated todo list application built with modern JavaScript techniques including Proxies for state management, Custom Events, and ES6 Modules.',
      longDescription: 'Advanced JavaScript project utilizing Proxies for reactive state management, Custom Events for component communication, ES6 Modules for code organization, and local storage for data persistence.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'ES6 Modules', 'Local Storage', 'Proxies'],
      category: 'Frontend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/todo-list',
      liveUrl: 'https://simpletodolistjs.netlify.app/',
      stats: {
        stars: 4,
        forks: 2,
        language: 'JavaScript'
      },
      highlights: [
        'Proxy-based State Management',
        'Custom Events System',
        'ES6 Modules Architecture',
        'Local Storage Persistence',
        'Modern JavaScript Patterns',
        'Responsive Interface'
      ]
    },
    {
      id: 8,
      title: 'Simple CRUD App',
      subtitle: 'Product Management API',
      description: 'A Node.js application providing RESTful API for managing products with full CRUD operations using Express.js and MongoDB.',
      longDescription: 'Complete backend solution with modular architecture featuring separate controllers, models, and routes. Built with Express.js for routing and MongoDB with Mongoose ODM for data management.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'CRUD'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/simple-crud-app-backend',
      liveUrl: '#',
      stats: {
        stars: 5,
        forks: 2,
        language: 'JavaScript'
      },
      highlights: [
        'Complete CRUD Operations',
        'RESTful API Design',
        'Modular Architecture',
        'MongoDB Integration',
        'Mongoose ODM',
        'Express.js Routing'
      ]
    },
    {
      id: 9,
      title: 'JWT Basics',
      subtitle: 'Authentication Demo',
      description: 'A demonstration project showcasing JWT authentication implementation with Node.js, including user registration, login, and protected routes.',
      longDescription: 'Educational project demonstrating JWT token implementation, middleware creation, and secure authentication patterns in Node.js applications.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'JWT', 'Bcrypt', 'Authentication'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/sajjad6ansari/JWT-Basics',
      liveUrl: '#',
      stats: {
        stars: 2,
        forks: 0,
        language: 'JavaScript'
      },
      highlights: [
        'JWT Implementation',
        'User Registration',
        'Secure Login',
        'Protected Routes',
        'Token Validation',
        'Security Best Practices'
      ]
    },
    {
      id: 10,
      title: 'UnqueMe Salon Platform',
      subtitle: 'Professional Project',
      description: 'Full-stack salon booking platform with real-time features, payment integration, and cross-platform mobile app built during my internship.',
      longDescription: 'Contributed 80+ commits across backend and frontend. Built real-time booking system with Socket.IO, implemented Redux state management, and created dynamic pricing engine. Published live apps on Google Play Store.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.IO', 'Redux', 'Payment Gateway'],
      category: 'Mobile',
      featured: true,
      githubUrl: '#private',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.unque.consumer',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.unque.salonConsumer',
      stats: {
        stars: 0,
        forks: 0,
        language: 'JavaScript'
      },
      highlights: [
        'Real-time Booking System',
        'Payment Integration',
        'Cross-platform Mobile App',
        'Dynamic Pricing Engine',
        'State Management',
        'Performance Optimization'
      ]
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Microservices', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects.sort((a, b) => {
        // Featured projects first, then by id
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      })
    : projects.filter(project => project.category === activeFilter)
        .sort((a, b) => {
          // Featured projects first, then by id
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.id - b.id;
        });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack': return Globe;
      case 'Frontend': return Code2;
      case 'Backend': return Database;
      case 'Microservices': return Code2;
      case 'Mobile': return Smartphone;
      default: return Code2;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my journey in building scalable applications and exploring modern technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="filter-section"
        >
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by category</span>
          </div>
          <div className="filter-buttons">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                >
                  <IconComponent size={16} />
                  {category}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                layout
                className={`project-card ${project.featured ? 'featured' : ''}`}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={14} />
                    Featured
                  </div>
                )}

                <div className="project-image">
                  <div className="image-placeholder">
                    <Code2 size={40} />
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-buttons">
                      {project.githubUrl !== '#private' && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="overlay-btn"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl !== '#' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="overlay-btn"
                        >
                          <Smartphone size={20} />
                        </motion.a>
                      )}
                      {project.playStoreUrl && (
                        <motion.a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="overlay-btn"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="project-category">
                        {React.createElement(getCategoryIcon(project.category), { size: 16 })}
                        {project.category}
                      </span>
                      {project.githubUrl !== '#private' && (
                        <div className="project-stats">
                          <span className="stat">
                            <Star size={14} />
                            {project.stats.stars}
                          </span>
                          <span className="stat">
                            <GitFork size={14} />
                            {project.stats.forks}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h5 className="highlights-title">Key Features:</h5>
                    <div className="highlights-grid">
                      {project.highlights.slice(0, 4).map((highlight, index) => (
                        <span key={index} className="highlight-item">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-tech">
                    <div className="tech-stack">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="tech-badge"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    {project.githubUrl !== '#private' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="action-btn primary"
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                    )}
                    {project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="action-btn secondary"
                      >
                        <Smartphone size={18} />
                        {project.category === 'Mobile' ? 'Consumer App' : 'Live Demo'}
                      </motion.a>
                    )}
                    {project.playStoreUrl && (
                      <motion.a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="action-btn secondary"
                      >
                        <Smartphone size={18} />
                        Salon App
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <div className="cta-content">
            <h3>Interested in collaborating?</h3>
            <p>I'm always excited to work on new projects and explore innovative technologies</p>
            <div className="cta-buttons">
              <motion.a
                href="https://github.com/sajjad6ansari"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn primary"
              >
                <Github size={20} />
                View All Projects
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cta-btn secondary"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;