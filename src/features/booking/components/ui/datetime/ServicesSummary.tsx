import React from 'react';
import { Service } from '../../../types';
import { formatPrice } from '@/shared/helpers/currency';
import { formatDuration } from '@/shared/helpers/time.helper';

interface ServicesSummaryProps {
  services: Service[];
  totalDuration: number;
}

export const ServicesSummary: React.FC<ServicesSummaryProps> = ({
  services,
  totalDuration
}) => {
  return (
    <div className="bg-neutral-50 rounded-lg p-4">
      <h3 className="font-medium text-neutral-900 mb-3">Serviços Selecionados</h3>
      <div className="space-y-2">
        {services.map((service) => (
          <div key={service.id} className="flex justify-between items-center text-sm">
            <span className="text-neutral-700">{service.name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-500">{formatDuration(service.duration)}</span>
              <span className="text-neutral-900 font-medium">{formatPrice(service.price)}</span>
            </div>
          </div>
        ))}
        <div className="border-t border-neutral-200 pt-2 mt-3">
          <div className="flex justify-between items-center font-medium">
            <span className="text-neutral-900">Duração Total</span>
            <span className="text-neutral-900">{formatDuration(totalDuration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};