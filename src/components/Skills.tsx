import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Cloud,
  Zap,
  Layers,
  GitBranch,
  Cpu
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: '#3b82f6',
      skills: [
        { name: 'JavaScript', level: 90, years: '2+', icon: '🟨' },
        { name: 'TypeScript', level: 80, years: '1.5+', icon: '🔷' },
        { name: 'React.js', level: 85, years: '1.5+', icon: '⚛️' },
        { name: 'HTML5', level: 95, years: '2+', icon: '🟧' },
        { name: 'CSS3', level: 90, years: '2+', icon: '🔵' },
        { name: 'Tailwind CSS', level: 80, years: '1+', icon: '💨' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: '#10b981',
      skills: [
        { name: 'Node.js', level: 88, years: '2+', icon: '🟢' },
        { name: 'Express.js', level: 85, years: '2+', icon: '⚡' },
        { name: 'RESTful APIs', level: 90, years: '2+', icon: '🔗' },
        { name: 'Microservices', level: 70, years: '6mo+', icon: '🔧' },
        { name: 'Socket.IO', level: 75, years: '1+', icon: '🔌' },
        { name: 'JWT Auth', level: 85, years: '1.5+', icon: '🔐' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: '#8b5cf6',
      skills: [
        { name: 'MongoDB', level: 80, years: '1.5+', icon: '🍃' },
        { name: 'PostgreSQL', level: 70, years: '1+', icon: '🐘' },
        { name: 'Redis', level: 65, years: '6mo+', icon: '❤️' },
        { name: 'Mongoose', level: 85, years: '1.5+', icon: '🦫' },
        { name: 'Database Design', level: 75, years: '1.5+', icon: '📊' },
        { name: 'Query Optimization', level: 70, years: '1+', icon: '⚡' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: '#f59e0b',
      skills: [
        { name: 'React Native', level: 85, years: '1.5+', icon: '📱' },
        { name: 'Redux', level: 80, years: '1.5+', icon: '🔄' },
        { name: 'Expo', level: 75, years: '1+', icon: '🚀' },
        { name: 'Mobile UI/UX', level: 80, years: '1+', icon: '🎨' },
        { name: 'App Store Deploy', level: 70, years: '6mo+', icon: '📦' },
        { name: 'Push Notifications', level: 65, years: '6mo+', icon: '🔔' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: '#ef4444',
      skills: [
        { name: 'Docker', level: 75, years: '1+', icon: '🐳' },
        { name: 'Git & GitHub', level: 90, years: '2+', icon: '🐙' },
        { name: 'Vercel', level: 85, years: '1.5+', icon: '▲' },
        { name: 'Render', level: 80, years: '1+', icon: '🎯' },
        { name: 'MongoDB Atlas', level: 85, years: '1.5+', icon: '☁️' },
        { name: 'Swagger/OpenAPI', level: 75, years: '1+', icon: '📋' }
      ]
    },
    {
      title: 'Programming Concepts',
      icon: Cpu,
      color: '#06b6d4',
      skills: [
        { name: 'Data Structures', level: 85, years: '2+', icon: '🏗️' },
        { name: 'Algorithms', level: 80, years: '2+', icon: '🧮' },
        { name: 'Design Patterns', level: 75, years: '1+', icon: '🎨' },
        { name: 'System Design', level: 70, years: '1+', icon: '🏛️' },
        { name: 'Performance Opt.', level: 75, years: '1+', icon: '⚡' },
        { name: 'Testing', level: 70, years: '6mo+', icon: '🧪' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Production Apps',
      value: '3+',
      description: 'Live projects deployed',
      icon: '🚀'
    },
    {
      title: 'GitHub Commits',
      value: '161+',
      description: 'This year contributions',
      icon: '💻'
    },
    {
      title: 'Technologies',
      value: '15+',
      description: 'Mastered tech stack',
      icon: '⚡'
    },
    {
      title: 'Code Quality',
      value: 'Enterprise',
      description: 'Production-ready code',
      icon: '✨'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies I use to bring ideas to life and create impactful digital solutions
          </p>
        </motion.div>

        {/* Achievements Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="achievements-grid"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="achievement-card"
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-value">{achievement.value}</div>
              <div className="achievement-title">{achievement.title}</div>
              <div className="achievement-description">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{ scale: 1.02 }}
              className="skill-category"
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: `${category.color}20`, borderColor: `${category.color}40` }}
                >
                  <category.icon size={24} color={category.color} />
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-progress">
                    <div className="progress-info">
                      <span className="avg-level">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}% Proficiency
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <div className="skill-meta">
                        <span className="skill-years">{skill.years}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="learning-section"
        >
          <div className="learning-content">
            <div className="learning-header">
              <Zap className="learning-icon" />
              <h3>Continuous Learning</h3>
            </div>
            
            <div className="learning-stats">
              <div className="learning-item">
                <GitBranch className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-title">Currently Learning</span>
                  <span className="stat-value">Next.js 15, GraphQL, AWS</span>
                </div>
              </div>
              
              <div className="learning-item">
                <Layers className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-title">Exploring</span>
                  <span className="stat-value">AI/ML, Blockchain, DevOps</span>
                </div>
              </div>
              
              <div className="learning-item">
                <Code2 className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-title">Focus Area</span>
                  <span className="stat-value">Full-stack Development</span>
                </div>
              </div>
            </div>

            <div className="learning-quote">
              <blockquote>
                "The best way to predict the future is to create it."
                <cite>- Peter Drucker</cite>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-cta"
        >
          <div className="cta-content">
            <h3>Let's Build Something Amazing</h3>
            <p>
              Ready to bring your ideas to life with cutting-edge technology? 
              I'm passionate about creating scalable solutions and learning new technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;