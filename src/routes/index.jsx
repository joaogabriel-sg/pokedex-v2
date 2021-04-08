import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="home" element={<Home />} />
  </Routes>
);

export default AppRoutes;
