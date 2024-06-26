import "./AboutMePage.css";
import NavBar from "../components/NavBar";
import ColorfulBorder from "../components/ColorfulBorder";
import { useEffect, useState } from "react";

function AboutMePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <div
      className={`Page ${loaded ? "loaded" : ""} ${
        isMobile ? "MobileView" : ""
      }`}
    >
      <NavBar />
      <div className="MainSection">
        <ColorfulBorder className="AboutMeColorfulBorder">
          <div className="TextContainer">
            <h1 className="FirstSentence">
              {!isMobile
                ? "I am an aspiring junior software developer..."
                : "I am an aspiring developer..."}
            </h1>
            <h1 className="RestText">
              Originally from Poland. At the age of 15, I moved to Germany. My
              passion for solving puzzles and technology led me to pursue my
              education at Hans-Böckler-Berufskolleg in Münster, where I
              completed my A-levels in Information Technology Assistance.
              Continuing my education in Computer Science was a natural choice.
              I am currently awaiting the results of my bachelor’s thesis and
              will soon receive my bachelor’s degree. In addition to my academic
              projects, I have worked on several side projects, which you can
              view <a href="Projects">here</a>.
            </h1>
          </div>
        </ColorfulBorder>
      </div>
    </div>
  );
}

export default AboutMePage;
