import React, { useState, useEffect } from "react";
import "./ColorfulBorder.css";

function ColorfulBorder({ className, children, onClick }) {
  // Accept onClick as prop
  const [bordersRotation, setRotation] = useState(0); // State to manage rotation angle
  const [bordersRotationSpeed, setBordersRotationSpeed] = useState(0.65); // Speed of rotation in degrees per frame

  useEffect(() => {
    const updateRotation = () => {
      setRotation(
        (prevRotation) => (prevRotation + bordersRotationSpeed) % 360
      );
      requestAnimationFrame(updateRotation);
    };

    requestAnimationFrame(updateRotation);

    // No cleanup function needed
  }, [bordersRotationSpeed]);

  return (
    <div
      className={`ColorfulBorder ${className}`}
      style={{
        background: `linear-gradient(${bordersRotation}deg,#8b00ff, #0022ff, #00c3ff, #00ff00)`,
      }}
      onClick={onClick} // Pass onClick prop to the div
    >
      {children}
    </div>
  );
}

export default ColorfulBorder;
