import { Footer } from '@/shared/components/layout/Footer';
import {
  HeaderLandingPage,
  HeroSection,
  FeaturesSection,
  MobileAppsSection,
  SocialProofSection,
  FinalCTASection
} from '@/features/main-landing/components';

export default function MainLandingPage() {
  return (
    <main className="min-h-screen">
      <HeaderLandingPage />
      <HeroSection />
      <FeaturesSection />
      <MobileAppsSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}