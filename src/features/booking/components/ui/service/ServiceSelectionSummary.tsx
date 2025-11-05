import { formatPrice } from '@/shared/helpers/currency';
import { formatDuration } from '@/shared/helpers/time.helper';
import React from 'react';

interface ServiceSelectionSummaryProps {
  selectedServices: Array<{
    id: number;
    name: string;
    price: number;
    duration: number;
  }>;
  totalPrice: number;
  totalDuration: number;
}

export const ServiceSelectionSummary: React.FC<ServiceSelectionSummaryProps> = ({
  selectedServices,
  totalPrice,
  totalDuration
}) => {
  if (selectedServices.length === 0) {
    return null;
  }

  return (
    <div className="bg-brand-lightest border border-brand-light rounded-lg p-4">
      <h4 className="font-medium text-text-primary mb-3">Resumo dos Serviços Selecionados</h4>
      <div className="space-y-2">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex justify-between items-center text-sm">
            <span className="text-neutral-800">{service.name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-brand-main">{formatDuration(service.duration)}</span>
              <span className="text-text-primary font-medium">{formatPrice(service.price)}</span>
            </div>
          </div>
        ))}
        <div className="border-t border-brand-light pt-2 mt-3">
          <div className="flex justify-between items-center font-medium">
            <span className="text-text-primary">Total</span>
            <div className="flex items-center space-x-2">
              <span className="text-brand-main">{formatDuration(totalDuration)}</span>
              <span className="text-text-primary text-lg">{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};