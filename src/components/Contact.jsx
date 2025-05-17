import React, { useEffect, useState } from "react";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",           
        width: "100vw",               
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",    
        alignItems: "center",        
        backgroundColor: "rgba(0,0,0,0.7)",  
        color: "white",
        padding: "2rem 1rem",
        boxSizing: "border-box",

        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Me</h2>
      <p style={{ fontSize: "1.25rem" }}>
        You can reach me at:{" "}
        <a href="mailto:junaid@example.com" style={{ color: "#61dafb" }}>
          junaid@example.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
