import React, { useState, useEffect } from "react";
import "./ColorfulBorder.css";

function ColorfulBorder({ className, children, onClick }) {
  const [bordersRotation, setRotation] = useState(0);
  const [bordersRotationSpeed, setBordersRotationSpeed] = useState(0.65);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateRotation = () => {
      setRotation(
        (prevRotation) => (prevRotation + bordersRotationSpeed) % 360
      );
      requestAnimationFrame(updateRotation);
    };

    requestAnimationFrame(updateRotation);

    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [bordersRotationSpeed]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`ColorfulBorder ${className}`}
      style={{
        background: isHovered
          ? `linear-gradient(${bordersRotation}deg, #FF0000, #FFA500, #FFFF00, #008000)`
          : `linear-gradient(${bordersRotation}deg, #8b00ff, #0022ff, #00c3ff, #00ff00)`,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default ColorfulBorder;
