import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const PaymentsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/payments')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load payments' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Payment Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PaymentsPage;
