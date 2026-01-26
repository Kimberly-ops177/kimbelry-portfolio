import "./portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "International Solar Alliance Portal",
    desc: "Full-stack web portal for the International Solar Alliance enabling member countries to access solar data, share resources, and collaboration tools. Built with modern web technologies and integrated with multiple data sources for real-time solar energy statistics.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 2,
    title: "Inventory Management System",
    desc: "Built a PHP-based inventory system for local SMEs to streamline stock management. The application helps businesses track inventory levels in real-time, generate automated stock reports, manage suppliers, and set low-stock alerts to prevent shortages.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 3,
    title: "MindVibe AI",
    desc: "Developed an AI-powered mental wellness companion using Python and TensorFlow. The platform analyzes user journal entries through sentiment analysis, provides personalized coping strategies, tracks mood patterns over time, and offers evidence-based mindfulness exercises.",
    tech: ["Python", "TensorFlow", "NLP", "Flask", "PostgreSQL"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 4,
    title: "EduHub Learning Portal",
    desc: "Created a tech course learning portal using React and Node.js for online programming bootcamps. Features include video course hosting, coding challenges with automated testing, progress tracking, certificate generation, and a discussion forum for student collaboration.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    desc: "Developed a full-stack online marketplace using MERN stack for a local artisan collective. Integrated M-Pesa payment gateway for seamless transactions, implemented product search with filters, order tracking, and an admin dashboard for inventory and sales analytics.",
    tech: ["React", "Node.js", "MongoDB", "Express", "M-Pesa API"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 6,
    title: "Task Management Tool",
    desc: "Built a collaborative project tracker using React and Firebase for remote development teams. The tool supports sprint planning with drag-and-drop task boards, time logging, team member assignments, deadline notifications, and project milestone visualization through Gantt charts.",
    tech: ["React", "Firebase", "Redux", "Material-UI"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 7,
    title: "Real-Time Chat Application",
    desc: "Created a WebSocket-based messaging platform using Socket.io and Express for team communication. Implemented features like one-on-one and group chats, file sharing up to 10MB, message search, read receipts, and emoji reactions for better team engagement.",
    tech: ["Socket.io", "Express", "React", "Node.js", "MongoDB"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 8,
    title: "Dockerized Web Server",
    desc: "Containerized a multi-tier web application using Docker Compose with separate containers for Nginx, Node.js backend, and PostgreSQL database. Set up volume persistence, networking between containers, and environment-based configuration for development and production environments.",
    tech: ["Docker", "Docker Compose", "Nginx", "PostgreSQL", "Node.js"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 9,
    title: "Java Application with Gradle",
    desc: "Built a customer management system using Java Spring Boot and Gradle for build automation. The application includes REST APIs for CRUD operations, JUnit tests with 80% code coverage, automated dependency management, and multi-module project structure for better code organization.",
    tech: ["Java", "Spring Boot", "Gradle", "JUnit", "PostgreSQL"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 10,
    title: "Jenkins Remoting Project",
    desc: "Configured a distributed Jenkins build environment with master-agent architecture to parallelize build jobs across multiple machines. Set up SSH-based agent connections, job distribution logic, and resource monitoring to reduce build times by 60% for large Java projects.",
    tech: ["Jenkins", "Java", "Docker", "SSH", "Monitoring"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 11,
    title: "CI/CD Pipeline with Jenkins",
    desc: "Designed an automated CI/CD pipeline using Jenkins for a Node.js application. The pipeline runs unit tests, performs SonarQube code quality analysis, builds Docker images, pushes to DockerHub, and deploys to AWS EC2 staging and production servers with approval gates.",
    tech: ["Jenkins", "Docker", "SonarQube", "AWS EC2", "Node.js"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 12,
    title: "Kubernetes Cluster Deployment",
    desc: "Deployed a production-ready K8s cluster on AWS using kubeadm with 3 master nodes and 5 worker nodes. Configured horizontal pod autoscaling based on CPU metrics, set up ingress controllers for traffic routing, implemented persistent volumes for stateful applications, and integrated Prometheus for monitoring.",
    tech: ["Kubernetes", "AWS", "Prometheus", "Docker", "Helm"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 13,
    title: "Microservices Architecture",
    desc: "Architected a microservices-based e-commerce backend using Node.js with separate services for authentication, products, orders, and payments. Implemented API Gateway with Kong, service discovery using Consul, RabbitMQ for async messaging, and distributed tracing with Jaeger.",
    tech: ["Node.js", "Kong", "RabbitMQ", "Consul", "Jaeger"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 14,
    title: "Infrastructure as Code with Terraform",
    desc: "Automated AWS infrastructure provisioning using Terraform to deploy VPC, EC2 instances, RDS databases, S3 buckets, and load balancers. Created reusable modules for different environments, implemented remote state management with S3 backend, and set up automated backup policies.",
    tech: ["Terraform", "AWS", "VPC", "EC2", "RDS"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 15,
    title: "Monitoring & Observability Platform",
    desc: "Set up a comprehensive monitoring stack with Prometheus for metrics collection, Grafana for visualization, and ELK stack for centralized logging. Created custom dashboards for application performance, configured alerting rules for critical thresholds, and implemented log parsing for error tracking.",
    tech: ["Prometheus", "Grafana", "ELK Stack", "Docker", "Alerting"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 16,
    title: "Serverless Application on AWS",
    desc: "Built a serverless image processing service using AWS Lambda triggered by S3 uploads. The Lambda function resizes images, generates thumbnails, extracts metadata, stores results in DynamoDB, and sends notifications via SNS. Reduced infrastructure costs by 70% compared to traditional EC2 hosting.",
    tech: ["AWS Lambda", "S3", "DynamoDB", "SNS", "Python"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 17,
    title: "Automated Testing Framework",
    desc: "Developed a comprehensive testing suite for a React web application using Jest for unit tests, React Testing Library for component tests, and Cypress for end-to-end testing. Integrated with GitHub Actions to run tests automatically on every pull request with detailed coverage reports.",
    tech: ["Jest", "Cypress", "React Testing Library", "GitHub Actions"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 18,
    title: "GitOps Workflow with ArgoCD",
    desc: "Implemented GitOps deployment workflow using ArgoCD to manage Kubernetes applications across dev, staging, and production environments. Configured automated sync from Git repositories, set up rollback mechanisms for failed deployments, and created approval workflows for production releases.",
    tech: ["ArgoCD", "Kubernetes", "Git", "Helm", "CI/CD"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
  {
    id: 19,
    title: "Data Analytics Dashboard",
    desc: "Built an interactive sales analytics dashboard using React and D3.js for a retail business. The dashboard visualizes revenue trends, product performance, customer demographics, and regional sales data with drill-down capabilities, real-time updates via WebSocket, and exportable PDF reports.",
    tech: ["React", "D3.js", "WebSocket", "Python", "PostgreSQL"],
    live: true,
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 20,
    title: "API Gateway & Service Mesh",
    desc: "Configured Kong API Gateway to handle authentication, rate limiting (100 req/min), request transformation, and routing for 15+ microservices. Implemented Istio service mesh for traffic management, circuit breaking to prevent cascade failures, mTLS for service-to-service encryption, and distributed tracing.",
    tech: ["Kong", "Istio", "Kubernetes", "Docker", "Microservices"],
    live: false,
    liveUrl: null,
    sourceUrl: "#"
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">
            <span className="badge-icon">🚀</span>
            <span>My Work</span>
          </span>
          <h2>Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work in data science, web development, and research.
          </p>
        </motion.div>

        <div className="projects-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {item.live && (
                <span className="live-badge">Live</span>
              )}
              <div className="project-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="tech-stack">
                  {item.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-footer">
                  {item.live && item.liveUrl && (
                    <button className="btn-live" onClick={() => openModal(item)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View Live
                    </button>
                  )}
                  <button className="btn-source" onClick={() => window.open(item.sourceUrl, '_blank')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </button>
                </div>
              </div>
              <div className="arrow-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {selectedProject.live && (
                <span className="modal-live-badge">Live</span>
              )}

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.desc}</p>

              <div className="modal-tech-stack">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="modal-tech-tag">{tech}</span>
                ))}
              </div>

              <div className="modal-footer">
                {selectedProject.live && selectedProject.liveUrl && (
                  <button className="modal-btn-live" onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Live
                  </button>
                )}
                <button className="modal-btn-source" onClick={() => window.open(selectedProject.sourceUrl, '_blank')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
