import React from "react";

const Filters = ({ filters, onFilterChange }) => {
  const handleChange = (type, value) => {
    onFilterChange({ ...filters, [type]: value });
  };

  return (
    <div className="sidebar">
      <h3><i className="fas fa-filter"></i> Filters</h3>

      <div className="filters">
        <div className="filter-group">
          <h4>Status</h4>
          {["all", "submitted", "in review", "approved"].map((s) => (
            <div className="filter-option" key={s}>
              <input
                type="radio"
                id={`status-${s}`}
                name="status"
                checked={filters.status === s}
                onChange={() => handleChange("status", s)}
              />
              <label htmlFor={`status-${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <h4>Category</h4>
          {["all", "Web Application", "Mobile Application", "Machine Learning", "IoT", "Game Development"].map((c) => (
            <div className="filter-option" key={c}>
              <input
                type="radio"
                id={`category-${c}`}
                name="category"
                checked={filters.category === c}
                onChange={() => handleChange("category", c)}
              />
              <label htmlFor={`category-${c}`}>{c}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
