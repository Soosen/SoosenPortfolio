import "./NavButton.css";
import React, { useState } from "react";

function NavButton(props) {
  const handleOnClick = () => console.log("hello");

  return (
    <button
      className="NavButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOnClick}
    >
      <div className="ButtonText">{props.name}</div>
    </button>
  );
}

export default NavButton;
