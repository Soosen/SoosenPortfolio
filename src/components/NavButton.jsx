import "./NavButton.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function NavButton(props) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${props.name}`);
  };

  return (
    <button className="NavButton" onClick={handleOnClick}>
      <div className="ButtonText">{props.name}</div>
    </button>
  );
}

export default NavButton;
