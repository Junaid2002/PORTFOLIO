import React from "react";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython, FaGamepad } from "react-icons/fa";
import { SiCplusplus, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaReact size={60} />, label: "React", color: "#61dafb" },
    { icon: <FaNode size={60} />, label: "Node.js", color: "#68a063" },
    { icon: <FaHtml5 size={60} />, label: "HTML5", color: "#e34c26" },
    { icon: <FaCss3Alt size={60} />, label: "CSS3", color: "#264de4" },
    { icon: <FaJs size={60} />, label: "JavaScript", color: "#f0db4f" },
    { icon: <FaDatabase size={60} />, label: "MongoDB", color: "#4db33d" },
    { icon: <SiCplusplus size={60} />, label: "C++", color: "#00599c" },
    { icon: <FaGamepad size={60} />, label: "SFML", color: "#8cc445" },
    { icon: <SiSqlite size={60} />, label: "SQL", color: "#003b57" },
    { icon: <FaPython size={60} />, label: "Python", color: "#3776ab" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1 + 0.5, type: "spring" },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 0 30px rgba(97, 218, 251, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5, repeat: Infinity },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "url('../assets/bg.jpg') no-repeat center center/cover",
        color: "white",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(97, 218, 251, 0.5); }
            50% { box-shadow: 0 0 25px rgba(97, 218, 251, 0.8); }
            100% { box-shadow: 0 0 10px rgba(97, 218, 251, 0.5); }
          }
        `}
      </style>

      <motion.h1
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          marginBottom: "1rem",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Know Who I'M
      </motion.h1>
      <motion.p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          lineHeight: "1.6",
          textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
        }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Hi! I’m Junaid Ashraf Khan, a passionate developer from Jamshedpur, currently pursuing B.Tech in CSE. I love working on full-stack applications and bringing ideas to life.
      </motion.p>

      <motion.h2
        style={{
          fontSize: "clamp(1.2rem, 4vw, 2rem)",
          marginBottom: "2rem",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Professional Skillset
      </motion.h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          maxWidth: "1200px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(42, 42, 64, 0.9)",
              borderRadius: "15px",
              padding: "1.5rem",
              width: "120px",
              animation: "glow 3s infinite ease-in-out",
            }}
            custom={index}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div
              style={{ color: skill.color }}
              whileHover="hover"
              variants={iconVariants}
            >
              {skill.icon}
            </motion.div>
            <span
              style={{
                marginTop: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#ddd",
              }}
            >
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;