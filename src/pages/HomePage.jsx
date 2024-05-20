import React, { useEffect, useState } from "react";
import "./HomePage.css";
import NavBar from "../components/NavBar";
import TopPageMainSection from "../components/TopPageMainSection";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  return (
    <div className={`Page ${isMobile ? "MobileView" : ""}`}>
      <NavBar />
      <div className="MainSection">
        <TopPageMainSection />
      </div>
    </div>
  );
}

export default HomePage;
