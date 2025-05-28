import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython, FaGamepad } from "react-icons/fa";
import { SiCplusplus, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaReact size={50} />, label: "React", color: "142, 249, 252" },
    { icon: <FaNode size={50} />, label: "Node.js", color: "142, 252, 204" },
    { icon: <FaHtml5 size={50} />, label: "HTML5", color: "142, 252, 157" },
    { icon: <FaCss3Alt size={50} />, label: "CSS3", color: "215, 252, 142" },
    { icon: <FaJs size={50} />, label: "JavaScript", color: "252, 252, 142" },
    { icon: <FaDatabase size={50} />, label: "MongoDB", color: "252, 208, 142" },
    { icon: <SiCplusplus size={50} />, label: "C++", color: "252, 142, 142" },
    { icon: <FaGamepad size={50} />, label: "SFML", color: "252, 142, 239" },
    { icon: <SiSqlite size={50} />, label: "SQL", color: "204, 142, 252" },
    { icon: <FaPython size={50} />, label: "Python", color: "142, 202, 252" },
  ];

  const [isRotating, setIsRotating] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchVelocity, setTouchVelocity] = useState(0);
  const carouselRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } },
  };

  // Calculate responsive dimensions
  const getCardDimensions = () => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768;
    return {
      width: isMobile ? "clamp(80px, 25vw, 100px)" : "clamp(100px, 15vw, 120px)",
      height: isMobile ? "clamp(120px, 35vw, 150px)" : "clamp(140px, 20vh, 170px)",
      translateZ: isMobile ? "clamp(150px, 40vw, 200px)" : "clamp(200px, 25vw, 250px)",
      iconSize: isMobile ? 40 : 50,
    };
  };

  const [dimensions, setDimensions] = useState(getCardDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(getCardDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle touch interactions
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - touchStartX;
      const sensitivity = window.innerWidth <= 768 ? 0.5 : 0.3;
      setTouchVelocity(deltaX * sensitivity);
      setRotationAngle((prev) => prev - deltaX * sensitivity);
      setTouchStartX(touchX);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
    setTouchVelocity(0);
    setIsRotating(true);
  };

  const handleCardClick = (index) => {
    if (isRotating) {
      setIsRotating(false);
      setSelectedIndex(index);
      setRotationAngle(-(360 / skills.length) * index);
    } else {
      setIsRotating(true);
      setSelectedIndex(null);
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    let animationFrame;
    if (isRotating && selectedIndex === null) {
      const animate = () => {
        setRotationAngle((prev) => prev + 0.5);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isRotating, selectedIndex]);

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
          .carousel-container {
            animation: ${isRotating && selectedIndex === null ? "slowRotate 18s linear infinite" : "none"};
          }
          @keyframes slowRotate {
            from { transform: perspective(1200px) rotateX(-15deg) rotateY(0deg); }
            to { transform: perspective(1200px) rotateX(-15deg) rotateY(360deg); }
          }
        `}
      </style>

      <motion.h1
        style={{
          fontSize: "clamp(1.8rem, 6vw, 3rem)",
          marginBottom: "1.5rem",
          textShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
          fontWeight: "700",
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
          textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
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
          fontWeight: "600",
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
          width: "100%",
          height: "clamp(250px, 60vh, 450px)",
          position: "relative",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={carouselRef}
          className="carousel-container"
          style={{
            "--w": dimensions.width,
            "--h": dimensions.height,
            "--translateZ": dimensions.translateZ,
            "--perspective": "1200px",
            position: "absolute",
            width: "var(--w)",
            height: "var(--h)",
            top: "calc(50% - (var(--h) / 2))",
            left: "calc(50% - (var(--w) / 2))",
            zIndex: 2,
            transformStyle: "preserve-3d",
            transform: `perspective(var(--perspective)) rotateX(-15deg) rotateY(${rotationAngle}deg)`,
            cursor: "grab",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
                transform: `rotateY(calc((360deg / ${skills.length}) * ${index})) translateZ(var(--translateZ)) scale(${
                  selectedIndex === index ? 1.2 : 1
                })`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(circle, rgba(${skill.color}, 0.4) 0%, rgba(${skill.color}, 0.8) 80%, rgba(${skill.color}, 1) 100%)`,
                boxShadow: `0 4px 20px rgba(0, 0, 0, ${selectedIndex === index ? 0.5 : 0.3})`,
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
              }}
              onClick={() => handleCardClick(index)}
              onTouchStart={(e) => {
                handleCardClick(index);
                e.stopPropagation();
              }}
            >
              <div
                style={{
                  color: `rgb(${skill.color})`,
                  transform: `scale(${selectedIndex === index ? 1.1 : 0.9})`,
                  transition: "transform 0.5s ease",
                }}
              >
                {React.cloneElement(skill.icon, { size: dimensions.iconSize })}
              </div>
              <span
                style={{
                  marginTop: "0.75rem",
                  fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                  fontWeight: "700",
                  color: "#fff",
                  textShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transform: `scale(${selectedIndex === index ? 1.1 : 1})`,
                  transition: "transform 0.5s ease",
                }}
              >
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