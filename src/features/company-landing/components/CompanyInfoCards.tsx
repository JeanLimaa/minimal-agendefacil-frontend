import { Company } from '@/features/booking/types';
import { formatWorkingHours, formatAddress, getGoogleMapsUrl } from '../utils/format.utils';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

interface CompanyInfoCardsProps {
  company: Company;
}

export function CompanyInfoCards({ company }: CompanyInfoCardsProps) {
  const hasAddress = company.companyAddress;
  const formattedAddress = hasAddress ? formatAddress(company.companyAddress!) : 'Endereço não informado';
  const formattedHours = formatWorkingHours(company.companyWorkingHours);
  const mapsUrl = hasAddress ? getGoogleMapsUrl(company.companyAddress!) : '#';

  return (
    <section className="py-12 lg:py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Working Hours Card */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 ml-4">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                {formattedHours.split('\n').map((line, index) => {
                  // Procura pelo padrão "dia: horário" onde horário contém números e dois pontos
                  const match = line.match(/^(.+?):\s*(\d{2}:\d{2}\s*-\s*\d{2}:\d{2})$/);
                  if (match) {
                    const [, day, time] = match;
                    return (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 py-2 border-b border-neutral-100 last:border-0">
                        <span className="font-medium text-neutral-900 text-sm sm:text-base">{day.trim()}</span>
                        <span className="text-neutral-600 text-sm sm:text-base">{time.replace(/(\d{2}:\d{2})/g, '$1h')}</span>
                      </div>
                    );
                  }
                  
                  // Fallback para outros formatos
                  return (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 py-2 border-b border-neutral-100 last:border-0">
                      <span className="font-medium text-neutral-900 text-sm sm:text-base">{line.trim()}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          {/* Contact Card */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center mb-6">
              <div className="bg-status-success-lighter p-3 rounded-lg">
                <Phone className="w-6 h-6 text-status-success-dark" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 ml-4">Contato</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-neutral-700">
                <Phone className="w-5 h-5 text-neutral-400 mr-3" />
                <a 
                  href={`tel:${company.phone}`}
                  className="hover:text-brand-600 transition-colors break-all"
                >
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center text-neutral-700">
                <Mail className="w-5 h-5 text-neutral-400 mr-3" />
                <a 
                  href={`mailto:${company.email}`}
                  className="hover:text-brand-600 transition-colors break-all"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          {hasAddress && (
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border hover:shadow-md transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-status-error-lighter p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-status-error-dark" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 ml-4">Localização</h3>
              </div>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {formattedAddress}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-600 hover:text-brand-800 font-medium transition-colors"
              >
                Ver no Google Maps
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}