import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '@/features/booking/types';

interface ServicesListProps {
  services: Service[];
  selectedServices: Array<{ id: number }>;
  onToggleService: (service: any) => void;
  canSelectService: (service: any) => boolean;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  services,
  selectedServices,
  onToggleService,
  canSelectService
}) => {
  const isServiceSelected = (service: any) => {
    return selectedServices.some(s => s.id === service.id);
  };

  return (
    <div className="space-y-6">
      {services.map((service) => (
          <div key={service.id} className="space-y-3">
                <div className="relative">
                  <ServiceCard
                    service={service}
                    selected={isServiceSelected(service)}
                    onToggle={() => onToggleService(service)}
                    disabled={!canSelectService(service) && !isServiceSelected(service)}
                  />
                </div>
          </div>
      ))}
    </div>
  );
};