import React from 'react';

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  className = '',
  ...props 
}) {
  // Base button classes
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md hover:shadow-lg focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white shadow-md hover:shadow-lg focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-md hover:shadow-lg focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-md hover:shadow-lg focus:ring-red-500',
    warning: 'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-white shadow-md hover:shadow-lg focus:ring-yellow-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    xlarge: 'px-8 py-4 text-xl'
  };
  
  // Hover and active state classes
  const interactiveClasses = 'hover:-translate-y-0.5 active:translate-y-0 active:scale-95';
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${!disabled ? interactiveClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
