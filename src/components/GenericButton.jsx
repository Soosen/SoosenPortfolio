import React, { useState, useEffect } from "react";
import "./GenericButton.css";

function GenericButton(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(0.5);
  let animationId;

  const handleMouseEnter = () => {
    setIsHovered(true);
    startRotationAnimation();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    stopRotationAnimation();
  };

  const startRotationAnimation = () => {
    animationId = requestAnimationFrame(updateRotation);
  };

  const stopRotationAnimation = () => {
    cancelAnimationFrame(animationId);
  };

  const updateRotation = () => {
    if (rotationSpeed !== 0) {
      setRotation((prevRotation) => (prevRotation + rotationSpeed) % 360);
    }
    animationId = requestAnimationFrame(updateRotation);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className="Border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered
          ? `linear-gradient(${rotation}deg,#8b00ff, #0022ff, #00c3ff, #00ff00)`
          : "transparent",
      }}
    >
      <div className="ButtonContainer">
        <button className="Button" onClick={props.onClick}>
          {props.name}
        </button>
      </div>
    </div>
  );
}

export default GenericButton;
