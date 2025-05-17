import React, { useState, useEffect } from "react";

const Type = ({ texts = ["Full Stack Developer", "Open Source Contributor", "Software Developer"], speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex > texts[textIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span style={{ borderRight: "2px solid #61dafb", paddingRight: "5px", whiteSpace: "nowrap" }}>
      {displayedText}
    </span>
  );
};

export default Type;
