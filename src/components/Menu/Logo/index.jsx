import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo-white.svg';

const Logo = () => (
  <Link to="/list">
    <img src={logo} alt="Poké List" />
  </Link>
);

export default Logo;
