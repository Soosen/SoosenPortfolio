import "./Window.css";
import React, { useState } from "react";

function Window() {
  const defaultTopBarButtonColor = "black";
  const onHoverCloseButtonColor =
    "linear-gradient(0deg, rgba(214,35,35,1) 0%, rgba(215,94,21,1) 100%)";

  const onHoverButtonColor = "#242323";

  const [isCloseHovered, setCloseHovered] = useState(false);
  const [isMaxHovered, setMaxHovered] = useState(false);
  const [isMinHovered, setMinHovered] = useState(false);

  return (
    <div className="Window">
      <div className="TopBar">
        <div className="WindowTitleSection">
          <p>Soosen Portfolio</p>{" "}
        </div>
        <div className="ButtonsContainer">
          <button
            className="TopBarButton"
            id="MinimizeButton"
            onMouseEnter={() => setMinHovered(true)}
            onMouseLeave={() => setMinHovered(false)}
            style={{
              background: isMinHovered
                ? onHoverButtonColor
                : defaultTopBarButtonColor,
            }}
          >
            <i className="fa-regular fa-window-minimize"></i>
          </button>
          <button
            className="TopBarButton"
            id="MaximizeButton"
            onMouseEnter={() => setMaxHovered(true)}
            onMouseLeave={() => setMaxHovered(false)}
            style={{
              background: isMaxHovered
                ? onHoverButtonColor
                : defaultTopBarButtonColor,
            }}
          >
            <i className="fa-regular fa-window-maximize"></i>
          </button>
          <button
            className="TopBarButton"
            id="CloseButton"
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
            style={{
              background: isCloseHovered
                ? onHoverCloseButtonColor
                : defaultTopBarButtonColor,
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div className="Desktop">
        <img className="WallPaper" src="src/assets/xp_desktop.jpg"></img>
      </div>
    </div>
  );
}

export default Window;
