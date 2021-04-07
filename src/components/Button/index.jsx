import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement, LinkButtonElement } from './styles';

const Button = ({ children, to }) => {
  if (to) return <LinkButtonElement to={to}>{children}</LinkButtonElement>;
  return <ButtonElement type="button">{children}</ButtonElement>;
};

Button.defaultProps = {
  to: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;
