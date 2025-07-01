# eCommerce Frontend

React-based frontend for a microservices-driven eCommerce application with end-user and admin portals.

- Backend: 11 Java microservices
- Authentication: AWS Cognito
- API Routing: AWS API Gateway







ecommerce-frontend-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/              # Optional product banners, logo, etc.
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── common/
│   │   │   ├── Loader.jsx
│   │   │   ├── Notification.jsx
│   │   │   └── DiscountBanner.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductGrid.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Cart/
│   │   │   └── CartPage.jsx
│   │   ├── Discounts/
│   │   │   └── DiscountsPage.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Notifications/
│   │   │   └── NotificationBar.jsx
│   │   ├── Orders/
│   │   │   └── OrdersPage.jsx
│   │   ├── Payments/
│   │   │   └── CheckoutPage.jsx
│   │   ├── Products/
│   │   │   ├── ProductList.jsx
│   │   │   └── ProductDetail.jsx
│   │   ├── Profile/
│   │   │   └── Profile.jsx
│   │   ├── Reviews/
│   │   │   └── AddReview.jsx
│   │   ├── Search/
│   │   │   └── SearchResults.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoutes.jsx
│   ├── services/
│   │   ├── adminService.js
│   │   ├── cartService.js
│   │   ├── discountService.js
│   │   ├── inventoryService.js
│   │   ├── notificationService.js
│   │   ├── orderService.js
│   │   ├── paymentService.js
│   │   ├── productService.js
│   │   ├── reviewService.js
│   │   ├── searchService.js
│   │   └── userService.js
│   ├── utils/
│   │   └── auth.js
│   ├── App.jsx
│   ├── axiosInstance.js
│   ├── config.js
│   └── index.js
├── .env
├── package.json
└── README.md
