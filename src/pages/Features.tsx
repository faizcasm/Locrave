import { SEOHead } from '../components/SEO/SEOHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Features = () => {
  const features = [
    {
      icon: '📢',
      title: 'Local Community Feed',
      description: 'Stay informed about what is happening in your neighborhood.',
      benefits: [
        'Real-time updates on local events and news',
        'Community announcements and alerts',
        'Neighborhood discussions and polls',
        'Lost & found posts',
      ],
    },
    {
      icon: '🔧',
      title: 'Local Services Directory',
      description: 'Find trusted professionals in your area.',
      benefits: [
        'Verified local service providers',
        'Reviews and ratings from neighbors',
        'Direct contact with providers',
        'Service categories: plumbing, electrical, tutoring, cleaning, and more',
      ],
    },
    {
      icon: '🛒',
      title: 'Buy & Sell Marketplace',
      description: 'Safe and convenient local commerce.',
      benefits: [
        'Sell items you no longer need',
        'Find great deals nearby',
        'Meet buyers/sellers in your neighborhood',
        'Secure in-app messaging',
      ],
    },
    {
      icon: '🚨',
      title: 'Emergency Help Network',
      description: 'Quick access to help when you need it.',
      benefits: [
        'Emergency contact directory',
        'Community watch alerts',
        'Quick notification system',
        'Support from nearby neighbors',
      ],
    },
    {
      icon: '💬',
      title: 'Real-time Encrypted Chat',
      description: 'Communicate securely with neighbors and service providers.',
      benefits: [
        'End-to-end encryption',
        'Group chats for neighborhood coordination',
        'Media sharing (photos, documents)',
        'Read receipts and typing indicators',
      ],
    },
    {
      icon: '🏘️',
      title: 'Hyper-Local Verification',
      description: 'Ensuring authentic neighborhood connections.',
      benefits: [
        'Location-based verification',
        'Radius-controlled access',
        'Authentic community members only',
        'Privacy-protected verification',
      ],
    },
  ];

  return (
    <>
      <SEOHead 
        title="Features - Locrave"
        description="Discover all the powerful features that make Locrave the best local community app. From community feed to local services and marketplace."
        url="https://locrave.com/features"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Powerful features for{' '}
                <span className="text-gradient">modern neighborhoods</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to stay connected, informed, and engaged with your local community.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card hover className="h-full">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-5xl">{feature.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to experience all these features?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Download Locrave today and start connecting with your neighborhood.
              </p>
              <Button variant="primary" href="/download">
                Download Now
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};
