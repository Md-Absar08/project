import React from "react";
import StatsCards from "./StatsCards";
import ProjectsGrid from "./ProjectsGrid";
import Filters from "./Filters";
import AdminPanel from "./AdminPanel";

const Dashboard = ({
  projects,
  stats,
  onShowModal,
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onDeleteProject,
  onUpdateStatus
}) => {
  return (
    <div className="dashboard">
      <Filters filters={filters} onFilterChange={onFilterChange} />

      <div className="main-content">
        <StatsCards stats={stats} />

        {/* Projects Section */}
        <div className="projects-section" id="projects">
          <div className="projects-header">
            <h2>Recent Projects</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <button className="btn" onClick={onShowModal}>
                <i className="fas fa-plus"></i>
                Submit Project
              </button>
            </div>
          </div>

          <ProjectsGrid projects={projects} />
        </div>

        
        <AdminPanel
          projects={projects}
          onDeleteProject={onDeleteProject}
          onUpdateStatus={onUpdateStatus}
        />
      </div>
    </div>
  );
};

export default Dashboard;
