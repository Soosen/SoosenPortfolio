import "./AboutMePage.css";
import NavBar from "../components/NavBar";
import ColorfulBorder from "../components/ColorfulBorder";
import { useEffect, useState } from "react";

function AboutMePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <div className={`Page ${loaded ? "loaded" : ""}`}>
      <NavBar />
      <div className="MainSection">
        <ColorfulBorder className="AboutMeColorfulBorder">
          <div className="TextContainer">
            <h1 className="FirstSentence">
              I am an aspiring junior software developer...
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
