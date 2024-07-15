// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import bs1 from '../Assets/Img/bs1.png';
import '../Assets/Css/Navbar.css';
import ThemeToggle from './pages/ThemeToggle';

const Navbar=({ toggleTheme, theme })=> {
  return (
    <nav className="navbar">
      <div><img src={bs1} style={{ width: '15rem', height: 'auto' }}/></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </ul>
    </nav>
  );
}

export default Navbar;
