import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import ErrorBoundary from "./components/ErrorBoundary";
import bgImage from "./assets/bg.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const appStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#0b0c10",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  position: "relative",
  overflowX: "hidden",
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={appStyle}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(11, 12, 16, 0.3)", 
            zIndex: 1,
          }}
        />
        <div style={{ 
          position: "relative", 
          zIndex: 2, 
          flex: 1, 
          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)" 
        }}>
          <ErrorBoundary>
            <Navbar />
            <div style={{ flex: 1, width: "100%", paddingTop: "70px" }}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<div style={{ textAlign: "center", padding: "2rem" }}>404 - Page Not Found</div>} />
              </Routes>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
}

export default App;