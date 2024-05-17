import GenericButton from "./GenericButton";
import "./TopPageMainSecion.css";
import React, { useState } from "react";

function TopPageMainSecion() {
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
          ></GenericButton>
          <GenericButton
            className="GenButton"
            name="Download CV"
          ></GenericButton>
          <GenericButton className="GenButton" name="Github"></GenericButton>
        </div>
      </div>
    </div>
  );
}

export default TopPageMainSecion;
