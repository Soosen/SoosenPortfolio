import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";
import ColorfulBorder from "./ColorfulBorder";
import "./TopPageMainSeciton.css";

function TopPageMainSeciton() {
  let greenGlowColor = "#00ff00";
  let blueGlowColor = "#00ffff";
  const [glowColor, setGlowColor] = useState(greenGlowColor);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowColor((prevGlowColor) =>
        prevGlowColor === greenGlowColor ? blueGlowColor : greenGlowColor
      );
    }, 3000);

    return () => clearInterval(interval);
  }, 1500);

  return (
    <div className="FullPageView">
      <div className="MainSectionContainer">
        <div className="AvatarContainer">
          <ColorfulBorder className="AvatarBorder">
            <img
              src="src/assets/avatar.png"
              alt="avatar_picture"
              className="Avatar"
            />
          </ColorfulBorder>
        </div>
        <div className="TitleContainer">
          <h1
            style={{
              textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
            }}
          >
            Hi, I am Soosen, an aspiring junior software developer.
          </h1>
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

export default TopPageMainSeciton;
