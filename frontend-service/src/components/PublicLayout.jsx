// src/components/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

const PublicLayout = () => (
  <div>
    <TopNav />
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Outlet />
    </div>
  </div>
);

export default PublicLayout;
