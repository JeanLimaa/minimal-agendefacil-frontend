import React from 'react';
import { X } from 'lucide-react';
import { formatDuration, formatPrice } from '@/shared/helpers';

interface SelectedServicesSummaryProps {
  selectedServices: Array<{
    id: number;
    name: string;
    price: number;
    duration: number;
  }>;
  totalPrice: number;
  totalDuration: number;
  onRemoveService?: (serviceId: number) => void;
  showRemoveButton?: boolean;
}

export const SelectedServicesSummary: React.FC<SelectedServicesSummaryProps> = ({
  selectedServices,
  totalPrice,
  totalDuration,
  onRemoveService,
  showRemoveButton = false
}) => {
  if (selectedServices.length === 0) {
    return null;
  }

  return (
    <div className="bg-brand-lightest border border-brand-light rounded-lg p-4">
      <h4 className="font-medium text-text-primary mb-3">
        Serviços Selecionados ({selectedServices.length})
      </h4>
      
      <div className="space-y-2 mb-4">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex items-center justify-between bg-white rounded-md p-3 shadow-sm">
            <div className="flex-1">
              <h5 className="font-medium text-text-primary">{service.name}</h5>
              <p className="text-sm text-neutral-500">{formatDuration(service.duration)}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium text-text-primary">
                {formatPrice(service.price)}
              </span>
              {showRemoveButton && onRemoveService && (
                <button
                  onClick={() => onRemoveService(service.id)}
                  className="text-status-error-dark hover:text-status-error-foreground p-1"
                  title="Remover serviço"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-light pt-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-base font-medium text-text-primary">Total:</span>
            <span className="text-sm text-brand-main ml-2">
              ({formatDuration(totalDuration)})
            </span>
          </div>
          <span className="text-lg font-bold text-brand-main">
            {formatPrice(totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};