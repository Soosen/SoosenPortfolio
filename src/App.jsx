import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import SpecificProjectPage from "./pages/SpecificProjectPage";
import projects from "./data/projects"; // Import the projects data

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutMe" element={<AboutMePage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      {projects.map((project) => (
        <Route
          key={project.id}
          path={`/Projects/${project.title}`}
          element={
            <SpecificProjectPage
              title={project.title}
              video={project.video}
              image={project.image}
              description={project.description}
              url={project.url}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default App;
