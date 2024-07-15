import React, { useState, useEffect } from 'react';
import Header from './Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import '../../Assets/Css/UserDashboard.css';
import Register from '../pages/Register';
import Profile from './Profile';

const UserDashboard = () => {
  const username = localStorage.getItem('username');
  const [currentComponent, setCurrentComponent] = useState('home');
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic'));

  useEffect(() => {
    const handleStorageChange = () => {
      setProfilePic(localStorage.getItem('profilePic'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'home':
        return (
          <div className='dashboard-content'>
            <div className='container'>
              <div className='card1'>
                <div className='card-header'>
                  {username && <h1 className="welcome-message">Welcome {username}</h1>}
                </div>
              </div>
            </div>
          </div>
        );
      case 'form':
        return <Register />;
      case 'profile':
        return <Profile />;
      default:
        return <div>Welcome to your dashboard, {username}!</div>;
    }
  };

  return (
    <div className="userdashboard">
      <Header />
      <main className="main-content">
        <nav className="main-menu">
          <ul>
            <li className="nav-item active" onClick={() => setCurrentComponent('home')}>
              <Link to="#">
                <i className="fa fa-house nav-icon" />
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setCurrentComponent('form')}>
              <Link to="#">
                <i className="fa fa-file-upload nav-icon" />
                <span className="nav-text">Form</span>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setCurrentComponent('profile')}>
              <Link to="#">
                <i className="fa fa-user nav-icon" />
                <span className="nav-text">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#">
                <i className="fa fa-calendar-check nav-icon" />
                <span className="nav-text">Schedule</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#">
                <i className="fa fa-person-running nav-icon" />
                <span className="nav-text">Activities</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#">
                <i className="fa fa-sliders nav-icon" />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <i className="fa-solid fa-left-from-bracket"/>
                <span className="nav-text">Logout</span>
              </Link>
            </li>  
          </ul>
        </nav>
        <div className="right-content">
          <div className="dashboard-content">
            {renderComponent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
