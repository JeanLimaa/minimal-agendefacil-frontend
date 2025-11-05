import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon,
  action 
}) => {
  return (
    <div className="text-center py-12">
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h2>
      <p className="text-neutral-600 mb-6">{description}</p>
      {action && action}
    </div>
  );
};