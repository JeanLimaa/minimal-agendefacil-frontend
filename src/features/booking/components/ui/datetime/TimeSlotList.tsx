import React from 'react';
interface TimeSlotListProps {
  selectedDate: string | null;
  selectedTime: string | null;
  availableTimeSlots: string[];
  onSelectTime: (time: string) => void;
  loading: boolean;
}

export const TimeSlotList: React.FC<TimeSlotListProps> = ({
  selectedDate,
  selectedTime,
  availableTimeSlots,
  onSelectTime,
  loading
}) => {
  return (
    <div>
      <h3 className="font-medium text-neutral-900 mb-4">Escolha o Horário</h3>
      
      {!selectedDate ? (
        <div className="text-center text-neutral-500 max-h-80 flex items-center justify-center">
          <div>
            <p>Primeiro selecione uma data</p>
          </div>
        </div>
      ) : loading ? (
        <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-neutral-200 rounded-lg p-3 h-12"></div>
            </div>
          ))}
        </div>
      ) : !Array.isArray(availableTimeSlots) || availableTimeSlots.length === 0 ? (
        <div className="text-center text-neutral-500 max-h-80 flex items-center justify-center">
          <div>
            <p>Nenhum horário disponível para esta data</p>
            <p className="text-sm mt-1">Tente selecionar outra data</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {availableTimeSlots.map((time) => {
            const isSelected = selectedTime === time;
            
            return (
              <button
                key={time}
                onClick={() => onSelectTime(time)}
                className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className="text-center">
                  <div className={`font-medium ${isSelected ? 'text-brand-700' : 'text-neutral-900'}`}>
                    {time}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};