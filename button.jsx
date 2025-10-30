import React from 'react';

export function Button({ children, onClick, className = '', variant = 'default' }) {
  const base = 'px-4 py-2 rounded-md focus:outline-none';
  const styles = variant === 'default' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300';
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
