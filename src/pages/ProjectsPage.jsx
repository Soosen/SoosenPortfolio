import "./ProjectsPage.css";
import NavBar from "../components/NavBar";
import ProjectItem from "../components/ProjectItem";
import projects from "/data/projects";
import React, { useEffect, useState } from "react";

function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  return (
    <div className={`Page ${isMobile ? "MobileView" : ""}`}>
      <NavBar></NavBar>
      <div className="MainSection ProjectsPageMainSection">
        <div className="ProjectsContainer">
          {projects.map((project, index) => (
            <ProjectItem
              className="ProjectItem"
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
