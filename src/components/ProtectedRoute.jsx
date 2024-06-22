

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/" replace={true} /> // Redirige al inicio de sesión si no está autenticado
  );
};

export default ProtectedRoute;
