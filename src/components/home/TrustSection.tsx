import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { staggerContainer, staggerItem } from '../../constants/animations';

export const TrustSection = () => {
  const stats = [
    { value: 10000, suffix: '+', label: 'Active Users' },
    { value: 500, suffix: '+', label: 'Communities' },
    { value: 50000, suffix: '+', label: 'Connections Made' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  ];

  const trustPoints = [
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data stays local. End-to-end encryption for all messages.',
    },
    {
      icon: '✓',
      title: 'Verified Users',
      description: 'Location-verified community members ensure authentic local connections.',
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      description: 'Built with security in mind. Report inappropriate content instantly.',
    },
    {
      icon: '🤝',
      title: 'Community Moderated',
      description: 'Local moderators keep your neighborhood feed helpful and respectful.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built on trust and{' '}
            <span className="text-gradient">community values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety and privacy are our top priorities
          </p>
        </AnimatedSection>

        {/* Animated Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {trustPoints.map((point, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card hover className="h-full text-center">
                <motion.div 
                  className="text-5xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
