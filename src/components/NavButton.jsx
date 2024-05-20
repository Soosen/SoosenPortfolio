import "./NavButton.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function NavButton(props) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${props.name.replace(" ", "")}`);
  };

  return (
    <button
      className={`NavButton ${props.isMobile ? "MobileView" : ""}`}
      onClick={handleOnClick}
    >
      <div className="ButtonText">{props.name}</div>
    </button>
  );
}

export default NavButton;
