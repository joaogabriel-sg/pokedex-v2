import React from 'react';
import PropTypes from 'prop-types';

import { InputElement } from './styles';

const Input = ({ type, id, placeholder, value, onChange, onBlur }) => (
  <InputElement
    id={id}
    name={id}
    type={type}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
