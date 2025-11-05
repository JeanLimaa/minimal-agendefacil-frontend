import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  action,
  className = "space-y-6" 
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
          {description && (
            <p className="text-neutral-600 mt-1">{description}</p>
          )}
        </div>
        {action && (
          <div className="ml-4">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};