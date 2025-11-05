import { notFound } from 'next/navigation';
import { getCompanyByLink } from '@/shared/actions/company.actions';
import { CompanyLandingPage } from '@/features/company-landing/components/CompanyLandingPage';

interface CompanyPageProps {
  params: {
    companyLink: string;
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  try {
    const company = await getCompanyByLink(params.companyLink);
    
    if (!company) return notFound();

    return <CompanyLandingPage company={company} />;
  } catch (error) {
    return notFound();
  }
}

export async function generateMetadata({ params }: CompanyPageProps) {
  try {
    const company = await getCompanyByLink(params.companyLink);
    
    return {
      title: `${company.name} - Agende seu horário`,
      description: company.description || `Agende seu horário com ${company.name} de forma rápida e fácil.`,
      openGraph: {
        title: `${company.name} - Agende seu horário`,
        description: company.description || `Agende seu horário com ${company.name} de forma rápida e fácil.`,
        images: company.logo ? [{ url: company.logo }] : [],
      },
    };
  } catch {
    return {
      title: 'Empresa não encontrada',
      description: 'A empresa solicitada não foi encontrada.',
    };
  }
}