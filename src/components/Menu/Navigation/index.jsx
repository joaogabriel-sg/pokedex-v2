import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Menu, Item } from './styles';

const Navigation = ({ activeOnMobile }) => (
  <Nav className={activeOnMobile ? 'active' : ''}>
    <Menu>
      <li>
        <Item to="/list">Poké List</Item>
      </li>
      <li>
        <Item to="/favorites">Poké Favorites</Item>
      </li>
      <li>
        <Item to="/search">Poké Search</Item>
      </li>
    </Menu>
  </Nav>
);

Navigation.propTypes = {
  activeOnMobile: PropTypes.bool.isRequired,
};

export default Navigation;
