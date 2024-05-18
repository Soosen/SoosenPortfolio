import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";
import ColorfulBorder from "./ColorfulBorder";
import "./TopPageMainSection.css";

function TopPageMainSection() {
  const navigate = useNavigate();

  return (
    <div className="FullPageView">
      <div className="MainSectionContainer fadeIn">
        <div className="AvatarContainer">
          <ColorfulBorder className="AvatarBorder">
            <img
              src="src/assets/avatar.png"
              alt="avatar_picture"
              className="Avatar"
            />
          </ColorfulBorder>
        </div>
        <div className="TitleContainer fadeIn">
          <h1 className="Title">
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

export default TopPageMainSection;
