import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import List from '../pages/List';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="signup" element={<SignUp />} />
    <ProtectedRoute path="list" element={<List />} />
    <ProtectedRoute path="search" element={<Search />} />
    <ProtectedRoute path="favorites" element={<Favorites />} />
  </Routes>
);

export default AppRoutes;
