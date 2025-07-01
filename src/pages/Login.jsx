import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/apiService';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/users/login', { email, password });
      const { token, user } = res;
      login(token, user);
      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 20px' }}>
      <div
        style={{
          maxWidth: '400px',
          margin: '80px auto',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              fontSize: '16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          {error && <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
