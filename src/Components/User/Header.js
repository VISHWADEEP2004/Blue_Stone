import React from 'react';
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import bs1 from '../../Assets/Img/bs1.png';
import '../../Assets/Css/Header.css';

const Header = () => {
    const username = localStorage.getItem('username');
  return (
    <header className="header">
      <div className="header-left">
        <img src={bs1} alt="Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <FaUserCircle className="icon" />
        <span className="user-name">{username}</span>
      </div>
    </header>
  );
};

export default Header;
