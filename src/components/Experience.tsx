import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase, Code2, Smartphone, Zap } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'UnqueMe',
      position: 'Software Engineer Intern',
      duration: '4 months',
      period: '2024',
      location: 'Remote',
      type: 'Internship',
      description: 'Full-stack development for salon booking ecosystem with 80+ verified commits across backend APIs and mobile applications',
      achievements: [
        // Backend Development (30+ commits)
        'Developed Service Management APIs with addServicesToBooking for real-time booking modifications',
        'Built comprehensive Booking Status Management system with event-driven state transitions',
        'Implemented Real-time Socket.IO integration for live booking updates and multi-client communication',
        'Created Gender-based Service Logic with dynamic filtering and personalized recommendations',
        'Developed advanced Coupon & Discount System with walk-in coupon generation and validation',
        'Built Database Scripts & Migration utilities for production data management',
        // Frontend Development (50+ commits)
        'Designed Service Management Interface with real-time modification during active bookings',
        'Implemented Dynamic Pricing System with interactive price adjustment and shrink ratio controls',
        'Created comprehensive Support Screen System with multi-screen interface and help documentation',
        'Built unified Profile Management system with reusable components across salon and consumer apps',
        'Developed Advanced Service Selection with Redux state management and API persistence',
        'Optimized Gallery & Media Management with responsive image handling and smooth transitions',
        'Resolved system-wide bugs and performance optimization including Android back button behavior'
      ],
      technologies: [
        'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'React Native', 'Redux', 'Socket.IO',
        'REST APIs', 'JWT Authentication', 'Payment Integration', 'Mongoose ODM', 'Git Workflows'
      ],
      icon: Building2,
      color: '#667eea'
    }
  ];

  const skills = [
    {
      category: 'Backend Development',
      icon: Code2,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Microservices', 'Socket.IO'],
      color: '#10b981'
    },
    {
      category: 'Frontend Development',
      icon: Smartphone,
      technologies: ['React', 'React Native', 'Redux', 'TypeScript', 'HTML5', 'CSS3'],
      color: '#f59e0b'
    },
    {
      category: 'DevOps & Tools',
      icon: Zap,
      technologies: ['Docker', 'Git', 'Vercel', 'Render', 'MongoDB Atlas', 'Swagger'],
      color: '#8b5cf6'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in software development and the impact I've made
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-timeline"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-dot" style={{ backgroundColor: exp.color }}>
                <exp.icon size={20} color="white" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="experience-card"
              >
                <div className="card-header">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">
                      <Calendar size={16} />
                      {exp.duration}
                    </span>
                    <span className="location">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="type">
                      <Briefcase size={16} />
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="achievements">
                  <h5 className="achievements-title">Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="achievement-item"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h5 className="tech-title">Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="tech-tag"
                        style={{ 
                          backgroundColor: `${exp.color}15`,
                          borderColor: `${exp.color}40`
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-overview"
        >
          <h3 className="skills-title">Core Competencies</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="skill-card"
              >
                <div 
                  className="skill-icon"
                  style={{ backgroundColor: `${skill.color}20`, borderColor: `${skill.color}40` }}
                >
                  <skill.icon size={24} color={skill.color} />
                </div>
                <h4 className="skill-category">{skill.category}</h4>
                <div className="skill-technologies">
                  {skill.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-tech">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-cta"
        >
          <div className="cta-content">
            <h3>Ready for New Challenges</h3>
            <p>Currently seeking internships & full-time roles in Software Engineering</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button"
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;