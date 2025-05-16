import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, type = 'button', href }) => {
  const baseClasses = `inline-block px-6 py-3 rounded-lg bg-[#0099ff] text-white font-semibold hover:bg-[#007acc] transition-colors duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;
