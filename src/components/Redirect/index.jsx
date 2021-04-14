import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const Redirect = ({ children, to }) => <Button to={to}>{children}</Button>;

Redirect.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Redirect;
