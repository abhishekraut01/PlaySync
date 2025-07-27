import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-400 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-accent hover:bg-accent-lighter text-white disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-50 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;