import React from 'react';
import PropTypes from 'prop-types';

import { Button, Line } from './styles';

const BtnMenuMobile = ({ active, setActive }) => (
  <Button
    className={active ? 'active' : ''}
    onClick={() => setActive((oldActive) => !oldActive)}
  >
    <Line />
    <Line />
    <Line />
  </Button>
);

BtnMenuMobile.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default BtnMenuMobile;
