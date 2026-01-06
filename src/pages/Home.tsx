import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { HowItWorks } from '../components/home/HowItWorks';
import { TrustSection } from '../components/home/TrustSection';
import { DownloadCTA } from '../components/home/DownloadCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TrustSection />
      <DownloadCTA />
    </>
  );
};
