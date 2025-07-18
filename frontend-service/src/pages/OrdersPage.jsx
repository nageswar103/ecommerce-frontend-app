import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const OrdersPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/orders')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load orders' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Order Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default OrdersPage;
