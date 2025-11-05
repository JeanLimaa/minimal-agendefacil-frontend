import Image from 'next/image';
import Link from 'next/link';
import { Company } from '@/features/booking/types';
import { ArrowRight, Building } from 'lucide-react';

interface CompanyHeroProps {
  company: Company;
  bookingLink: string;
}

export function CompanyHero({ company, bookingLink }: CompanyHeroProps) {
  return (
    <section className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex-1 text-center lg:text-left max-w-lg lg:max-w-none">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              {company.logo && (
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-neutral-100 border-2 border-brand-200">
                  <Image
                    src={company.logo}
                    alt={`Logo ${company.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                  {company.name}
                </h1>
              </div>
            </div>
            
            {company.description && (
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {company.description}
              </p>
            )}

            {/* CTA Button */}
            <Link
              prefetch
              href={bookingLink}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Agendar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-50 to-brand-100 border">
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-brand-200">
                      <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-600">{company.name}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}