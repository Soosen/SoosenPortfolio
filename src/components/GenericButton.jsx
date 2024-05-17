import React, { useState, useEffect } from "react";
import "./GenericButton.css"; // Import the CSS file for styles

function GenericButton(props) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover state
  const [rotation, setRotation] = useState(0); // State to manage rotation angle
  const [rotationSpeed, setRotationSpeed] = useState(0.5); // Speed of rotation in degrees per frame
  let animationId; // Variable to store animation frame ID

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
    startRotationAnimation();
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
    stopRotationAnimation();
  };

  // Function to start rotation animation
  const startRotationAnimation = () => {
    animationId = requestAnimationFrame(updateRotation);
  };

  // Function to stop rotation animation
  const stopRotationAnimation = () => {
    cancelAnimationFrame(animationId);
  };

  // Update rotation angle every frame
  const updateRotation = () => {
    if (rotationSpeed !== 0) {
      setRotation((prevRotation) => (prevRotation + rotationSpeed) % 360);
    }
    animationId = requestAnimationFrame(updateRotation);
  };

  // Clean up animation frame when component unmounts
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
