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
  onBlur: null,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default Input;
