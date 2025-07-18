import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const ProductsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/products')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load products' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProductsPage;
