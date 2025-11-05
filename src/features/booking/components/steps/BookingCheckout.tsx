'use client';

import React from 'react';
import { BookingData, ClientInfo, Company } from '../../types';
import { BookingSummary, ClientFormWithValidation } from '../ui/checkout';

interface BookingCheckoutProps {
  bookingData: BookingData;
  company: Company;
  totalPrice: number;
  totalDuration: number;
  onSetClientInfo: (info: ClientInfo) => void;
  onConfirmBooking: () => Promise<boolean>;
  loading: boolean;
}

export const BookingCheckout: React.FC<BookingCheckoutProps> = ({
  bookingData,
  company,
  totalPrice,
  totalDuration,
  onSetClientInfo,
  onConfirmBooking,
  loading,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">Confirmação do Agendamento</h2>
        <p className="mt-1 text-neutral-600">
          Revise os dados e confirme seu agendamento com {company.name}.
        </p>
      </div>

      <BookingSummary
        bookingData={bookingData}
        totalPrice={totalPrice}
        totalDuration={totalDuration}
      />

      <ClientFormWithValidation
        initialClientInfo={bookingData.clientInfo || undefined}
        onSetClientInfo={onSetClientInfo}
        onConfirmBooking={onConfirmBooking}
        loading={loading}
      />

      <div className="text-center text-sm text-neutral-500">
        <p>Ao confirmar, você concorda com nossos termos de serviço.</p>
        <p>Você receberá uma confirmação por e-mail com os detalhes do agendamento.</p>
      </div>
    </div>
  );
};