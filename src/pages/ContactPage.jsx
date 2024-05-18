import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import NavBar from "../components/NavBar";
import ContactBox from "../components/ContactBox";

function ContactPage() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Get In Touch";
  const [dotCount, setDotCount] = useState(0);
  const maxDotCount = 3;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
        setTimeout(animateDots, 500);
      } else {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        currentIndex++;
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const animateDots = () => {
    const dotsInterval = setInterval(() => {
      setDotCount((prevCount) => (prevCount + 1) % (maxDotCount + 1));
    }, 500);

    return () => clearInterval(dotsInterval);
  };

  return (
    <div className="Page">
      <NavBar />
      <div className="MainSection">
        <div className="Content">
          <div className="TopLayer">
            <h1>
              {typedText}
              {".".repeat(dotCount)}
            </h1>
          </div>
          <div className="BottomLayer">
            <ContactBox
              title="E-mail"
              details="mateusz.sosnowski.zg@gmail.com"
              image="src/assets/email.png"
              image_text="For business inquiries"
            ></ContactBox>
            <ContactBox
              title="Discord"
              details="Soosen"
              image="src/assets/discord.png"
              image_text="For private inquiries"
            ></ContactBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
