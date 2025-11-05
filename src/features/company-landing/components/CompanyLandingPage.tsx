import { Company } from '@/features/booking/types';
import { Footer } from '@/shared/components/layout/Footer';
import { 
  CompanyHero, 
  CompanyInfoCards, 
  CompanyCTASection 
} from './';

interface CompanyLandingPageProps {
  company: Company;
}

export function CompanyLandingPage({ company }: CompanyLandingPageProps) {
  const bookingLink = `/company/${company.link}/booking`;

  return (
    <div className="min-h-screen bg-neutral-50">
      <CompanyHero company={company} bookingLink={bookingLink} />
      <CompanyInfoCards company={company} />
      <CompanyCTASection bookingLink={bookingLink} />
      <Footer />
    </div>
  );
}