import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

export const TrustSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full text-center">
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
