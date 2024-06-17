// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, redirige a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  // Si hay token, renderiza los componentes hijos
  return children;
};

export default ProtectedRoute;
