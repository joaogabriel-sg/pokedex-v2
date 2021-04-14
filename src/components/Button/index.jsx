import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement, LinkButtonElement } from './styles';

const Button = ({ children, to, onClick, danger }) => {
  if (to) return <LinkButtonElement to={to}>{children}</LinkButtonElement>;
  return (
    <ButtonElement onClick={onClick} danger={danger}>
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  to: null,
  onClick: null,
  danger: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  danger: PropTypes.bool,
};

export default Button;
