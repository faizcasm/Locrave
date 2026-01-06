import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Locrave in three simple steps
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <Card className="h-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
