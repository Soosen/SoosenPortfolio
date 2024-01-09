import "./NavBar.css";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">
        <div className="LogoContainer">
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
