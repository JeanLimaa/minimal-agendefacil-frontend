import { formatDuration } from '@/shared/helpers/time.helper';
import React from 'react';
import { Check } from 'lucide-react';

interface DateTimeConfirmationProps {
  selectedDate: string;
  selectedTime: string;
  totalDuration: number;
  onConfirm?: () => void;
  showConfirmButton?: boolean;
}

export const DateTimeConfirmation: React.FC<DateTimeConfirmationProps> = ({
  selectedDate,
  selectedTime,
  totalDuration,
  onConfirm,
  showConfirmButton = false
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-status-success-lighter border border-status-success-light rounded-lg p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Check className="h-5 w-5 text-status-success-light" />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-status-success-foreground">
            Data e Horário Confirmados!
          </h3>
          <div className="mt-2 text-sm text-status-success-darker">
            <p>
              <strong>Data:</strong> {formatDate(selectedDate)}
            </p>
            <p>
              <strong>Horário:</strong> {selectedTime}
            </p>
            <p>
              <strong>Duração estimada:</strong> {formatDuration(totalDuration)}
            </p>
          </div>
          
          {showConfirmButton && onConfirm && (
            <div className="mt-4">
              <button
                onClick={onConfirm}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-status-success-dark border border-transparent rounded-md hover:bg-status-success-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-status-success"
              >
                Confirmar Data e Horário
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};