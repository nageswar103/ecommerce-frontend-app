import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopNav from './TopNav';

const services = [
  { label: 'Home', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Products', path: '/products' },
  { label: 'Orders', path: '/orders' },
  { label: 'Cart', path: '/cart' },
  { label: 'Payments', path: '/payments' },
  { label: 'Inventory', path: '/inventory' },
  { label: 'Notifications', path: '/notifications' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Discounts', path: '/discounts' },
  { label: 'Search', path: '/search' },
];

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (window.innerWidth < 768) setIsOpen(false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* ✅ Fixed Top Navigation */}
      <TopNav />

      <div style={{ display: 'flex' }}>
        {/* Sidebar only if logged in */}
        {token && (
          <div
            style={{
              width: isOpen ? '220px' : '0',
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              background: '#1e1e2f',
              color: '#fff',
              paddingTop: '20px',
              position: 'fixed',
              top: '60px', // offset for TopNav height
              left: 0,
              height: '100%',
              zIndex: 1000,
            }}
          >
            <h2 style={{ color: '#61dafb', marginLeft: '20px' }}>Dashboard</h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
              {services.map((svc, index) => {
                const isActive = location.pathname === svc.path;
                return (
                  <Link
                    key={index}
                    to={svc.path}
                    onClick={() => windowWidth < 768 && setIsOpen(false)}
                    style={{
                      color: isActive ? '#61dafb' : '#ccc',
                      backgroundColor: isActive ? '#2d2d3a' : 'transparent',
                      padding: '10px 14px',
                      textDecoration: 'none',
                      borderRadius: '6px',
                    }}
                  >
                    {svc.label}
                  </Link>
                );
              })}

              <button
                onClick={handleLogout}
                style={{
                  marginTop: '30px',
                  backgroundColor: '#ff4d4f',
                  color: '#fff',
                  padding: '10px 14px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </nav>
          </div>
        )}

        {/* ☰ Sidebar Toggle Button */}
        {token && (
          <button
            onClick={toggleSidebar}
            style={{
              position: 'fixed',
              top: 70,
              left: isOpen ? 230 : 10,
              background: '#1e1e2f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 12px',
              zIndex: 1100,
            }}
          >
            ☰
          </button>
        )}

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            marginLeft: token && isOpen ? '220px' : '0',
            padding: '30px',
            paddingTop: '80px', // top offset for fixed nav
            background: '#f9f9f9',
            width: '100%',
            minHeight: '100vh',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
