import React, { useEffect } from "react";
import "./Intro.css";

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-screen">
      <div className="dot-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="processing-text">Processing</p>
    </div>
  );
};

export default Intro;
