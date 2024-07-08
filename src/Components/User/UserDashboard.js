import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link, Route, Routes } from 'react-router-dom';
import '../../Assets/Css/UserDashboard.css';
import Register from '../pages/Register';

const UserDashboard = () => {
  const username = localStorage.getItem('username');
  const [currentComponent, setCurrentComponent] = useState('home');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'home':
        return (
          <div className='dashboard-content'>
          <div className='container'>
            <div className='card'>
              <div className='card-header'>
                {username && <h1 className="welcome-message">Welcome {username}</h1>}
              </div>
            </div>
          </div>
        </div>
        )
      case 'form':
        return <Register />;
      default:
        return <div>Welcome to your dashboard, {username}!</div>;
    }
  };

  return (
    <main>
      <nav className="main-menu">
        <h1>BLUESTONE</h1>
        
        <ul>
          <li className="nav-item active" onClick={() => setCurrentComponent('home')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-house nav-icon" />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setCurrentComponent('form')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-file-upload nav-icon" />
              <span className="nav-text">Form</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-user nav-icon" />
              <span className="nav-text">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-calendar-check nav-icon" />
              <span className="nav-text">Schedule</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-person-running nav-icon" />
              <span className="nav-text">Activities</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-sliders nav-icon" />
              <span className="nav-text">Settings</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="/">
            <i className="fa-solid fa-left-from-bracket"/>
              <span className="nav-text">Logout</span>
            </Link>
           
          </li>
        </ul>
      </nav>
      <div className="right-content">
        <div className="user-info">
          <div className="icon-container">
          <i className="fa-solid fa-user"/>
          </div>
          <h4>{username}</h4>
        </div>
        <div className="dashboard-content">
          {renderComponent()}
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;

