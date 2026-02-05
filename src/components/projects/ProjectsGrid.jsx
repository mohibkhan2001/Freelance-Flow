import React, { useState } from "react";
import ProjetcsCard from "./ProjectsCard";
import ProjectsAdd from "./ProjectsAdd";
import initialProjects from "../../data/projectsData";

const ProjectsGrid = ({ selectedFilter }) => {
  const [projects, setProjects] = useState(initialProjects);
  const addProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };
  return (
    <div className="projects_grid py-4 flex-1">
      <ProjetcsCard selectedFilter={selectedFilter} projects={projects} />
      <ProjectsAdd onAddProject={addProject} />
    </div>
  );
};

export default ProjectsGrid;
