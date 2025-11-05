// Versão simplificada - sem employee e payment
export enum BookingStep {
  SERVICE = 'service',
  DATETIME = 'datetime',
  CHECKOUT = 'checkout'
}

export interface BookingStepConfig {
  step: BookingStep;
  title: string;
  description: string;
  component: React.ComponentType<any>;
}