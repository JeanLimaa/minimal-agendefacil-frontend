'use client';

import React from 'react';
import { Company } from '../types';
import { useBooking } from '../hooks/useBooking';
import { ServiceSelection } from './steps/ServiceSelection';
import { DateTimeSelection } from './steps/DateTimeSelection';
import { BookingCheckout } from './steps/BookingCheckout';
import { StepIndicator } from './StepIndicator';
import { BookingHeader } from './BookingHeader';
import { BookingStep } from '../types';

interface BookingFlowProps {
  company: Company;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({ company }) => {
  const booking = useBooking(company);
  const buttonLoading = Object.values(booking.loading).some(value => value);

  const renderCurrentStep = () => {
    switch (booking.currentStep) {
      case BookingStep.SERVICE:
        return (
          <ServiceSelection
            services={booking.availableServices}
            selectedServices={booking.bookingData.services}
            onToggleService={booking.toggleService}
            loading={booking.loading.services}
          />
        );
      case BookingStep.DATETIME:
        return (
          <DateTimeSelection
            selectedDate={booking.bookingData.selectedDate}
            selectedTime={booking.bookingData.selectedTime}
            availableTimeSlots={booking.availableTimeSlots}
            onSelectDateTime={booking.selectDateTime}
            services={booking.bookingData.services}
            totalDuration={booking.totalDuration}
            loading={booking.loading.timeSlots}
            company={booking.company}
          />
        );
      case BookingStep.CHECKOUT:
        return (
          <BookingCheckout
            bookingData={booking.bookingData}
            company={booking.company!}
            totalPrice={booking.totalPrice}
            totalDuration={booking.totalDuration}
            onSetClientInfo={booking.setClientInfo}
            onConfirmBooking={booking.confirmBooking}
            loading={booking.loading.booking}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <BookingHeader company={booking.company!} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <StepIndicator
          currentStep={booking.currentStep}
          currentStepIndex={booking.currentStepIndex}
          bookingData={booking.bookingData}
        />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {renderCurrentStep()}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={booking.prevStep}
            disabled={booking.currentStepIndex === 0}
            className="px-6 py-2 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Voltar
          </button>
          
          {booking.currentStep !== BookingStep.CHECKOUT && (
            <button
              onClick={booking.nextStep}
              disabled={!booking.canProceedToNextStep || buttonLoading}
              className="px-6 py-2 bg-brand-main text-white rounded-md hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {buttonLoading ? 'Carregando...' : 'Próximo'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};