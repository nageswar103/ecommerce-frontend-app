import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header
      style={{
        backgroundColor: '#1e1e2f',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: '60px',
      }}
    >
      <Link to="/" style={{ color: '#61dafb', fontSize: '22px', textDecoration: 'none' }}>
        🛒 eCommerce App
      </Link>

      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {!token ? (
          <>
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? '#61dafb' : '#fff',
                textDecoration: 'none',
                fontWeight: location.pathname === '/' ? 'bold' : 'normal',
              }}
            >
              Home
            </Link>
            <Link
              to="/login"
              style={{
                color: location.pathname === '/login' ? '#61dafb' : '#fff',
                textDecoration: 'none',
                fontWeight: location.pathname === '/login' ? 'bold' : 'normal',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                color: location.pathname === '/register' ? '#61dafb' : '#fff',
                textDecoration: 'none',
                fontWeight: location.pathname === '/register' ? 'bold' : 'normal',
              }}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <span style={{ fontWeight: 'bold', color: '#61dafb' }}>
              👤 {user?.name || user?.email || 'User'}
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#ff4d4f',
                border: 'none',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default TopNav;
