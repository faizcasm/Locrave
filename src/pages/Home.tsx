import { SEOHead } from '../components/SEO/SEOHead';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { HowItWorks } from '../components/home/HowItWorks';
import { TrustSection } from '../components/home/TrustSection';
import { DownloadCTA } from '../components/home/DownloadCTA';

export const Home = () => {
  return (
    <>
      <SEOHead 
        title="Locrave - Your Local Community App"
        description="Your local community, connected. Find services, buy & sell locally, and connect with neighbors."
        url="https://locrave.com/"
      />
      <Hero />
      <Features />
      <HowItWorks />
      <TrustSection />
      <DownloadCTA />
    </>
  );
};
