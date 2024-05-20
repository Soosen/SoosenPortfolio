import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";
import "./TopPageMainSection.css";

function TopPageMainSection() {
  const navigate = useNavigate();
  const [glowColor, setGlowColor] = useState("#00ff00");
  const [avatarRotation, setRotation] = useState(0);
  const [avatarRotationSpeed, setRotationSpeed] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowColor((prevGlowColor) =>
        prevGlowColor === "#00ff00" ? "#00ffff" : "#00ff00"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateRotation = () => {
      setRotation((prevRotation) => (prevRotation + avatarRotationSpeed) % 360);
      requestAnimationFrame(updateRotation);
    };

    requestAnimationFrame(updateRotation);
  }, [avatarRotationSpeed]);

  return (
    <div className="FullPageView">
      <div className="MainSectionContainer fadeIn">
        <div className="AvatarContainer">
          <div
            className="AvatarBorder"
            style={{
              background: `linear-gradient(${avatarRotation}deg, #8b00ff, #0022ff, #00c3ff, #00ff00)`,
            }}
          >
            <img
              src="/assets/avatar.png"
              alt="avatar_picture"
              className="Avatar"
            />
          </div>
        </div>
        <div className="TitleContainer fadeIn">
          <h1
            className="Title"
            style={{
              textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
            }}
          >
            Hi, I am Soosen, an aspiring junior software developer.
          </h1>
        </div>
        <div className="DescriptionContainer fadeIn">
          <h2 className="Description">
            Since childhood, I have been fascinated by technology, dedicating
            much of my time to learning about computers, a passion I continue to
            pursue today.
          </h2>
        </div>
        <div className="ButtonsContainer fadeIn">
          <GenericButton
            className="GenButton"
            name="Contact Me"
            onClick={() => navigate(`/Contact`)}
          />
          <GenericButton
            className="GenButton"
            name="About Me"
            onClick={() => navigate(`/AboutMe`)}
          />
          <GenericButton
            className="GenButton"
            name="GitHub"
            onClick={() => {
              window.open("https://github.com/Soosen", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopPageMainSection;
