import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEO/SEOHead';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="404 - Page Not Found | Locrave"
        description="The page you're looking for doesn't exist. Return to Locrave homepage."
        url="https://locrave.com/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated 404 */}
            <motion.div 
              className="text-9xl font-bold text-gradient mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            >
              404
            </motion.div>

            {/* Icon */}
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1 
              }}
            >
              🏘️
            </motion.div>

            {/* Message */}
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Oops! Page Not Found
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Looks like you've wandered outside your neighborhood. 
              Let's get you back to familiar territory.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/">
                <Button variant="primary">
                  Go Home
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline">
                  Explore Features
                </Button>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm text-gray-600 mb-4">Popular pages:</p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link to="/" className="text-primary hover:underline">
                  Home
                </Link>
                <Link to="/features" className="text-primary hover:underline">
                  Features
                </Link>
                <Link to="/download" className="text-primary hover:underline">
                  Download
                </Link>
                <Link to="/about" className="text-primary hover:underline">
                  About
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
