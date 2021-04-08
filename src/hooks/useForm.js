import { useState } from 'react';

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email address!',
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:
      'The password must contain at least eight characters, at least one letter and one number!',
  },
};

const useForm = (type = false) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Fill in the field');
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
