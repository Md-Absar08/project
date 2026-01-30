import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <i className="fas fa-rocket"></i>
        <span>ProjectHub</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/admin">Admin</Link></li> {/* 🆕 Admin link */}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
