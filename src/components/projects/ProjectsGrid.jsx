import React, { useState } from "react";
import ProjetcsCard from "./ProjectsCard";
import ProjectsAdd from "./ProjectsAdd";
import ProjectDelete from "./ProjectDelete";

const ProjectsGrid = ({ selectedFilter }) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [projects, setProjects] = useState(() => {
    // Lazy init from localStorage
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const addProject = (newProject) => {
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      localStorage.setItem("projects", JSON.stringify(updated));
      return updated;
    });
  };

  const handleDelete = (id) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem("projects", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="projects_grid py-4 flex-1">
      <ProjetcsCard
        selectedFilter={selectedFilter}
        projects={projects}
        deleteMode={deleteMode}
        onDelete={handleDelete}
      />
      <ProjectsAdd onAddProject={addProject} />
      <ProjectDelete
        deleteMode={deleteMode}
        onToggle={() => setDeleteMode((prev) => !prev)}
      />
    </div>
  );
};

export default ProjectsGrid;
