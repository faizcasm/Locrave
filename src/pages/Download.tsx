import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';

export const Download = () => {
  const features = [
    { icon: '🏘️', text: 'Verified local community' },
    { icon: '🔒', text: 'Privacy protected' },
    { icon: '✓', text: 'Trusted by neighbors' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Download{' '}
                <span className="text-gradient">Locrave</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join your neighborhood community today. Connect with neighbors, 
                find trusted services, and stay informed about local happenings.
              </p>

              {/* Download Buttons */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="#" // TODO: Add actual Play Store link
                  className="flex items-center space-x-4 glass p-4 rounded-2xl hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-5xl">📱</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Download on the</p>
                    <p className="text-xl font-bold text-gray-900">Google Play Store</p>
                  </div>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#" // TODO: Add actual App Store link
                  className="flex items-center space-x-4 glass p-4 rounded-2xl hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-5xl">🍎</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Download on the</p>
                    <p className="text-xl font-bold text-gray-900">Apple App Store</p>
                  </div>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Phone Mockup */}
            <AnimatedSection delay={0.3}>
              <div className="relative">
                <motion.div
                  className="relative mx-auto w-64 h-[500px] glass rounded-[3rem] p-4 shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-full h-full gradient-bg rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏘️</div>
                      <p className="text-lg font-semibold">Locrave</p>
                      <p className="text-sm opacity-90 mt-2">Your neighborhood,</p>
                      <p className="text-sm opacity-90">digitally connected</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Feature Cards */}
                <motion.div
                  className="absolute -top-8 -right-8 hidden lg:block"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Card className="w-48">
                    <div className="text-3xl mb-2">📢</div>
                    <p className="text-sm font-semibold text-gray-900">Community Feed</p>
                    <p className="text-xs text-gray-600 mt-1">Stay updated</p>
                  </Card>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 hidden lg:block"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Card className="w-48">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="text-sm font-semibold text-gray-900">Local Services</p>
                    <p className="text-xs text-gray-600 mt-1">Find trusted help</p>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What you get with Locrave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Forever</h3>
                <p className="text-sm text-gray-600">No subscription fees or hidden costs</p>
              </Card>
              <Card className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600">Your data stays local and secure</p>
              </Card>
              <Card className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-sm text-gray-600">Built by neighbors, for neighbors</p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
