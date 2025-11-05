import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ClientInfo } from '../../../types';
import { clientInfoSchema } from '../../../schemas';
import { z } from 'zod';

interface ClientFormWithValidationProps {
  initialClientInfo?: ClientInfo;
  onSetClientInfo: (info: ClientInfo) => void;
  onConfirmBooking: () => Promise<boolean>;
  loading: boolean;
}

export const ClientFormWithValidation: React.FC<ClientFormWithValidationProps> = ({
  initialClientInfo,
  onSetClientInfo,
  onConfirmBooking,
  loading
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [clientInfo, setClientInfo] = useState<ClientInfo>(
    initialClientInfo || { name: '', email: '', phone: '', notes: '' }
  );

  const validateForm = () => {
    try {
      clientInfoSchema.parse(clientInfo);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleInputChange = (field: keyof ClientInfo, value: string) => {
    const newClientInfo = {
      ...clientInfo,
      [field]: value
    };
    
    setClientInfo(newClientInfo);
    onSetClientInfo(newClientInfo);

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handlePhoneChange = (value: string) => {
    // Format phone number as user types
    const numbers = value.replace(/\D/g, '');
    let formatted = numbers;

    if (numbers.length >= 2) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length >= 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }

    handleInputChange('phone', formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      await onConfirmBooking();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-lg p-6">
      <h3 className="font-medium text-neutral-900 mb-4">Seus Dados</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            value={clientInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.name ? 'border-status-error-light' : 'border-neutral-300'
            }`}
            placeholder="Digite seu nome completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-status-error-dark">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={clientInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.email ? 'border-status-error-light' : 'border-neutral-300'
            }`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-status-error-dark">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            value={clientInfo.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.phone ? 'border-status-error-light' : 'border-neutral-300'
            }`}
            placeholder="(11) 99999-9999"
            maxLength={15}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-status-error-dark">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
            Observações (opcional)
          </label>
          <textarea
            id="notes"
            value={clientInfo.notes || ''}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            placeholder="Alguma observação especial sobre o atendimento..."
          />
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-100">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 text-white py-3 px-4 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Confirmando Agendamento...
            </>
          ) : (
            'Confirmar Agendamento'
          )}
        </button>
      </div>
    </form>
  );
};