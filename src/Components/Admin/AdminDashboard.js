// src/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Css/AdminDashboard.css'; // Ensure to create this CSS file for styling

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3>User Management</h3>
          <p>Manage user accounts, view user activity, and more.</p>
        </section>
        <section className="dashboard-section">
          <h3>Site Statistics</h3>
          <p>View site usage statistics, analytics, and reports.</p>
          {/* Add your site statistics functionality here */}
        </section>
        <section className="dashboard-section">
          <h3>Content Management</h3>
          <p>Manage site content, including posts, pages, and media.</p>
          {/* Add your content management functionality here */}
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
