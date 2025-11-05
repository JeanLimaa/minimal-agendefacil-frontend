import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BookingData } from '../../../types';
import { formatPrice } from '@/shared/helpers/currency';
import { formatDuration } from '@/shared/helpers/time.helper';

interface BookingSummaryProps {
  bookingData: BookingData;
  totalPrice: number;
  totalDuration: number;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  bookingData,
  totalPrice,
  totalDuration
}) => {
  const formatDateTime = () => {
    if (!bookingData.selectedDate || !bookingData.selectedTime) return null;
    
    const date = new Date(bookingData.selectedDate);
    return {
      date: date.toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: bookingData.selectedTime
    };
  };

  const dateTime = formatDateTime();

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      <h3 className="font-medium text-neutral-900 mb-4">Resumo do Agendamento</h3>
      
      <div className="space-y-4">
        {/* Data e Horário */}
        {dateTime && (
          <div>
            <div className="flex items-center space-x-2 text-neutral-700">
              <Calendar className="w-5 h-5 text-neutral-400" />
              <span>{dateTime.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-700 mt-1">
              <Clock className="w-5 h-5 text-neutral-400" />
              <span>{dateTime.time} - Duração: {formatDuration(totalDuration)}</span>
            </div>
          </div>
        )}

        {/* Serviços */}
        <div className="border-t border-neutral-100 pt-4">
          <h4 className="font-medium text-neutral-900 mb-3">Serviços</h4>
          <div className="space-y-3">
            {bookingData.services.map((service) => (
              <div key={service.id} className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-neutral-900">{service.name}</div>
                  <div className="text-sm text-neutral-500">{formatDuration(service.duration)}</div>
                </div>
                <div className="text-lg font-medium text-neutral-900">
                  {formatPrice(service.price)}
                </div>
              </div>
            ))}
            
            <div className="border-t border-neutral-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-neutral-900">Total</span>
                <span className="text-xl font-bold text-brand-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};