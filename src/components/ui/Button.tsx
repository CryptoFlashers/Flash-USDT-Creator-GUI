import React from 'react';
import { cn } from '../../utils/styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        'px-4 py-2 rounded-md transition-colors duration-200',
        variant === 'primary' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white border border-gray-300 hover:bg-gray-50',
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
}