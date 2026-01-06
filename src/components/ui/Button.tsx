import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-block';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-ocean text-white hover:shadow-lg',
    secondary: 'bg-mint text-white hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionComponent>
  );
};
