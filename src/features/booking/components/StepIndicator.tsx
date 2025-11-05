'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { BookingStep, BookingData } from '../types';
import { BOOKING_STEPS, STEP_TITLES } from '../constants';

interface StepIndicatorProps {
  currentStep: BookingStep;
  currentStepIndex: number;
  bookingData: BookingData;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStepIndex,
  bookingData
}) => {
  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStepIndex) {
      return 'completed';
    } else if (stepIndex === currentStepIndex) {
      return 'current';
    } else {
      return 'pending';
    }
  };

  const isStepValid = (step: BookingStep) => {
    switch (step) {
      case BookingStep.SERVICE:
        return bookingData.services.length > 0;
      case BookingStep.DATETIME:
        return !!bookingData.selectedDate && !!bookingData.selectedTime;
      case BookingStep.CHECKOUT:
        return !!bookingData.clientInfo;
      default:
        return false;
    }
  };

  const getStepIcon = (stepIndex: number, step: BookingStep) => {
    const status = getStepStatus(stepIndex);
    
    if (status === 'completed' && isStepValid(step)) {
      return (
        <div className="w-8 h-8 bg-status-success text-white rounded-full flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
      );
    } else if (status === 'current') {
      return (
        <div className="w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">{stepIndex + 1}</span>
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 bg-neutral-300 text-neutral-600 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">{stepIndex + 1}</span>
        </div>
      );
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {BOOKING_STEPS.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              {getStepIcon(index, step)}
              <span className={`mt-2 text-xs font-medium ${
                getStepStatus(index) === 'current' 
                  ? 'text-brand-600' 
                  : getStepStatus(index) === 'completed'
                  ? 'text-status-success-dark'
                  : 'text-neutral-500'
              }`}>
                {STEP_TITLES[step]}
              </span>
            </div>
            
            {index < BOOKING_STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                getStepStatus(index) === 'completed'
                  ? 'bg-status-success'
                  : 'bg-neutral-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};