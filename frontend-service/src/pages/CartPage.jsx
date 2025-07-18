import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const CartPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/cart')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load cart' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cart Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CartPage;
