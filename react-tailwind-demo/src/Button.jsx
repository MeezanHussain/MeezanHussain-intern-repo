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
  // Base button classes with professional styling
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden';
  
  // Variant classes with professional colors and effects
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 active:from-blue-600 active:to-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500 border border-blue-400/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 active:from-purple-600 active:to-purple-700 text-white shadow-md hover:shadow-lg focus:ring-purple-500 border border-purple-400/50',
    success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 active:from-green-600 active:to-green-700 text-white shadow-md hover:shadow-lg focus:ring-green-500 border border-green-400/50',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 active:from-red-600 active:to-red-700 text-white shadow-md hover:shadow-lg focus:ring-red-500 border border-red-400/50',
    warning: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-white shadow-md hover:shadow-lg focus:ring-amber-500 border border-amber-400/50',
    outline: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:ring-blue-500 bg-transparent',
    ghost: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500 bg-transparent border border-gray-300',
    professional: 'btn-professional'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    xlarge: 'px-8 py-4 text-xl'
  };
  
  // Hover and active state classes with professional effects
  const interactiveClasses = 'hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]';
  
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
