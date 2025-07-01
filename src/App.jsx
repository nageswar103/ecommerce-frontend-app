// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import CartPage from './pages/CartPage';
import PaymentsPage from './pages/PaymentsPage';
import InventoryPage from './pages/InventoryPage';
import NotificationsPage from './pages/NotificationsPage';
import ReviewsPage from './pages/ReviewsPage';
import DiscountsPage from './pages/DiscountsPage';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SidebarLayout from './components/SidebarLayout';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import PublicLayout from './components/PublicLayout'; // 🆕

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Routes wrapped with TopNav */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        </Route>

        {/* ✅ Private Routes with Sidebar + TopNav */}
        <Route element={<PrivateRoute><SidebarLayout /></PrivateRoute>}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/discounts" element={<DiscountsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>

        {/* ✅ Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
