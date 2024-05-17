import "./HomePage.css";
import Window from "../components/Window";
import NavBar from "../components/NavBar";
import TopPageMainSecion from "../components/TopPageMainSection";

function HomePage() {
  return (
    <div className="Page">
      <NavBar></NavBar>
      <div className="MainSection">
        <TopPageMainSecion></TopPageMainSecion>
      </div>
    </div>
  );
}

export default HomePage;
