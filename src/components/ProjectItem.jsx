import "./ProjectItem.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ColorfulBorder from "./ColorfulBorder";

function ProjectItem(props) {
  const navigate = useNavigate();
  return (
    <ColorfulBorder
      className="ProjectItem"
      onClick={() => {
        navigate(`/Projects/${props.project.title}`);
      }}
    >
      <div className="ImageContainer">
        <img
          src={props.project.image}
          alt={props.project.title}
          className="ProjectImage"
        />
      </div>
      <div className="DescriptionContainer">
        <h1 className="ProjectDescription">{props.project.title}</h1>
      </div>
    </ColorfulBorder>
  );
}

export default ProjectItem;
