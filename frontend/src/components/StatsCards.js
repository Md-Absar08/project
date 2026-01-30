import React from "react";

const StatsCards = ({ stats }) => (
  <div className="stats-cards">
    <div className="stat-card">
      <h3>Total Projects</h3>
      <div className="value">{stats.total}</div>
      <div className="change">+5% from last week</div>
    </div>
    <div className="stat-card">
      <h3>Submitted</h3>
      <div className="value">{stats.submitted}</div>
      <div className="change">Waiting for review</div>
    </div>
    <div className="stat-card">
      <h3>In Review</h3>
      <div className="value">{stats.inReview}</div>
      <div className="change">Being evaluated</div>
    </div>
    <div className="stat-card">
      <h3>Approved</h3>
      <div className="value">{stats.approved}</div>
      <div className="change">+2 this week</div>
    </div>
  </div>
);

export default StatsCards;
