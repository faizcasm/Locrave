import { SEOHead } from '../components/SEO/SEOHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const About = () => {
  const values = [
    {
      icon: '🤝',
      title: 'Community First',
      description: 'We believe strong communities start at home—your street, your block, your neighborhood. Every feature is designed to bring neighbors closer together.',
    },
    {
      icon: '🔒',
      title: 'Privacy Matters',
      description: 'Your data belongs to you. We use end-to-end encryption and never sell your information. Location verification is privacy-protected and secure.',
    },
    {
      icon: '🛠️',
      title: 'Built to Last',
      description: 'Locrave is built with care, purpose, and sustainability in mind. We are here for the long haul, committed to serving neighborhoods for years to come.',
    },
  ];

  return (
    <>
      <SEOHead 
        title="About - Locrave"
        description="Learn about Locrave's mission to bring neighborhoods together. Discover our values, story, and commitment to building stronger local communities."
        url="https://locrave.com/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-gradient">Locrave</span>
              </h1>
              <p className="text-xl text-gray-600">
                Bringing neighborhoods together, one community at a time
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Strong communities start at home—your street, your block, your neighborhood. 
                  Locrave exists to help neighbors connect, support each other, and build the kind 
                  of communities where everyone feels safe, informed, and involved.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Locrave exists
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-6">
                  In today's digital world, we're more connected than ever—yet many of us don't 
                  know the people living right next door. We created Locrave to change that.
                </p>
                <p className="text-lg mb-6">
                  We believe that strong neighborhoods create safer, happier, and more resilient 
                  communities. When neighbors know each other, they look out for one another. 
                  When local services are easy to find, communities thrive. When people can easily 
                  buy and sell locally, it builds trust and reduces waste.
                </p>
                <p className="text-lg">
                  Locrave is our answer to the question: How can technology bring neighbors closer 
                  together instead of further apart? It's a tool designed to make local connection 
                  easier, safer, and more meaningful.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <Card hover className="h-full text-center">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  How it started
                </h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    Locrave began with a simple observation: despite living in densely populated 
                    neighborhoods, most people barely knew their neighbors. We saw an opportunity 
                    to use technology not to replace human connection, but to enable it.
                  </p>
                  <p>
                    We started small, focusing on what mattered most—helping neighbors communicate, 
                    find trusted local services, and support each other in times of need. The response 
                    was overwhelming. People wanted this. They needed this.
                  </p>
                  <p>
                    Today, Locrave serves neighborhoods across multiple cities, helping thousands of 
                    people connect with their communities every day. But we're just getting started.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-6">
                Join us in building stronger neighborhoods
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Download Locrave and become part of a growing movement of connected communities.
              </p>
              <Button variant="secondary" href="/download">
                Download Now
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};
