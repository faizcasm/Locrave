import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #4DB6AC 0%, transparent 70%)' }}
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
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #81C784 0%, transparent 70%)' }}
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
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #4FC3F7 0%, transparent 70%)',
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stay connected with your{' '}
              <span className="text-gradient">local community</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Your neighborhood, digitally connected. Find trusted services, buy & sell locally, 
              and stay informed about what matters most—right where you live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" href="/download">
                Download Now
              </Button>
              <Button variant="outline" href="/features">
                Explore Features
              </Button>
            </div>

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

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 h-[500px] glass rounded-[3rem] p-4 shadow-2xl">
              <div className="w-full h-full gradient-bg rounded-[2.5rem] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-sm opacity-90">App Screenshot</p>
                  <p className="text-xs opacity-75 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-semibold text-gray-700">🔔 New Alert</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-sm font-semibold text-gray-700">💬 3 Messages</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
