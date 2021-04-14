import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import List from '../pages/List';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import SignUp from '../pages/SignUp';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="list" element={<List />} />
    <Route path="search" element={<Search />} />
    <Route path="favorites" element={<Favorites />} />
  </Routes>
);

export default AppRoutes;
