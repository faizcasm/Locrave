import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { staggerContainer, staggerItem } from '../../constants/animations';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Download & Verify',
      description: 'Download the app and verify your location to join your neighborhood community.',
    },
    {
      number: '02',
      title: 'Connect & Explore',
      description: 'Browse local posts, discover trusted services, and connect with nearby neighbors.',
    },
    {
      number: '03',
      title: 'Engage & Grow',
      description: 'Post updates, buy & sell items, and help build a stronger local community.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #4DB6AC 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Locrave in three simple steps
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Animated connecting line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-mint to-ocean"
            style={{ transform: 'translateY(-50%)', zIndex: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card hover className="h-full text-center bg-white/90 backdrop-blur-sm">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white font-bold text-2xl mb-6 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2, 
                      type: 'spring', 
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    {/* Animated ring around number */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-primary/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    {step.number}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Arrow indicator (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-3xl text-primary"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      →
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
