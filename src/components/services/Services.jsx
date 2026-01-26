import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  const experiences = [
    {
      title: "The Jitu",
      role: "Full-Stack Developer",
      period: "09/2025 - 01/2026",
      location: "Remote",
      description: "• Designed modular RESTful APIs (FastAPI, PostgreSQL) integrating 5+ microservices, improving API latency by ~30-35%\n• Engineered backend systems supporting 10,000+ daily active users with 99.8% uptime using Docker containerization\n• Developed CI/CD pipeline with GitHub Actions reducing deployment time from 45 to 13 minutes\n• Optimized Digital Biotech platform database queries, reducing load times by 40% through indexing and caching\n• Mentored 3 junior developers, conducting code reviews and architectural design sessions",
      type: "experience",
      status: null
    },
    {
      title: "Codsoft",
      role: "Software Developer",
      period: "12/2025 - Current",
      location: "Remote, India",
      description: "• Architected Loan Management System (PHP, MySQL) processing 1,000+ loan applications monthly with 99.5% accuracy\n• Built automated CI/CD pipelines using Jenkins & Docker reducing deployment time by 65% across 8+ microservices\n• Deployed Kubernetes clusters on AWS managing 15+ containerized applications with auto-scaling capabilities\n• Implemented Infrastructure as Code with Terraform provisioning multi-environment AWS infrastructure (VPC, EC2, RDS, S3)\n• Developed monitoring solutions using Prometheus & Grafana tracking 50+ metrics with custom alerting systems",
      type: "experience",
      status: "Current"
    }
  ];

  const education = [
    {
      title: "PLP Academy",
      role: "Software Development Program",
      period: "07/2025 - 12/2025",
      location: "Nairobi, Kenya",
      description: "• Data Munging using Python (NumPy, Matplotlib, Seaborn) for data analysis projects\n• Built analytical pipelines in Python/Pandas/SQL improving data processing speed by 15%\n• Designed systems for marketing optimization experiments boosting campaign performance by 30%\n• Built full-stack applications from scratch using HTML, CSS, JavaScript, React\n• Completed 12+ projects simulating real industry challenges with 95% average score",
      type: "education",
      status: null
    },
    {
      title: "ALX",
      role: "Data Engineering Program",
      period: "02/2025 - 12/2025",
      location: "Nairobi, Kenya",
      description: "• Automated marketing platforms (UX testing using Selenium & Appium)\n• Designed data warehouses and ETL pipelines processing 100,000+ records daily\n• Built robust data pipelines using Apache Spark handling big data workloads efficiently\n• Optimized SQL queries reducing database query time by 50% through indexing strategies\n• Developed efficient data architectures supporting real-time analytics and reporting",
      type: "education",
      status: null
    }
  ];

  const skills = [
    { name: "Backend", icon: "💻" },
    { name: "DevOps", icon: "🔧" },
    { name: "Databases", icon: "🗄️" },
    { name: "Cloud", icon: "☁️" }
  ];

  const projects = [
    { title: "Loan Management System", date: "01/2026", description: "PHP, MySQL processing 1,000+ applications" },
    { title: "CI/CD Pipeline with Jenkins", date: "12/2025", description: "Automated deployment reducing time by 65%" },
    { title: "Kubernetes Cluster Deployment", date: "11/2025", description: "Managing 15+ containerized apps" }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Swahili", level: "Native" }
  ];

  return (
    <div className="services-container">
      <div className="services-content">
        {/* Header with Contact Info */}
        <motion.div
          className="profile-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-main">
            <h1>Kimberly Githinji</h1>
            <p className="profile-title">Full Stack Software Engineer • Backend & AI</p>
          </div>
          <div className="contact-info">
            <span className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Nairobi, Kenya
            </span>
            <span className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              githinjikimberly503@gmail.com
            </span>
            <span className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +254796996889
            </span>
          </div>
        </motion.div>

        <div className="two-column-layout">
          {/* Left Column: Experience & Education */}
          <div className="main-column">
            <motion.div
              className="timeline-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="category-title">
                <span className="category-icon">🎯</span>
                Experience
              </h3>
              <div className="timeline-items">
                {experiences.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="card-header">
                      <h4>{item.title}</h4>
                      {item.status && <span className="card-status">{item.status}</span>}
                    </div>
                    <p className="card-role">{item.role}</p>
                    <div className="card-meta">
                      <span className="card-period">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                        </svg>
                        {item.period}
                      </span>
                      <span className="card-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {item.location}
                      </span>
                    </div>
                    <p className="card-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="timeline-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="category-title">
                <span className="category-icon">🎓</span>
                Education
              </h3>
              <div className="timeline-items">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="card-header">
                      <h4>{item.title}</h4>
                      {item.status && <span className="card-status">{item.status}</span>}
                    </div>
                    <p className="card-role">{item.role}</p>
                    <div className="card-meta">
                      <span className="card-period">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                        </svg>
                        {item.period}
                      </span>
                      <span className="card-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {item.location}
                      </span>
                    </div>
                    <p className="card-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar: Skills, Projects, Languages */}
          <motion.div
            className="sidebar-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Skills Section */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Projects</h3>
              <div className="projects-list">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <h4>{project.title}</h4>
                      <span className="project-date">{project.date}</span>
                    </div>
                    <p className="project-desc">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
