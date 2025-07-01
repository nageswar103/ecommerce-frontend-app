import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

const SearchPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/search')
      .then(setData)
      .catch(() => setData({ error: 'Failed to load search results' }));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Service</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SearchPage;
