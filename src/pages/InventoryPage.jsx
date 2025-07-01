import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const InventoryPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/inventory')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load inventory' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Inventory Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default InventoryPage;
