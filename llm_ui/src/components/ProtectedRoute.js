// src/components/ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
