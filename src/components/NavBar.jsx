import "./NavBar.css";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const logoHandleOnClick = () => {
    navigate(`/`);
  };
  return (
    <div className="NavBar">
      <div className="Logo">
        <div className="LogoContainer" onClick={logoHandleOnClick}>
          <span className="LogoLeft">Soosen</span>
          <span className="LogoRight">Portfolio</span>
        </div>
      </div>
      <div className="NavButtonsContainer">
        <NavButton className="NavButton" name="Projects"></NavButton>
        <NavButton className="NavButton" name="Resume"></NavButton>
        <NavButton className="NavButton" name="Contact"></NavButton>
      </div>
    </div>
  );
}

export default NavBar;
