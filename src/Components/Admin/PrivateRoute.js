// src/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, type }) => {
  const isLoggedIn = localStorage.getItem(`is${type.charAt(0).toUpperCase() + type.slice(1)}LoggedIn`);
  return isLoggedIn ? element : <Navigate to={`/${type}/login`} />;
};

export default PrivateRoute;
