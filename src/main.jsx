import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/NotFoundPage';
import Products from './Pages/products.jsx';

//? Ini buat path routingnya
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <Products />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Jangan lupa buat router providenya */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
