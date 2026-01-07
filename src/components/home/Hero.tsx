import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/Button';
import { ParallaxSection } from '../ui/ParallaxSection';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #F43F5E 100%)',
          backgroundSize: '300% 300%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating Background Elements with Parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, #F43F5E 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                🏘️ Hyper-local community app
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Stay connected with your{' '}
              <span className="text-gradient animate-gradient-shift bg-300%">local community</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your neighborhood, digitally connected. Find trusted services, buy & sell locally, 
              and stay informed about what matters most—right where you live.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button variant="primary" href="/download">
                Download Now
              </Button>
              <Button variant="outline" href="/features">
                Explore Features
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>100% Local</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Safe & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Free to Use</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup with enhanced animations */}
          <ParallaxSection offset={30}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative perspective-1000"
            >
              <motion.div 
                className="relative mx-auto w-64 h-[500px] glass rounded-[3rem] p-4 shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full gradient-bg rounded-[2.5rem] flex items-center justify-center overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  />
                  <div className="text-center text-white relative z-10">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      📱
                    </motion.div>
                    <p className="text-sm opacity-90">App Screenshot</p>
                    <p className="text-xs opacity-75 mt-1">Coming Soon</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements with enhanced animations */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0, x: 20, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  opacity: { delay: 1, duration: 0.5 },
                  scale: { delay: 1, duration: 0.5 },
                  y: { delay: 1.5, duration: 3, repeat: Infinity }
                }}
              >
                <p className="text-sm font-semibold text-gray-700">🔔 New Alert</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: [0, 10, 0] 
                }}
                transition={{ 
                  opacity: { delay: 1.2, duration: 0.5 },
                  scale: { delay: 1.2, duration: 0.5 },
                  y: { delay: 1.7, duration: 4, repeat: Infinity }
                }}
              >
                <p className="text-sm font-semibold text-gray-700">💬 3 Messages</p>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </motion.div>
    </section>
  );
};
