// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Css/Navbar.css';
import ThemeToggle from './pages/ThemeToggle';

const Navbar=({ toggleTheme, theme })=> {
  return (
    <nav className="navbar">
      <h1>BLUESTONE OVERSEAS CONSULTANT</h1>
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
          <Link to="/signup">Signup</Link>
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
