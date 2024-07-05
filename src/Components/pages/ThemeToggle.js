// src/ThemeToggle.js
import React, { useState, useEffect } from "react";
import '../../Assets/Css/ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="toggle-switch-background">
          <span className="toggle-switch-handle"></span>
        </span>
      </label>
    );
  }
  
  export default ThemeToggle;
  