import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce Platform",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies and responsive design for seamless shopping experience across all devices.",
  },
  {
    id: 2,
    title: "Task Management Tool",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Collaborative project management application featuring task tracking, team collaboration, deadline management, and progress visualization. Implements real-time updates and notification system for team coordination.",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    img: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "WebSocket-based real-time communication platform with instant messaging, file sharing, and group chat functionality. Features include message encryption, presence detection, and typing indicators for enhanced user experience.",
  },
  {
    id: 4,
    title: "Dockerized Web Server",
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Containerized web server deployment using Docker and Docker Compose. Demonstrates microservices architecture, container orchestration, and scalable infrastructure management with automated deployment workflows.",
  },
  {
    id: 5,
    title: "Java Application with Gradle",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Enterprise Java application built with Gradle build automation. Features dependency management, multi-module project structure, automated testing, and continuous integration practices for robust software delivery.",
  },
  {
    id: 6,
    title: "Jenkins Remoting Project",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Distributed build system using Jenkins remoting capabilities. Implements agent-controller architecture for parallel job execution, resource optimization, and efficient CI/CD pipeline management across multiple environments.",
  },
  {
    id: 7,
    title: "CI/CD Pipeline with Jenkins",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Automated continuous integration and deployment pipeline using Jenkins. Features automated testing, code quality checks, security scanning, and multi-stage deployment to development, staging, and production environments.",
  },
  {
    id: 8,
    title: "Kubernetes Cluster Deployment",
    img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Production-grade Kubernetes cluster with auto-scaling, load balancing, and high availability. Implements Helm charts, ingress controllers, persistent volumes, and monitoring solutions for enterprise-level container orchestration.",
  },
  {
    id: 9,
    title: "Microservices Architecture",
    img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Scalable microservices ecosystem with service discovery, API gateway, and inter-service communication. Built with Spring Boot/Node.js, featuring circuit breakers, distributed tracing, and event-driven architecture patterns.",
  },
  {
    id: 10,
    title: "Infrastructure as Code with Terraform",
    img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Cloud infrastructure automation using Terraform for AWS/Azure. Implements modular, reusable infrastructure code with state management, automated provisioning, and disaster recovery capabilities for multi-cloud deployments.",
  },
  {
    id: 11,
    title: "Monitoring & Observability Platform",
    img: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Features real-time metrics, log aggregation, alerting systems, and custom dashboards for complete application and infrastructure observability.",
  },
  {
    id: 12,
    title: "Serverless Application on AWS",
    img: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Cloud-native serverless architecture using AWS Lambda, API Gateway, and DynamoDB. Demonstrates cost-effective, auto-scaling solutions with event-driven processing, S3 integration, and CloudWatch monitoring.",
  },
  {
    id: 13,
    title: "Automated Testing Framework",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "End-to-end automated testing suite with unit, integration, and performance tests. Implements Selenium, Jest, and JMeter for comprehensive test coverage, automated regression testing, and continuous quality assurance.",
  },
  {
    id: 14,
    title: "GitOps Workflow with ArgoCD",
    img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "GitOps-based continuous delivery using ArgoCD for Kubernetes. Implements declarative infrastructure, automated sync, rollback capabilities, and multi-environment management for streamlined deployment workflows.",
  },
  {
    id: 15,
    title: "Machine Learning Pipeline",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "End-to-end ML pipeline with data preprocessing, model training, and deployment. Features MLOps practices, automated retraining, model versioning, and API serving using Docker and Kubernetes for production ML systems.",
  },
  {
    id: 16,
    title: "API Gateway & Service Mesh",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Enterprise API gateway with rate limiting, authentication, and request routing. Implements service mesh using Istio for traffic management, security, and observability across distributed microservices architecture.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
