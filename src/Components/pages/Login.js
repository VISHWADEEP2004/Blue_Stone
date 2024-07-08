import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Assets/Css/Login.css';

function Login({ setUsername }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
  
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      const userData = response.data;
      console.log('Fetched users:', userData);
  
      const user = userData.find(user => user.email === email);
      if (user) {
        console.log('User found:', user);
        if (user.password === password) {
          console.log('Password matches');
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('username', user.username);
          setUsername(user.username);
          navigate('/user/dashboard');
        } else {
          console.log('Invalid password');
          setError('Invalid password');
        }
      } else {
        console.log('User not found');
        setError('User not found');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <Link to="/register" className="link-button">Register</Link></p>
    </div>
  );
}

export default Login;
