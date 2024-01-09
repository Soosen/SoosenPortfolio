import "./NavButton.css";
import React, { useState } from "react";

function NavButton(props) {
  const [isHovered, setHovered] = useState(false);
  const defaultNavButtonColor = "black";
  const onHoverNavButtonColor = "#242323";

  const handleOnClick = () => console.log("hello");

  return (
    <button
      className="NavButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOnClick}
      style={{
        background: isHovered ? onHoverNavButtonColor : defaultNavButtonColor,
      }}
    >
      {props.name}
    </button>
  );
}

export default NavButton;
