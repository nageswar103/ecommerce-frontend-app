// src/routes/PublicRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  return token ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
