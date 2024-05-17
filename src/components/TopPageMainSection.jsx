import GenericButton from "./GenericButton";
import "./TopPageMainSeciton.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TopPageMainSeciton() {
  const [avatarRotation, setRotation] = useState(0); // State to manage rotation angle
  const [avatarRotationSpeed, setRotationSpeed] = useState(1); // Speed of rotation in degrees per frame
  const navigate = useNavigate();

  useEffect(() => {
    // Animation loop
    const updateRotation = () => {
      setRotation((prevRotation) => (prevRotation + avatarRotationSpeed) % 360);
      requestAnimationFrame(updateRotation);
    };

    requestAnimationFrame(updateRotation);

    // No cleanup function needed
  }, [avatarRotationSpeed]);

  return (
    <div className="FullPageView">
      <div className="MainSectionContainer">
        <div className="AvatarContainer">
          <div
            className="AvatarBorder"
            style={{
              background: `linear-gradient(${avatarRotation}deg,#8b00ff, #0022ff, #00c3ff, #00ff00)`,
            }}
          >
            <img
              src="src/assets/avatar.png"
              alt="avatar_picture"
              className="Avatar"
            />
          </div>
        </div>
        <div className="TitleContainer">
          <h1>Hi, I am Soosen, an aspiring junior software developer.</h1>
        </div>
        <div className="DescriptionContainer">
          <h2>
            Since childhood, I have been fascinated by technology, dedicating
            much of my time to learning about computers, a passion I continue to
            pursue today.
          </h2>
        </div>
        <div className="ButtonsContainer">
          <GenericButton
            className="GenButton"
            name="Contact me"
            onClick={() => navigate(`/Contact`)}
          ></GenericButton>
          <GenericButton
            className="GenButton"
            name="Download CV"
            onClick={() => navigate(`/Resume`)}
          ></GenericButton>
          <GenericButton
            className="GenButton"
            name="GitHub"
            onClick={() => {
              window.open("https://github.com/Soosen", "_blank");
            }}
          ></GenericButton>
        </div>
      </div>
    </div>
  );
}

export default TopPageMainSeciton;
