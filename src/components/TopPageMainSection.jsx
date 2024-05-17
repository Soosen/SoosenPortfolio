import GenericButton from "./GenericButton";
import "./TopPageMainSecion.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopPageMainSecion() {
  const navigate = useNavigate();
  return (
    <div className="FullPageView">
      <div className="MainSectionContainer">
        <div className="AvatarContainer">
          <img
            src="src/assets/avatar.png"
            alt="avatar_picture"
            className="Avatar"
          />
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

export default TopPageMainSecion;
