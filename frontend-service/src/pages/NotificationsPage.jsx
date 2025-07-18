import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const NotificationsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/notifications')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load notifications' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Notification Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NotificationsPage;
