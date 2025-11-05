import { WorkingHours } from '@/features/booking/types';

/**
 * Mapeia números dos dias da semana para nomes em português
 */
const DAYS_OF_WEEK = {
  1: 'Segunda-feira',
  2: 'Terça-feira', 
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado',
  0: 'Domingo'
} as const;

/**
 * Formatar horários de funcionamento para exibição
 */
export function formatWorkingHours(workingHours: WorkingHours[]): string {
  if (!workingHours || workingHours.length === 0) {
    return 'Horários não informados';
  }

  // Agrupar horários consecutivos com mesmo horário
  const groupedHours = workingHours
    .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
    .reduce((acc, hour) => {
      const timeRange = `${hour.startTime} - ${hour.endTime}`;
      
      if (!acc[timeRange]) {
        acc[timeRange] = [];
      }
      
      acc[timeRange].push(hour.dayOfWeek);
      return acc;
    }, {} as Record<string, number[]>);

  // Formatar cada grupo
  return Object.entries(groupedHours)
    .map(([timeRange, days]) => {
      if (days.length === 1) {
        return `${DAYS_OF_WEEK[days[0] as keyof typeof DAYS_OF_WEEK]}: ${timeRange}`;
      }
      
      // Verificar se são dias consecutivos
      const sortedDays = days.sort((a, b) => a - b);
      const isConsecutive = sortedDays.every((day, index) => 
        index === 0 || day === sortedDays[index - 1] + 1
      );
      
      if (isConsecutive && sortedDays.length > 2) {
        const firstDay = DAYS_OF_WEEK[sortedDays[0] as keyof typeof DAYS_OF_WEEK];
        const lastDay = DAYS_OF_WEEK[sortedDays[sortedDays.length - 1] as keyof typeof DAYS_OF_WEEK];
        return `${firstDay} - ${lastDay}: ${timeRange}`;
      }
      
      // Listar todos os dias
      const dayNames = sortedDays.map(day => DAYS_OF_WEEK[day as keyof typeof DAYS_OF_WEEK]);
      return `${dayNames.join(', ')}: ${timeRange}`;
    })
    .join('\n');
}

/**
 * Formatar endereço completo para exibição
 */
export function formatAddress(address: {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode?: string;
}): string {
  const parts = [
    `${address.street}, ${address.number}`,
    address.neighborhood,
    `${address.city} - ${address.state}`
  ];
  
  if (address.zipCode) {
    parts.push(`CEP: ${address.zipCode}`);
  }
  
  return parts.join(', ');
}

/**
 * Gerar URL do Google Maps para o endereço
 */
export function getGoogleMapsUrl(address: {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}): string {
  const fullAddress = `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
}

/**
 * Gerar URL de embed do Google Maps
 */
export function getGoogleMapsEmbedUrl(address: {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}): string {
  const fullAddress = `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}`;
  return `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(fullAddress)}`;
}