import { ClientInfo, Service } from "..";

export interface TimeSlot {
  time: string;
  available: boolean;
}

// Versão simplificada - sem employee, payment, categories
export interface BookingData {
  services: Service[];
  selectedDate: string | null;
  selectedTime: string | null;
  clientInfo: ClientInfo | null;
}

export * from './service.interface';
export * from './appointment.types';
export * from '@/shared/types/company.types';
export * from './client.interface';
export * from './bookingStep.interface';
export * from './MePayload.interface';
export * from './working-hours.interface';