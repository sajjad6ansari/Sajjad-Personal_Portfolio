import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  FileText,
  MessageCircle,
  Coffee,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('srUV4mZSvv70jKIwv');
    console.log('EmailJS initialized with public key: srUV4mZSvv70jKIwv');
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sajjad6ansari@gmail.com',
      link: 'mailto:sajjad6ansari@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kolkata, India',
      link: '#',
      color: '#10b981'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Open to opportunities',
      link: '#',
      color: '#f59e0b'
    },
    {
      icon: Coffee,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
      color: '#8b5cf6'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sajjad6ansari',
      color: '#333',
      username: '@sajjad6ansari'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sajjad-ansari-solo/',
      color: '#0077b5',
      username: '/in/sajjad-ansari-solo/'
    },
    {
      icon: FileText,
      name: 'Quick Bio',
      url: 'https://sajjadbio.netlify.app/',
      color: '#667eea',
      username: 'sajjadbio.netlify.app'
    },
    {
      icon: MessageCircle,
      name: 'Dev.to',
      url: 'https://dev.to/sajjad_ansari_ahlan',
      color: '#0a0a0a',
      username: '@sajjad_ansari_ahlan'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      console.error('Form validation failed: Missing required fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // EmailJS configuration with exact credentials matching your template
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Portfolio Contact Form',
        message: formData.message.trim()
      };

      console.log('Sending email with params:', templateParams);
      
      const response = await emailjs.send(
        'service_3hjgrei',
        'template_eo48xws',
        templateParams,
        'srUV4mZSvv70jKIwv'
      );
      
      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Error details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Error message:', error.message);
      
      // Specific error handling for common issues
      if (error.status === 412 && error.text?.includes('insufficient authentication scopes')) {
        console.error('🚨 SOLUTION: Gmail service needs re-authentication in EmailJS dashboard');
        console.error('📋 Steps: 1) Go to EmailJS dashboard 2) Services tab 3) Re-authenticate Gmail service');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to turn ideas into reality? I'm always excited to discuss new opportunities, 
            collaborate on projects, or just have a friendly chat about technology.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="contact-info"
          >
            <motion.div variants={itemVariants} className="info-header">
              <h3>Get in Touch</h3>
              <p>
                I'm currently seeking internships and full-time opportunities in Software Engineering, 
                with a preference for backend development in Node.js. Let's build something amazing together!
              </p>
            </motion.div>

            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="info-card"
                >
                  <div 
                    className="info-icon"
                    style={{ backgroundColor: `${info.color}20`, borderColor: `${info.color}40` }}
                  >
                    <info.icon size={20} color={info.color} />
                  </div>
                  <div className="info-content">
                    <span className="info-title">{info.title}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="social-section">
              <h4>Connect with me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="social-card"
                  >
                    <div 
                      className="social-icon"
                      style={{ backgroundColor: `${social.color}20`, borderColor: `${social.color}40` }}
                    >
                      <social.icon size={20} color={social.color} />
                    </div>
                    <div className="social-content">
                      <span className="social-name">{social.name}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-form-section"
          >
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>Have a project in mind? Let's discuss how we can work together.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, ideas, or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-message success"
                >
                  Message sent successfully! Thanks for reaching out! I'll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-message error"
                >
                  <div>
                    <strong>Email service temporarily unavailable.</strong><br/>
                    Please email me directly at: <a href="mailto:sajjad6ansari@gmail.com" style={{color: '#3b82f6'}}>sajjad6ansari@gmail.com</a><br/>
                    <small style={{opacity: 0.8}}>Check browser console for technical details</small>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-cta"
        >
          <div className="cta-content">
            <h3>🚀 Ready to build something amazing?</h3>
            <p>
              Whether it's a full-stack web application, mobile app, or exploring microservices architecture, 
              I'm passionate about creating scalable solutions that make a difference.
            </p>
            <div className="cta-highlights">
              <span className="highlight">✨ Full-stack Development</span>
              <span className="highlight">🔧 Microservices Architecture</span>
              <span className="highlight">📱 Mobile Applications</span>
              <span className="highlight">☁️ Cloud Deployment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;