import React, { useState, useEffect } from "react";
import ProjetcsCard from "./ProjectsCard";
import ProjectsAdd from "./ProjectsAdd";
import initialProjects from "../../data/projectsData";

const ProjectsGrid = ({ selectedFilter }) => {
  const [projects, setProjects] = useState(() => {
    // Lazy init from localStorage or fallback to initialProjects
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const addProject = (newProject) => {
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      localStorage.setItem("projects", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="projects_grid py-4 flex-1">
      <ProjetcsCard selectedFilter={selectedFilter} projects={projects} />
      <ProjectsAdd onAddProject={addProject} />
    </div>
  );
};

export default ProjectsGrid;
