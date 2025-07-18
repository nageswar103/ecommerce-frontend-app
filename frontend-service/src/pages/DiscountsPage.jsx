import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const DiscountsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/discounts')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load discounts' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Discount Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DiscountsPage;
