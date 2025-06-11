'use client';

import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  name,
  id,
  required = false,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200';
  
  const inputClasses = `${baseClasses} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      name={name}
      id={id}
      required={required}
      {...props}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default InputField;