'use client';

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Service } from '../../types';
import { format } from 'date-fns';
import { Calendar, TimeSlotList } from '../ui/datetime';
import { Company } from '../..';
import { ServicesSummary } from '../ui/datetime/ServicesSummary';
import { formatDuration } from '@/shared/helpers';

interface DateTimeSelectionProps {
  selectedDate: string | null;
  selectedTime: string | null;
  availableTimeSlots: string[];
  onSelectDateTime: (date: string, time: string) => void;
  services: Service[];
  totalDuration: number;
  loading: boolean;
  company?: Company | null;
}

export const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  selectedDate,
  selectedTime,
  availableTimeSlots,
  onSelectDateTime,
  services,
  totalDuration,
  loading,
  company,
}) => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<string | null>(selectedDate);

  const formatDateForApi = React.useCallback((date: Date) => {
    return format(date, 'yyyy-MM-dd');
  }, []);

  // Gerar dias disponíveis (próximos 60 dias) considerando dias de trabalho da empresa
  const generateAvailableDates = (): Date[] => {
    const dates: Date[] = [];
    const today = new Date();
    
    let workingDays: number[] = [];
    if (company?.companyWorkingHours && company.companyWorkingHours.length > 0) {
      workingDays = company.companyWorkingHours.map(wh => wh.dayOfWeek);
    }
    
    // Se não tem horários configurados, retorna vazio
    if (workingDays.length === 0) {
      return dates;
    }
    
    for (let i = 0; i < 60; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayOfWeek = date.getDay();
      
      if (workingDays.includes(dayOfWeek)) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handleDateSelect = (date: Date) => {
    const dateStr = formatDateForApi(date);
    setSelectedCalendarDate(dateStr);
    
    setTimeout(() => {
      onSelectDateTime(dateStr, '');
    }, 0);
  };

  const handleTimeSelect = (time: string) => {
    if (selectedCalendarDate) {
      onSelectDateTime(selectedCalendarDate, time);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      setSelectedCalendarDate(selectedDate);
    }
  }, [selectedDate]);
  
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">Escolha Data e Horário</h2>
        <p className="text-neutral-600 mt-1">
          Selecione quando deseja ser atendido
        </p>
      </div>

      {/* Resumo dos serviços */}
      <ServicesSummary
        services={services}
        totalDuration={totalDuration}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Seleção de Data */}
        <Calendar
          availableDates={availableDates}
          selectedDate={selectedCalendarDate}
          onSelectDate={handleDateSelect}
        />

        {/* Seleção de Horário */}
        <TimeSlotList
          selectedDate={selectedCalendarDate}
          selectedTime={selectedTime}
          availableTimeSlots={availableTimeSlots}
          onSelectTime={handleTimeSelect}
          loading={loading}
        />
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                Horário selecionado
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>
                  <strong>Data:</strong> {new Date(selectedDate).toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p>
                  <strong>Horário:</strong> {selectedTime}
                </p>
                <p>
                  <strong>Duração estimada:</strong> {formatDuration(totalDuration)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};