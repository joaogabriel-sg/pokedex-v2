import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, element }) => {
  const token = localStorage.getItem('@pokemon:CURRENT_USER_ID');

  if (token) return <Route path={path} element={element} />;
  if (!token) return <Navigate to="/" />;
  return null;
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
