import React from "react";

const ProjectCard = ({ project, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "submitted": return "#ffc107";
      case "in review": return "#17a2b8";
      case "approved": return "#28a745";
      default: return "#6c757d";
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <i className="fas fa-project-diagram"></i>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="tag">{project.category}</span>
        <div className="project-meta">
          <span>{project.author}</span>
          <span>{project.date}</span>
        </div>
        <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: getStatusColor(project.status),
              marginRight: "8px",
            }} />
            <span style={{ fontSize: "0.9rem", color: "#666" }}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(project.id)}
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              padding: "0.3rem 0.6rem",
              borderRadius: "6px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;