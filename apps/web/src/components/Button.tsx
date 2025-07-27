import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = ''
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-400 text-white',
    secondary: 'bg-accent hover:bg-accent-lighter text-white',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-50 hover:text-primary-600'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;