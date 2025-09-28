import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, Code, Coffee } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js',
    'React Native', 'Docker', 'Microservices', 'Socket.IO', 'Redux'
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-main"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-greeting"
            >
              <span className="greeting-text">🌟 أهلاً وسهلاً • स्वागतम्</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-title"
            >
              Salam, I'm{' '}
              <span className="name-highlight">Sajjad Ansari</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-subtitle"
            >
              <Code className="subtitle-icon" />
              <span className="typing-animation">Full Stack Developer (JavaScript) </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hero-description"
            >
              Passionate MERN Stack developer from{' '}
              <span className="location">
                <MapPin size={16} />
                Kolkata, India
              </span>
              . I specialize in building scalable web applications with modern technologies,
              microservices architecture, and creating seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hero-stats"
            >
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Live Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="hero-actions"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="btn btn-primary"
              >
                <Code size={18} />
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="btn btn-secondary"
              >
                <Coffee size={18} />
                Let's Connect
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1_CpHM6ItNEEdIzuGJLmwRq2dFLSnMC72/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-image"
          >
            <div className="image-container">
              <div className="image-glow"></div>
              <img
                src="https://avatars.githubusercontent.com/u/132455347?s=400&v=4"
                alt="Sajjad Ansari"
                className="profile-image"
              />
              <div className="image-overlay">
                <Coffee className="overlay-icon" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="tech-marquee"
        >
          <div className="marquee-container">
            <div className="marquee-content">
              {[...techStack, ...techStack].map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="scroll-indicator"
          onClick={() => scrollToSection('#about')}
        >
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;