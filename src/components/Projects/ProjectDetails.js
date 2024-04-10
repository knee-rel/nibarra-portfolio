import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ webProjectsData, dataScienceProjects }) {
  const { id } = useParams();
  const allProjects = [...webProjectsData, ...dataScienceProjects];
  const project = allProjects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.imgPath} alt="Project" />
      <p>{project.description}</p>
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
      <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}

export default ProjectDetails;
