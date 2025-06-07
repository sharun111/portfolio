import React, { useEffect, useState } from "react";
import "./Intro.css";

const Intro = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // Start fade-out
    }, 2500); // Show text for 2.5s

    const timer2 = setTimeout(() => {
      onComplete(); // Switch to main app after fade-out
    }, 3500); // Total time: fadeIn (1s) + delay + fadeOut (1s)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="portfolio-title">Portfolio</h1>
    </div>
  );
};

export default Intro;
