// Main components
export { BookingFlow } from './components/BookingFlow';
export { BookingHeader } from './components/BookingHeader';
export { StepIndicator } from './components/StepIndicator';

// Step components
export { ServiceSelection } from './components/steps/ServiceSelection';
export { DateTimeSelection } from './components/steps/DateTimeSelection';
export { BookingCheckout } from './components/steps/BookingCheckout';

// Hooks
export { useBooking } from './hooks/useBooking';

// Types
export type {
  Service,
  BookingData,
  ClientInfo,
  Company,
  TimeSlot,
  BookingStepConfig
} from './types';

export { BookingStep } from './types';

// Constants
export { BOOKING_STEPS } from './constants';