import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const DownloadCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-mint to-ocean">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to connect with your neighborhood?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of neighbors already using Locrave to build stronger communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" href="/download">
              Download for iOS
            </Button>
            <Button variant="secondary" href="/download">
              Download for Android
            </Button>
          </div>

          <p className="text-white/80 text-sm mt-8">
            Free to download. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
