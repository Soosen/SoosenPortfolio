import "./ProjectsPage.css";
import NavBar from "../components/NavBar";
import ProjectItem from "../components/ProjectItem";
import projects from "/src/data/projects";

function ProjectsPage() {
  return (
    <div className="Page">
      <NavBar></NavBar>
      <div className="MainSection">
        <div className="ProjectsContainer">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
