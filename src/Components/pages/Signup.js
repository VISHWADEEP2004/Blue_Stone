import React, { useState } from 'react';
import axios from 'axios';
import '../../Assets/Css/Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setUsername }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/signup', formData);
      console.log('Response:', response.data);
      alert('Signup successful!');
      setUsername(response.data.username);
      navigate('/login');
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="wrapper-s">
      <div className="title-s">Signup</div>
      <form onSubmit={handleSubmit} className="form-step-s">
        <div className="user-details-s active">
          <div className="input-box-s">
            <span className="details-s">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box-s">
            <span className="details">Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box-s">
            <span className="details">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box-s">
            <span className="details">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container-s">
            <div className="button-s">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
