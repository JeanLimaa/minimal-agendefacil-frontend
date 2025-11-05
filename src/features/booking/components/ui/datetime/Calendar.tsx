import React from 'react';
import { format } from 'date-fns';

interface CalendarProps {
  availableDates: Date[];
  selectedDate: string | null;
  onSelectDate: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  availableDates,
  selectedDate,
  onSelectDate,
}) => {
  const formatDateForApi = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
  };

  return (
    <div>
      <h3 className="font-medium text-neutral-900 mb-4">Escolha o Dia</h3>
      {availableDates.length === 0 ? (
        <div className="text-center py-8 text-neutral-500">
          <p>Nenhuma data disponível</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {availableDates.map((date) => {
            const dateStr = formatDateForApi(date);
            const isSelected = selectedDate === dateStr;
            const isToday = dateStr === formatDateForApi(new Date());
            
            return (
              <button
                key={dateStr}
                onClick={() => onSelectDate(date)}
                className={`p-3 text-sm rounded-lg border transition-all duration-200 relative ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className="text-center">
                  <div className={`font-medium ${
                    isSelected 
                      ? 'text-brand-700' 
                      : 'text-neutral-900'
                  }`}>
                    {date.getDate()}
                  </div>
                  <div className={`text-xs ${
                    isSelected 
                      ? 'text-brand-600' 
                      : 'text-neutral-500'
                  }`}>
                    {date.toLocaleDateString('pt-BR', { month: 'short' })}
                  </div>
                  <div className={`text-xs ${
                    isSelected 
                      ? 'text-brand-600' 
                      : 'text-neutral-500'
                  }`}>
                    {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                  </div>
                  {isToday && (
                    <div className="text-xs text-brand-600 font-medium mt-1">Hoje</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};