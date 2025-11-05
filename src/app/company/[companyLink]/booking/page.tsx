import { notFound } from 'next/navigation';
import { BookingFlow } from '@/features/booking/components/BookingFlow';
import { getCompanyByLink } from '@/shared/actions/company.actions';

interface PageProps {
  params: {
    companyLink: string;
  };
}

export default async function BookingPage({ params }: PageProps) {
  try {
    const company = await getCompanyByLink(params.companyLink);
    if (!company) return notFound();
    
    return <BookingFlow company={company} />;
  } catch {
    return notFound();
  }
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const company = await getCompanyByLink(params.companyLink);
    
    return {
      title: `Agendamento - ${company.name}`,
      description: `Agende seu horário na ${company.name} de forma fácil e rápida`,
    };
  } catch {
    return {
      title: 'Agendamento não encontrado',
      description: 'A empresa que você está procurando não foi encontrada',
    };
  }
}