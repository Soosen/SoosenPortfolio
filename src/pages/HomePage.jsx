import "./HomePage.css";
import Window from "../components/Window";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="Page">
      <NavBar></NavBar>
      <div className="MainSection">
        <Window></Window>
      </div>
    </div>
  );
}

export default HomePage;
