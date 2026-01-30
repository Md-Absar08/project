import "./AdminPanel.css";
const AdminPanel = ({ projects, onDeleteProject, onUpdateStatus }) => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                No projects available
              </td>
            </tr>
          ) : (
            projects.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>{p.category}</td>
                <td>
                  <select
                    value={p.status}
                    onChange={(e) => onUpdateStatus(p._id, e.target.value)}
                  >
                    <option value="submitted">Submitted</option>
                    <option value="in review">In Review</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
                <td>{p.date}</td>
                <td>
                  <button onClick={() => onDeleteProject(p._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
