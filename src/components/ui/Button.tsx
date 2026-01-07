import { motion } from 'framer-motion';
import { ReactNode, useState, useRef, useEffect } from 'react';

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
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const rippleIdCounter = useRef(0);
  const timeoutRefs = useRef<Set<number>>(new Set());
  
  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-block relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-secondary text-white hover:shadow-lg hover:shadow-secondary/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  useEffect(() => {
    // Cleanup all timeouts on unmount
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current.clear();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) onClick();

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Use incrementing counter for unique IDs
    rippleIdCounter.current += 1;
    const newRipple = { x, y, id: rippleIdCounter.current };
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    const timeout = setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      timeoutRefs.current.delete(timeout);
    }, 600);
    timeoutRefs.current.add(timeout);
  };

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={handleClick}
      className={classes}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </MotionComponent>
  );
};
