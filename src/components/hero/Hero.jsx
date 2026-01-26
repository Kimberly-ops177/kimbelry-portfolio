import "./hero.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = `class Developer:
    """Fullstack Developer & Data Engineer"""

    def __init__(self):
        self.name = "Kimberly Githinji"
        self.role = "Software Engineer"
        self.skills = [
            "Python", "JavaScript", "React", "Node.js",
            "Docker", "Kubernetes", "AWS", "PostgreSQL"
        ]`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kimberly_Githinji_CV.pdf';
    link.download = 'Kimberly_Githinji_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-section">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-icon">⚡</span>
            <span>Fullstack & Data Engineering Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I build scalable
            <br />
            platforms that{" "}
            <span className="highlight">reach 1M+ users</span>
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Fullstack Developer & Data Engineer — building production systems
            with modern technologies and data-driven insights
          </motion.p>

          <motion.div
            className="stats-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="stat-card">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Uptime Achieved</span>
            </div>
          </motion.div>

          <motion.div
            className="action-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button className="btn-primary" onClick={() => window.location.href = '#Projects'}>
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={handleDownloadCV}>
              View Resume
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '#Contact'}>
              Get In Touch
            </button>
          </motion.div>

          <div className="tech-stack">
            <p className="tech-label">Tech Stack:</p>
            <div className="tech-badges">
              {["Python", "JavaScript", "React", "Node.js", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Terraform", "Jenkins", "+7 more"].map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          <motion.div
            className="code-window"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">developer.py</span>
            </div>
            <div className="code-content">
              <pre>
                <code>{text}<span className="cursor">|</span></code>
              </pre>
            </div>
          </motion.div>

          <motion.div
            className="status-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="status-dot"></span>
            <span>Online and coding</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
