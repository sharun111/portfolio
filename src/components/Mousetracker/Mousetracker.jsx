import React, { useEffect, useState } from "react";
import "./Mousetracker.css";

const Mousetracker = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="tracker-container">
      <div
        className="spotlight"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />
      <div className="app-content">
        {children}
      </div>
    </div>
  );
};

export default Mousetracker;
