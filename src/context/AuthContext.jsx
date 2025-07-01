// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import config from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(config.JWT_STORAGE_KEY);
    const storedUser = localStorage.getItem('user');
    const expiresAt = localStorage.getItem('expiresAt');

    if (storedToken && expiresAt && new Date().getTime() < parseInt(expiresAt)) {
      setToken(storedToken);
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setupAutoLogout(expiresAt);
    } else {
      logout();
    }

    setAuthLoading(false);
  }, []);

  const setupAutoLogout = (expiresAt) => {
    const delay = parseInt(expiresAt) - new Date().getTime();
    if (delay > 0) {
      const timer = setTimeout(() => {
        logout();
      }, delay);
      setLogoutTimer(timer);
    }
  };

  const login = (jwt, userData) => {
    const expiresInMs = 60 * 60 * 1000; // 1 hour expiry
    const expiresAt = new Date().getTime() + expiresInMs;

    localStorage.setItem(config.JWT_STORAGE_KEY, jwt);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('expiresAt', expiresAt);

    setToken(jwt);
    setUser(userData || null);
    setupAutoLogout(expiresAt);
  };

  const logout = () => {
    localStorage.removeItem(config.JWT_STORAGE_KEY);
    localStorage.removeItem('user');
    localStorage.removeItem('expiresAt');
    setToken(null);
    setUser(null);
    if (logoutTimer) clearTimeout(logoutTimer);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
