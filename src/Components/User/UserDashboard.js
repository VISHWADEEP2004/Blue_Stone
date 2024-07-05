import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/UserDashboard.css';

const UserDashboard = () => {
  const firstName = localStorage.getItem('First_Name') || 'User';
  const secondName=localStorage.getItem('Second_Name');

  return (
    <div className='dashboard'>
      <div className="dashboard-nav">
        <header>
          <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
          <a href="#" className="brand-logo"><i className="fas fa-anchor"></i> <span>BRAND</span></a>
        </header>
        <nav className="dashboard-nav-list">
          <Link to="/user/dashboard" className="dashboard-nav-item"><i className="fas fa-home"></i> Home </Link>
          <Link to="/user/dashboard" className="dashboard-nav-item active"><i className="fas fa-tachometer-alt"></i> Dashboard </Link>
          <Link to="/user/upload" className="dashboard-nav-item"><i className="fas fa-file-upload"></i> Upload </Link>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-photo-video"></i> Media </a>
            <div className='dashboard-nav-dropdown-menu'>
              <Link to="/user/media/all" className="dashboard-nav-dropdown-item">All</Link>
              <Link to="/user/media/recent" className="dashboard-nav-dropdown-item">Recent</Link>
              <Link to="/user/media/images" className="dashboard-nav-dropdown-item">Images</Link>
              <Link to="/user/media/videos" className="dashboard-nav-dropdown-item">Video</Link>
            </div>
          </div>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-users"></i> Users </a>
            <div className='dashboard-nav-dropdown-menu'>
              <Link to="/user/users/all" className="dashboard-nav-dropdown-item">All</Link>
              <Link to="/user/users/subscribed" className="dashboard-nav-dropdown-item">Subscribed</Link>
              <Link to="/user/users/non-subscribed" className="dashboard-nav-dropdown-item">Non-subscribed</Link>
              <Link to="/user/users/banned" className="dashboard-nav-dropdown-item">Banned</Link>
              <Link to="/user/users/new" className="dashboard-nav-dropdown-item">New</Link>
            </div>
          </div>
          <div className='dashboard-nav-dropdown'>
            <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Payments </a>
            <div className='dashboard-nav-dropdown-menu'>
              <Link to="/user/payments/all" className="dashboard-nav-dropdown-item">All</Link>
              <Link to="/user/payments/recent" className="dashboard-nav-dropdown-item">Recent</Link>
              <Link to="/user/payments/projections" className="dashboard-nav-dropdown-item">Projections</Link>
            </div>
          </div>
          <Link to="/user/settings" className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </Link>
          <Link to="/user/profile" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </Link>
          <div className="nav-item-divider"></div>
          <Link to="/logout" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </Link>
        </nav>
      </div>
      <div className='dashboard-app'>
        <header className='dashboard-toolbar'>
          <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
        </header>
        <div className='dashboard-content'>
          <div className='container'>
            <div className='card'>
              <div className='card-header'>
                <h1>Welcome back {secondName}</h1>
              </div>
              <div className='card-body'>
                <p>Your account type is: User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
