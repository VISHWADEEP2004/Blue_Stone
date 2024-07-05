import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import Login from './Components/pages/Login';
import AdminLogin from './Components/Admin/AdminLogin';
import PrivateRoute from './Components/Admin/PrivateRoute';
import AdminDashboard from './Components/Admin/AdminDashboard';
import UserDashboard from './Components/User/UserDashboard';
import Register from './Components/pages/Register';
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          
        <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard/>} type="admin"/>} />
        <Route path="/user/dashboard" element={<PrivateRoute element={<UserDashboard />} type="user" />} />
        {/* <Route path="/user/courses" element={<PrivateRoute element={<UserCourses />} type="user" />} />
        <Route path="/user/universities" element={<PrivateRoute element={<UserUniversities />} type="user" />} />
        <Route path="/user/certifications" element={<PrivateRoute element={<UserCertifications />} type="user" />} /> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
