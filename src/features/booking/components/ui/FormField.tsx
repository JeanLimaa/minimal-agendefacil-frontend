import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  error, 
  required = false, 
  children 
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-status-error ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-status-error-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};