import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "url('../assets/bg.jpg') no-repeat center center/cover",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      boxSizing: "border-box"
    }}>
      {}
      <div style={{
        width: "100%",
        maxWidth: "900px",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem"
      }}>
        <a
          href="/resume.pdf"
          download
          style={{
            backgroundColor: "#61dafb",
            color: "#121212",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 2px 8px rgba(97,218,251,0.6)",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#21a1f1"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#61dafb"}
        >
          <FaDownload /> Download CV
        </a>
      </div>

      {}
      <iframe
        src="/resume.pdf"
        title="Resume"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "90vh",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      />
    </div>
  );
};

export default Resume;