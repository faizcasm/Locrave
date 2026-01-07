import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-20 h-20">
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 rounded-full"
        />
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};
