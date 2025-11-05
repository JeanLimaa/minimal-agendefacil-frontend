import { BookingStep } from '../types';

export const BOOKING_STEPS = [
  BookingStep.SERVICE,
  BookingStep.DATETIME,
  BookingStep.CHECKOUT
];

export const STEP_TITLES = {
  [BookingStep.SERVICE]: 'Escolha os Serviços',
  [BookingStep.DATETIME]: 'Escolha Data e Horário',
  [BookingStep.CHECKOUT]: 'Confirmar Agendamento'
};

export const STEP_DESCRIPTIONS = {
  [BookingStep.SERVICE]: 'Selecione os serviços que deseja agendar',
  [BookingStep.DATETIME]: 'Escolha a data e horário para seu atendimento',
  [BookingStep.CHECKOUT]: 'Revise os dados do seu agendamento e confirme'
};

export const MIN_APPOINTMENT_ADVANCE_MINUTES = 30; // Mínimo de 30 minutos de antecedência
export const MAX_BOOKING_DAYS_AHEAD = 60; // Máximo de 60 dias para agendamento