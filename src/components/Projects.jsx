import React from 'react';

const projects = [
  {
    title: "Clinic Management System",
    desc: "A full-stack app for managing clinics using MERN stack.",
    github: "https://github.com/Junaid2002/CMS.git",
    icon: <i className="fab fa-react" style={{ color: '#60a5fa', fontSize: '2.5rem' }}></i>,
    tech: "MERN"
  },
  {
    title: "Easy Leave",
    desc: "A leave management system built with MERN stack.",
    github: "https://github.com/Junaid2002/easyLeave.git",
    icon: <i className="fab fa-react" style={{ color: '#60a5fa', fontSize: '2.5rem' }}></i>,
    tech: "MERN"
  },
  {
    title: "Stock Price Prediction",
    desc: "ML project to predict stock prices using Python.",
    github: "https://github.com/Junaid2002/SPP.git",
    icon: <i className="fab fa-python" style={{ color: '#facc15', fontSize: '2.5rem' }}></i>,
    tech: "Python"
  },
  {
    title: "Emotion Detector",
    desc: "ML project that detects your emotion through your text",
    github: "https://github.com/Junaid2002/EMOTION_DETECTOR.git",
    icon: <i className="fab fa-python" style={{ color: '#facc15', fontSize: '2.5rem' }}></i>,
    tech: "Python"
  },
  {
    title: "Timber Game",
    desc: "A simple tree-chopping game built with C++.",
    github: "https://github.com/Junaid2002/TIMBER.git",
    icon: <i className="fas fa-code" style={{ color: '#a855f7', fontSize: '2.5rem' }}></i>,
    tech: "C++"
  }
];

const ProjectCard = ({ title, desc, github, icon }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid #60a5fa',
        animation: `bounceIn 0.8s ease-out forwards`,
        animationDelay: `${projects.findIndex(p => p.title === title) * 0.2}s`,
        minHeight: '200px',
        width: '100%',
        boxSizing: 'border-box'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>{title}</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#d1d5db' }}>{desc}</p>
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          alignSelf: 'flex-end',
          marginTop: '1rem',
          color: '#60a5fa',
          fontSize: '1.5rem',
          transition: 'color 0.2s ease'
        }}
        title={`View ${title} on GitHub`}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#93c5fd')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#60a5fa')}
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <style>
        {`
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            60% {
              opacity: 1;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.5; }
            100% { transform: scale(1); opacity: 0.3; }
          }
        `}
      </style>
      <section
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: "url('../assets/bg.jpg') no-repeat center center/cover",
          color: 'white',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(11, 12, 16, 0.7), rgba(11, 12, 16, 0.7))',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(97, 218, 251, 0.1) 0%, transparent 70%)',
            opacity: 0.3,
            zIndex: 0,
            animation: 'pulse 12s infinite ease-in-out'
          }}
        />
        <h2
          style={{
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            fontFamily: "'Orbitron', sans-serif",
            animation: 'bounceIn 0.8s ease-out forwards',
            color: 'white'
          }}
        >
          My Recent Works
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '90vw',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;