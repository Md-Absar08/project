import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects, onDeleteProject }) => {
  if (projects.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
        No projects found matching your criteria.
      </div>
    );
  }
  return (
    <div className="projects-grid">
      {projects.map((p) => <ProjectCard key={p.id} project={p} onDelete={onDeleteProject} />)}
    </div>
  );
};

export default ProjectsGrid;
