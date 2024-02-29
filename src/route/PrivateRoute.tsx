import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectTo: string;
  path: string;
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectTo,
  path,
  element
}) => {
  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to={redirectTo} replace />}
    />
  );
};

export default PrivateRoute;
