import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const ReviewsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/reviews')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load reviews' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Review Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ReviewsPage;
