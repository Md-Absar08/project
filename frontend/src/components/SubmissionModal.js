import React, { useState } from "react";

const SubmissionModal = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    category: "Web Application",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Submit New Project</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Project Title</label>
              <input id="title" name="title" value={formData.title}
                onChange={handleChange} required className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description</label>
              <textarea id="description" name="description" value={formData.description}
                onChange={handleChange} required className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="author">Your Name</label>
              <input id="author" name="author" value={formData.author}
                onChange={handleChange} required className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="category">Project Category</label>
              <select id="category" name="category" value={formData.category}
                onChange={handleChange} className="form-control">
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="IoT">Internet of Things (IoT)</option>
                <option value="Game Development">Game Development</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn">Submit Project</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
