// src/routes/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token, authLoading } = useAuth();

  if (authLoading) {
    return <div>Loading...</div>; // Optional: loader or spinner
  }

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
