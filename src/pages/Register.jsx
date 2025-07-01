// src/pages/Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/apiService';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await api.post('/users/register', form);

      if (res && res.id) {
        setSuccess('Registration successful! Redirecting...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError('Registration failed. Please check input or try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '10px' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '10px' }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
          Register
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </form>
    </div>
  );
};

export default Register;
