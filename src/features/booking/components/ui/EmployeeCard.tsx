import React from 'react';
import { User, Check } from 'lucide-react';

interface EmployeeCardProps {
  employee: {
    id: number;
    name: string;
    email?: string;
    profileImage?: string;
    specialties?: string[];
    isOnline?: boolean;
  };
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ 
  employee, 
  selected, 
  onSelect, 
  disabled = false 
}) => {
  return (
    <div
      onClick={!disabled ? onSelect : undefined}
      className={`
        relative p-4 border rounded-lg transition-all duration-200 cursor-pointer
        ${selected 
          ? 'border-brand-light bg-brand-lightest shadow-md' 
          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {employee.profileImage ? (
            <img
              src={employee.profileImage}
              alt={employee.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-neutral-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-neutral-600" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-text-primary truncate">{employee.name}</h3>
          {employee.email && (
            <p className="text-sm text-text-secondary truncate">{employee.email}</p>
          )}
          
          {employee.specialties && employee.specialties.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {employee.specialties.slice(0, 2).map((specialty, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs bg-status-info-light text-status-info-foreground rounded-full"
                >
                  {specialty}
                </span>
              ))}
              {employee.specialties.length > 2 && (
                <span className="inline-block px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">
                  +{employee.specialties.length - 2}
                </span>
              )}
            </div>
          )}
          
          {employee.isOnline && (
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-status-success rounded-full mr-2"></div>
              <span className="text-xs text-status-success-dark">Online</span>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <div className="absolute top-2 right-2">
          <div className="w-6 h-6 bg-brand-main text-white rounded-full flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );
};