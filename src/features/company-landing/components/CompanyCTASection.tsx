import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CompanyCTASectionProps {
  bookingLink: string;
}

export function CompanyCTASection({ bookingLink }: CompanyCTASectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-brand-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Pronto para agendar seu horário?
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-brand-100 max-w-2xl mx-auto">
          Agende de forma rápida e fácil através da nossa plataforma online.
        </p>
        <Link
          prefetch
          href={bookingLink}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Agendar Agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}