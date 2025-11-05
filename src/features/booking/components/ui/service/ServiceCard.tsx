import React from 'react';
import { Check } from 'lucide-react';
import { formatPrice } from '@/shared/helpers';

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    description?: string;
    price: number;
    duration: number;
  };
  selected: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  selected, 
  onToggle, 
  disabled = false 
}) => {
  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    
    if (hours > 0 && minutes > 0) {
      return `${hours}h ${minutes}min`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}min`;
    }
  };

  return (
    <div
      onClick={!disabled ? onToggle : undefined}
      className={`
        relative p-4 border rounded-lg transition-all duration-200 cursor-pointer
        ${selected 
          ? 'border-brand-400 bg-brand-lightest shadow-md' 
          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center">
            <h4 className="font-medium text-text-primary">{service.name}</h4>
            {selected && (
              <div className="ml-2 w-5 h-5 bg-brand-main text-white rounded-full flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
            )}
          </div>
          
          {service.description && (
            <p className="text-text-secondary text-sm mt-1">{service.description}</p>
          )}
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-semibold text-brand-main">
              {formatPrice(service.price)}
            </span>
            <span className="text-sm text-neutral-500">
              {formatDuration(service.duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};