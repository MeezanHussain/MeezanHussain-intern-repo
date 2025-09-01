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
  // Base button classes with enhanced effects
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden backdrop-blur-sm';
  
  // Variant classes with vibrant colors and effects
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500 border border-cyan-400/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 active:from-purple-600 active:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 focus:ring-purple-500 border border-purple-400/50',
    success: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 active:from-emerald-600 active:to-green-700 text-white shadow-lg hover:shadow-emerald-500/25 focus:ring-emerald-500 border border-emerald-400/50',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 active:from-red-600 active:to-rose-700 text-white shadow-lg hover:shadow-red-500/25 focus:ring-red-500 border border-red-400/50',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 active:from-amber-600 active:to-orange-700 text-white shadow-lg hover:shadow-amber-500/25 focus:ring-amber-500 border border-amber-400/50',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white active:bg-cyan-600 focus:ring-cyan-500 bg-transparent backdrop-blur-sm',
    ghost: 'text-cyan-400 hover:bg-cyan-500/10 active:bg-cyan-500/20 focus:ring-cyan-500 bg-transparent backdrop-blur-sm border border-cyan-500/30',
    neon: 'btn-neon text-cyan-400 hover:text-white'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    xlarge: 'px-8 py-4 text-xl'
  };
  
  // Hover and active state classes with enhanced effects
  const interactiveClasses = 'hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-xl';
  
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
