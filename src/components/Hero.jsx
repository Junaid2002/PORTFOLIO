import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.svg";

const Type = ({ texts, speed, pause }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = speed;

    if (isDeleting) {
      typingSpeed = speed / 2;
    }

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [1, 1.05, 1] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
      className="text-[#61dafb] [text-shadow:0_0_10px_rgba(97,218,251,0.5)]"
    >
      {displayedText}
    </motion.span>
  );
};

const Hero = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.5, ease: "easeOut", type: "spring" },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 0 20px rgba(97, 218, 251, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 + 1.2 },
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="bg-[url('../assets/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-[100vh] w-[100vw] m-0 p-0 flex flex-col justify-between overflow-hidden box-border relative
                 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(11,12,16,0.7),rgba(11,12,16,0.7))] before:z-0
                 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(97,218,251,0.1)_0%,transparent_70%)] after:opacity-30 after:z-0 after:animate-[pulse_15s_infinite_ease-in-out]"
    >
      <style jsx global>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: auto; /* <-- ENABLE SCROLLING */
          -webkit-overflow-scrolling: touch;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(97, 218, 251, 0.5); }
          50% { text-shadow: 0 0 20px rgba(97, 218, 251, 0.8); }
          100% { text-shadow: 0 0 5px rgba(97, 218, 251, 0.5); }
        }
      `}</style>

      <Container fluid className="flex-none w-full p-[1rem_1.5rem_at_768px] p-[0.5rem_at_0] m-0 box-border relative z-10" id="home">
        <Row className="items-center min-h-[30vh] w-full m-0">
          <Col md={12} className="text-left p-[0_15px_at_768px] p-[0_10px_at_0]">
            <motion.h1
              className="pb-[15px] m-0"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </motion.h1>

            <motion.h1
              className="font-bold text-[clamp(1.5rem,5vw,2rem)] my-[0.5rem]"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              I'M{" "}
              <span className="text-[#61dafb] animate-[glow_3s_infinite_ease-in-out]">
                JUNAID ASHRAF KHAN
              </span>
            </motion.h1>

            <div className="p-[1.5rem_0] text-[clamp(1.5rem,5vw,2rem)] min-h-[70px]">
              <Type
                texts={[
                  "Full Stack Developer",
                  "MERN Stack Enthusiast",
                  "AI & ML Learner",
                  "Project Builder",
                ]}
                speed={100}
                pause={1500}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="flex-1 w-full m-0 p-[1rem_1.5rem_at_768px] p-[0.5rem_at_0] overflow-hidden box-border relative z-10" id="about">
        <Row className="items-center w-full m-0">
          <Col md={8} className="text-[clamp(0.9rem,2.5vw,1.1rem)] leading-[1.5] p-[0_15px_at_768px] p-[0_10px_at_0]">
            <motion.h1
              className="text-[clamp(1.5rem,4vw,2em)] mb-[1rem]"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              LET ME <span className="text-[#61dafb]">INTRODUCE</span> MYSELF
            </motion.h1>
            <motion.p
              className="home-about-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a passionate{" "}
              <b className="text-[#61dafb]">MERN Stack Developer</b> who enjoys
              building robust and scalable web applications.
              <br />
              <br />
              I have hands-on experience with technologies like{" "}
              <b className="text-[#61dafb]">React.js, Node.js, Express.js</b>,
              and <b className="text-[#61dafb]">MongoDB</b>.
              <br />
              <br />
              I'm also exploring the world of{" "}
              <b className="text-[#61dafb]">AI/ML</b> and love working on
              real-world projects that make an impact.
              <br />
              <br />
              I thrive in building full-stack solutions, from backend APIs to
              polished front-end UIs.
            </motion.p>
          </Col>

          <Col md={4} className="text-center mt-[1rem] p-[0_15px_at_768px] p-[0_10px_at_0] overflow-hidden">
            <motion.img
              src={avatar}
              className="rounded-full max-w-[min(250px,100%)] h-auto"
              alt="avatar"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="flex-none w-full m-0 p-[1rem_1.5rem_at_768px] p-[0.5rem_at_0] text-center box-border relative z-10"
      >
        <motion.h1
          className="text-[clamp(1.5rem,4vw,1.75rem)] m-[0.5rem_0]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          FIND ME ON
        </motion.h1>
        <motion.p
          className="m-[0.5rem_0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Feel free to{" "}
          <span className="text-[#61dafb]">connect</span> with me
        </motion.p>
        <ul className="list-none flex justify-center gap-[2rem] pl-0 mb-0">
          {[
            {
              href: "https://www.instagram.com/ayan._khan10?igsh=MXRwZnM0aTB4bHFreg==",
              icon: <FaInstagram />,
              color: "#E4405F",
            },
            {
              href: "https://github.com/Junaid2002",
              icon: <FaGithub />,
              color: "#6cc644",
            },
            {
              href:
                "https://www.linkedin.com/in/junaid-ashraf-khan-565734297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              icon: <FaLinkedin />,
              color: "#0A66C2",
            },
          ].map((social, index) => (
            <motion.li
              key={index}
              className="text-[3.5rem]"
              custom={index}
              variants={socialIconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {social.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Hero;
