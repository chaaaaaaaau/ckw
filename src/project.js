import React from "react";
import ReactPlayer from "react-player";

import "./project.css";
import projectData from "./projectData";

function Project() {
  const projectComponents = projectData.map((project) => (
    <div className="project-component">
      <text className="product">{project.product}</text>
      <br />
      <p className="description">{project.description} </p>
      <br />
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={project.demoLink}
          width="100%"
          height="100%"
        />
      </div>
      <br />
      <br />
    </div>
  ));

  return (
    <div id="project">
      <h1>Project</h1>
      {projectComponents}
    </div>
  );
}

export default Project;
