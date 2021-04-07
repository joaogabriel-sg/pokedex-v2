import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InputElement } from './styles';

const Input = ({ type, id, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <InputElement
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
