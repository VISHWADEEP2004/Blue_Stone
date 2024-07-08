import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Signup from './Components/pages/Signup';

function App() {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSetUsername = (firstName, lastName) => {
    setUsername(`${firstName} ${lastName}`);
  };

  return (
    <Router>
      <div className="App">
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUsername={handleSetUsername} />} />
          <Route path="/signup" element={<Signup setUsername={handleSetUsername}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard />} type="admin" />} />
          <Route path="/user/dashboard" element={<PrivateRoute element={<UserDashboard username={username} />} type="user" />} />
          <Route path="/user/register" element={<PrivateRoute element={<Register />} type="user" />} />
          {/* <Route path="/user/universities" element={<PrivateRoute element={<UserUniversities />} type="user" />} />
          <Route path="/user/certifications" element={<PrivateRoute element={<UserCertifications />} type="user" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const noNavbarRoutes = ['/admin/dashboard', '/user/dashboard', '/user/register'];

  return !noNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
}

export default App;
