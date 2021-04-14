import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement, LinkButtonElement } from './styles';

const Button = ({ children, to, onClick }) => {
  if (to) return <LinkButtonElement to={to}>{children}</LinkButtonElement>;
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};

Button.defaultProps = {
  to: null,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
