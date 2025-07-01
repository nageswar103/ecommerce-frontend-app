import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const UsersPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load users' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UsersPage;
