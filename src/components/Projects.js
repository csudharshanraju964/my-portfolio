import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <a href="https://project-eventura.netlify.app/" target="_blank">
        <div className="project">
          <img src="./eventura.jpg" alt="project-thumbnail"></img>
          <div>Event Proposal App</div>
        </div>
      </a>
      <a href="https://abhaykamath.github.io/cinepedia-react/" target="_blank">
        <div className="project">
          <img src="./cinepedia.jpg" alt="project-thumbnail"></img>
          <div>Movie Search App</div>
        </div>
      </a>
      <a href="https://abhaykamath.github.io/expense-tracker/" target="_blank">
        <div className="project">
          <img src="./tracker.jpg" alt="project-thumbnail"></img>
          <div>Expense Tracker App</div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
