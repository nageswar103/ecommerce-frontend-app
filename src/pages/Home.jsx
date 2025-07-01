import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const services = [
  { label: 'User Service', path: '/users' },
  { label: 'Product Service', path: '/products' },
  { label: 'Order Service', path: '/orders' },
  { label: 'Cart Service', path: '/cart' },
  { label: 'Payment Service', path: '/payments' },
  { label: 'Inventory Service', path: '/inventory' },
  { label: 'Notification Service', path: '/notifications' },
  { label: 'Review Service', path: '/reviews' },
  { label: 'Discount Service', path: '/discounts' },
  { label: 'Search Service', path: '/search' },
];

const Home = () => {
  const { token } = useAuth();

  return (
    <div
      style={{
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '48px', color: '#222' }}>
        <span role="img" aria-label="bag">🛍️</span> Welcome to <strong>eCommerce</strong>
      </h1>
      <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
        Your microservices-powered admin dashboard
      </p>

      {token ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {services.map((svc, idx) => (
            <Link
              key={idx}
              to={svc.path}
              style={{
                padding: '12px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '16px',
                minWidth: '180px',
              }}
            >
              {svc.label}
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: '40px', color: '#888' }}>
          <p>Please <Link to="/login" style={{ color: '#007bff', textDecoration: 'underline' }}>log in</Link> to access the services.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
