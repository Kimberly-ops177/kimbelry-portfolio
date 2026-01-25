import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Passionate about building scalable solutions
          <br /> and analyzing data-driven insights
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education</motion.b> &
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Experience</motion.b>
          </h1>
          <button>MY JOURNEY</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>PLP Academy</h2>
          <p>
            Software Development Program
            <br />
            July - December 2025
            <br />
            <br />
            Completed comprehensive training in software development, learning modern web technologies, best practices, and agile methodologies.
          </p>
          <button>Education</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ALX</h2>
          <p>
            Data Engineering Program
            <br />
            February - December 2025
            <br />
            <br />
            Specialized training in data engineering, covering data pipelines, ETL processes, database management, and big data technologies.
          </p>
          <button>Education</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>The Jitu</h2>
          <p>
            Fullstack Developer
            <br />
            September 2025 - January 2026
            <br />
            <br />
            Developed end-to-end web applications using modern frameworks and technologies, collaborating with cross-functional teams to deliver high-quality solutions.
          </p>
          <button>Experience</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Codsoft</h2>
          <p>
            Software Developer
            <br />
            December 2025 - Present
            <br />
            <br />
            Currently contributing to innovative software projects, implementing features, and maintaining codebases with focus on quality and performance.
          </p>
          <button>Experience</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
