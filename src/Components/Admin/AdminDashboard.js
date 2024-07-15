import React, { useState } from 'react';
import Header from '../User/Header';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import '../../Assets/Css/AdminDashboard.css'
import AddUser from './AddUser';

const AdminDashboard = () => {
  const [currentComponent, setCurrentComponent] = useState('home');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'home':
        return (
          <div className='dashboard-content'>
            <div className='card1'>
              <div className='card-header'>
                <h1 className="welcome-message">Welcome ADMIN!</h1>
              </div>
            </div>
          </div>
        );
      case 'actions':
        return <Actions />;
      case 'adduser':
        return <AddUser/>;
      case 'activities':
        return <div>Activities Content</div>;
      case 'other':
        return <div>Other Content</div>;
      default:
        return <div>Welcome to your admin dashboard, ADMIN!</div>;
    }
  };

  return (
    <main className='admindashboard'>
      <Header/>
      <nav className="main-menu">
        
        <ul>
          <li className={`nav-item ${currentComponent === 'home' ? 'active' : ''}`} onClick={() => setCurrentComponent('home')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa-solid fa-house"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className={`nav-item ${currentComponent === 'actions' ? 'active' : ''}`} onClick={() => setCurrentComponent('actions')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-tasks nav-icon" />
              <span className="nav-text">Actions</span>
            </Link>
          </li>
          <li className={`nav-item ${currentComponent === 'adduser' ? 'active' : ''}`} onClick={() => setCurrentComponent('adduser')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-person-running nav-icon" />
              <span className="nav-text">AddUser</span>
            </Link>
          </li>
          <li className={`nav-item ${currentComponent === 'activities' ? 'active' : ''}`} onClick={() => setCurrentComponent('activities')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-person-running nav-icon" />
              <span className="nav-text">Activities</span>
            </Link>
          </li>
          <li className={`nav-item ${currentComponent === 'other' ? 'active' : ''}`} onClick={() => setCurrentComponent('other')}>
            <b />
            <b />
            <Link to="#">
              <i className="fa fa-ellipsis-h nav-icon" />
              <span className="nav-text">Other</span>
            </Link>
          </li>
          <li className="nav-item">
            <b />
            <b />
            <Link to="/">
              <i className="fa-solid fa-left-from-bracket" />
              <span className="nav-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="right-content">
        <div className="user-info">
          <div className="icon-container">
          </div>
          <h4 className='h4'><i className="fa-solid fa-user" /> ADMIN!</h4>
        </div>
        <div className="dashboard-content">
          {renderComponent()}
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
