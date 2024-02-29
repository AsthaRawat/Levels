import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = true; 
  
  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
