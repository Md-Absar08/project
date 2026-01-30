import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import SubmissionModal from "./components/SubmissionModal";
import AdminPanel from "./components/AdminPanel";
import ProjectsGrid from "./components/ProjectsGrid";
import Login from "./components/Login";

// ✅ Named import
import { initialProjects } from "./data";

function App() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "all", category: "all" });
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Load from localStorage or initialProjects
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(initialProjects);
      localStorage.setItem("projects", JSON.stringify(initialProjects));
    }
  }, []);

  // ✅ Persist changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // ✅ Submit new project
  const handleSubmitProject = (projectData) => {
    const newProject = {
      id:
        projects.length > 0
          ? Math.max(...projects.map((p) => p.id)) + 1
          : 1,
      ...projectData,
      date: new Date().toISOString().split("T")[0],
      status: "submitted",
    };

    setProjects([newProject, ...projects]);
    setShowModal(false);
  };

  // ✅ Delete project
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // ✅ Update status
  const handleUpdateStatus = (id, status) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, status } : p
      )
    );
  };

  // ✅ Filtering logic
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filters.status === "all" || p.status === filters.status;

    const matchesCategory =
      filters.category === "all" || p.category === filters.category;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // ✅ Stats
  const stats = {
    total: projects.length,
    submitted: projects.filter((p) => p.status === "submitted").length,
    inReview: projects.filter((p) => p.status === "in review").length,
    approved: projects.filter((p) => p.status === "approved").length,
  };

  return (
    <Router>
      <div className="app">
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  projects={filteredProjects}
                  stats={stats}
                  onShowModal={() => setShowModal(true)}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  filters={filters}
                  onFilterChange={setFilters}
                />
              }
            />

            <Route
              path="/data"
              element={<ProjectsGrid projects={filteredProjects} />}
            />

            <Route
              path="/login"
              element={<Login onLogin={() => setIsAdmin(true)} />}
            />

            <Route
              path="/admin"
              element={
                isAdmin ? (
                  <AdminPanel
                    projects={projects}
                    onDeleteProject={handleDeleteProject}
                    onUpdateStatus={handleUpdateStatus}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>

        {showModal && (
          <SubmissionModal
            onSubmit={handleSubmitProject}
            onClose={() => setShowModal(false)}
          />
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
