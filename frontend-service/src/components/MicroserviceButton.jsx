// src/components/MicroserviceButton.jsx

import React, { useState } from 'react';
import api from '../services/apiService';

const MicroserviceButton = ({ label, endpoint }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setError(null);
    setResponse(null);
    try {
      const data = await api.get(endpoint);
      setResponse(data);
    } catch (err) {
      setError('Failed to fetch from ' + endpoint);
    }
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
        }}
      >
        {label}
      </button>

      {response && (
        <pre
          style={{
            background: '#f9f9f9',
            padding: '10px',
            marginTop: '10px',
            borderRadius: '5px',
            maxHeight: '200px',
            overflowY: 'auto',
            fontSize: '14px',
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default MicroserviceButton;
