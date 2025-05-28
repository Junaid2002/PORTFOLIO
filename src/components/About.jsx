import React, { useState } from "react";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython, FaGamepad } from "react-icons/fa";
import { SiCplusplus, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaReact size={70} />, label: "React", color: "142, 249, 252" },
    { icon: <FaNode size={70} />, label: "Node.js", color: "142, 252, 204" },
    { icon: <FaHtml5 size={70} />, label: "HTML5", color: "142, 252, 157" },
    { icon: <FaCss3Alt size={70} />, label: "CSS3", color: "215, 252, 142" },
    { icon: <FaJs size={70} />, label: "JavaScript", color: "252, 252, 142" },
    { icon: <FaDatabase size={70} />, label: "MongoDB", color: "252, 208, 142" },
    { icon: <SiCplusplus size={70} />, label: "C++", color: "252, 142, 142" },
    { icon: <FaGamepad size={70} />, label: "SFML", color: "252, 142, 239" },
    { icon: <SiSqlite size={70} />, label: "SQL", color: "204, 142, 252" },
    { icon: <FaPython size={70} />, label: "Python", color: "142, 202, 252" },
  ];

  const [isRotating, setIsRotating] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } }
  };

  const handleCardClick = (index) => {
    if (isRotating) {
      setIsRotating(false);
      setSelectedIndex(index);
      setRotationAngle(-(360 / skills.length) * index); // Rotate to bring the card to the front
    } else {
      setIsRotating(true);
      setSelectedIndex(null);
    }
  };

  return (
    <div style={{
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
      overflow: "hidden"
    }}>
      <style>
        {`
          @keyframes rotating {
            from { transform: perspective(1200px) rotateX(-15deg) rotateY(${rotationAngle}deg); }
            to { transform: perspective(1200px) rotateX(-15deg) rotateY(${rotationAngle + 360}deg); }
          }
          @keyframes slowRotate {
            from { transform: perspective(1200px) rotateX(-15deg) rotateY(${rotationAngle}deg); }
            to { transform: perspective(1200px) rotateX(-15deg) rotateY(${rotationAngle}deg); }
          }
        `}
      </style>

      <motion.h1
        style={{
          fontSize: "clamp(1.8rem, 6vw, 3rem)",
          marginBottom: "1.5rem",
          textShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
          fontWeight: "700"
        }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Know Who I'M
      </motion.h1>

      <motion.p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          marginBottom: "2.5rem",
          fontSize: "clamp(1.1rem, 2.8vw, 1.3rem)",
          lineHeight: "1.8",
          textShadow: "0 0 8px rgba(255, 255, 255, 0.3)"
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
          fontSize: "clamp(1.5rem, 4.5vw, 2.2rem)",
          marginBottom: "3rem",
          textShadow: "0 0 12px rgba(255, 255, 255, 0.4)",
          fontWeight: "600"
        }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Professional Skillset
      </motion.h2>

      <div style={{
        width: "100%",
        height: "clamp(300px, 65vh, 500px)",
        position: "relative",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        <div
          style={{
            "--w": "clamp(110px, 20vw, 130px)",
            "--h": "clamp(160px, 30vw, 190px)",
            "--translateZ": "calc((var(--w) + var(--h)) * 0.9)",
            "--rotateX": "-15deg",
            "--perspective": "1200px",
            position: "absolute",
            width: "var(--w)",
            height: "var(--h)",
            top: "calc(50% - (var(--h) / 2))",
            left: "calc(50% - (var(--w) / 2))",
            zIndex: 2,
            transformStyle: "preserve-3d",
            transform: `perspective(var(--perspective)) rotateX(-15deg) rotateY(${rotationAngle}deg)`,
            animation: isRotating
              ? selectedIndex !== null
                ? "slowRotate 1s ease-out forwards"
                : "rotating 18s linear infinite"
              : "none",
            cursor: "pointer"
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                border: `3px solid rgba(${skill.color}, 0.9)`,
                borderRadius: "15px",
                overflow: "hidden",
                inset: 0,
                transform: `rotateY(calc((360deg / ${skills.length}) * ${index})) translateZ(var(--translateZ)) scale(${selectedIndex === index ? 1.2 : 1})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(circle, rgba(${skill.color}, 0.4) 0%, rgba(${skill.color}, 0.8) 80%, rgba(${skill.color}, 1) 100%)`,
                boxShadow: `0 4px 20px rgba(0, 0, 0, ${selectedIndex === index ? 0.5 : 0.3})`,
                transition: "transform 0.5s ease, box-shadow 0.5s ease"
              }}
              onClick={() => handleCardClick(index)}
              onTouchStart={() => handleCardClick(index)}
            >
              <div style={{ color: `rgb(${skill.color})`, transform: `scale(${selectedIndex === index ? 1.1 : 0.9})`, transition: "transform 0.5s ease" }}>{skill.icon}</div>
              <span style={{
                marginTop: "0.75rem",
                fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                fontWeight: "700",
                color: "#fff",
                textShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transform: `scale(${selectedIndex === index ? 1.1 : 1})`,
                transition: "transform 0.5s ease"
              }}>
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;