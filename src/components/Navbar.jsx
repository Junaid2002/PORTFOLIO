import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillStar,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

const NavBar = () => {
  const location = useLocation();
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    setNavColour(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#61dafb",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    active: {
      color: "#61dafb",
      fontWeight: 700,
    },
  };

  const underlineVariants = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <Navbar
      expanded={expand}
      expand="md"
      fixed="top"
      style={{
        background: navColour
          ? "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)"
          : "transparent",
        transition: "background 0.5s ease, box-shadow 0.5s ease",
        padding: "0.6rem 1rem",
        boxShadow: navColour
          ? "0 4px 20px rgba(0, 0, 0, 0.5)"
          : "none",
        zIndex: 1000,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%)",
          opacity: navColour ? 0.3 : 0,
          zIndex: -1,
        }}
        animate={{ scale: [1, 1.05, 1], opacity: navColour ? [0.3, 0.5, 0.3] : 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "#61dafb",
            fontWeight: "bold",
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
            textDecoration: "none",
            position: "relative",
          }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            MyPortfolio
          </motion.span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
          style={{
            border: "none",
            background: "transparent",
            padding: "0.5rem",
          }}
        >
          <motion.span
            style={{
              display: "block",
              width: "25px",
              height: "2px",
              background: "white",
              marginBottom: "5px",
              borderRadius: "2px",
            }}
            animate={{ rotate: expand ? 45 : 0, y: expand ? 7 : 0 }}
          />
          <motion.span
            style={{
              display: "block",
              width: "25px",
              height: "2px",
              background: "white",
              marginBottom: "5px",
              borderRadius: "2px",
            }}
            animate={{ opacity: expand ? 0 : 1 }}
          />
          <motion.span
            style={{
              display: "block",
              width: "25px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
            }}
            animate={{ rotate: expand ? -45 : 0, y: expand ? -7 : 0 }}
          />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            defaultActiveKey={location.pathname}
            style={{
              alignItems: "center",
              gap: "clamp(1rem, 2vw, 1.5rem)",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              padding: "0.5rem 0",
            }}
          >
            <Nav.Item>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                initial="initial"
                animate={location.pathname === "/" ? "active" : ""}
                style={{ position: "relative" }}
              >
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => setExpand(false)}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem",
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
                <motion.div
                  variants={underlineVariants}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "#61dafb",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                initial="initial"
                animate={location.pathname === "/about" ? "active" : ""}
                style={{ position: "relative" }}
              >
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => setExpand(false)}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem",
                  }}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
                <motion.div
                  variants={underlineVariants}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "#61dafb",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                initial="initial"
                animate={location.pathname === "/projects" ? "active" : ""}
                style={{ position: "relative" }}
              >
                <Nav.Link
                  as={Link}
                  to="/projects"
                  onClick={() => setExpand(false)}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem",
                  }}
                >
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
                <motion.div
                  variants={underlineVariants}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "#61dafb",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                initial="initial"
                animate={location.pathname === "/resume" ? "active" : ""}
                style={{ position: "relative" }}
              >
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => setExpand(false)}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem",
                  }}
                >
                  <CgGitFork style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
                <motion.div
                  variants={underlineVariants}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "#61dafb",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(97, 218, 251, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  href="https://github.com/Junaid2002/PORTFOLIO.git"
                  target="_blank"
                  style={{
                    background: "linear-gradient(45deg, #61dafb, #1a1a2e)",
                    border: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 1rem",
                    borderRadius: "8px",
                    fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                  Star
                </Button>
              </motion.div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;