import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const DownloadCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-mint to-ocean relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(77, 182, 172, 0.3) 0%, rgba(129, 199, 132, 0.3) 50%, rgba(79, 195, 247, 0.3) 100%)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to connect with your neighborhood?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of neighbors already using Locrave to build stronger communities.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button variant="secondary" href="/download">
                📱 Download for iOS
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button variant="secondary" href="/download">
                🤖 Download for Android
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-white/80 text-sm">
              Free to download. No credit card required.
            </p>
            
            {/* Trust badges */}
            <motion.div 
              className="flex items-center justify-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span>⭐</span>
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span>🔒</span>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span>✓</span>
                <span>Verified Community</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
