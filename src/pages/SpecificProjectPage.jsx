import ColorfulBorder from "../components/ColorfulBorder";
import NavBar from "../components/NavBar";
import "./SpecificProjectPage.css";
import React, { useEffect, useState } from "react";

function SpecificProjectPage({ title, video, image, description, url }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className={`Page ${isMobile ? "MobileView" : ""}`}>
      <NavBar />
      <div className="MainSection">
        <ColorfulBorder
          className={`SpecificProjectBorder ${url ? "Clickable" : ""}`}
          onClick={handleClick}
        >
          <div className="ProjectTitleContainer">
            <h1>{title}</h1>
          </div>
          <div className="ProjectImageContainer">
            {video ? (
              <video className="SpecificProjectMultimedia" controls>
                <source src={`../${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`../${image}`}
                alt={title}
                className="SpecificProjectMultimedia"
              />
            )}
          </div>
          <div className="ProjectDescriptionContainer">
            <h2>{description}</h2>
          </div>
        </ColorfulBorder>
      </div>
    </div>
  );
}

export default SpecificProjectPage;
