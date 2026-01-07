import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { staggerContainer, staggerItem } from '../../constants/animations';

export const Features = () => {
  const features = [
    {
      icon: '📢',
      title: 'Local Community Feed',
      description: 'Stay updated with neighborhood news, events, and important announcements from your community.',
    },
    {
      icon: '🔧',
      title: 'Trusted Services',
      description: 'Find and hire verified local professionals—plumbers, electricians, tutors, and more.',
    },
    {
      icon: '🛒',
      title: 'Buy & Sell Locally',
      description: 'Safe marketplace for buying and selling items with neighbors you can trust.',
    },
    {
      icon: '🚨',
      title: 'Emergency Help',
      description: 'Quick access to emergency contacts and community support when you need it most.',
    },
    {
      icon: '💬',
      title: 'Secure Chat',
      description: 'End-to-end encrypted messaging to connect with neighbors and service providers.',
    },
    {
      icon: '🏘️',
      title: 'Hyper-Local Radius',
      description: 'Verified location-based access ensures you connect only with your immediate neighborhood.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need for a{' '}
            <span className="text-gradient">connected neighborhood</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Locrave brings your community together with powerful features designed for local connection.
          </p>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card hover hover3D className="h-full">
                <motion.div 
                  className="text-5xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
