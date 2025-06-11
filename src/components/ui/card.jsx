'use client';

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border transition-all duration-200';
  
  const variants = {
    default: 'border-gray-200',
    primary: 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-yellow-100',
    secondary: 'border-gray-300 bg-gray-50',
  };
  
  const paddings = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  
  const shadows = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

export default Card;