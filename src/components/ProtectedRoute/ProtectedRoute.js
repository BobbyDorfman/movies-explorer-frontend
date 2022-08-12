import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({loggedIn, children}) => {
  return loggedIn ? children : <Navigate to="/"/>;
};

export default ProtectedRoute;
