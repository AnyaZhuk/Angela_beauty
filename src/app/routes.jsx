import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout.jsx';
import MainLayout from '../layout/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import BookingPage from '../pages/BookingPage.jsx';
import ServicesPage from '../pages/ServicesPage.jsx';
import MastersPage from '../pages/MastersPage.jsx';
import PricingPage from '../pages/PricingPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import RequireAuth from '../components/auth/RequireAuth.jsx';

export const routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/booking', element: <BookingPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/masters', element: <MastersPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/contact', element: <ContactPage /> },
      {
        element: <RequireAuth />,
        children: [{ path: '/profile', element: <ProfilePage /> }],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];
