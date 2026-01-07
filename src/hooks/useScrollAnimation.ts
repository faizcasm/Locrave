import { useInView } from 'react-intersection-observer';
import { Variants } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  variants?: Variants;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    triggerOnce = true, 
    rootMargin = '0px' 
  } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  });

  return {
    ref,
    inView,
    animate: inView ? 'visible' : 'hidden'
  };
};

export const useStaggerAnimation = (delay: number = 0.1) => {
  return {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay
        }
      }
    }
  };
};
