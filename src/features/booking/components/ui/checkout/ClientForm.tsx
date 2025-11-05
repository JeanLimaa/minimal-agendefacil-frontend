import React from 'react';
import { FormField } from '../FormField';

interface ClientInfo {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

interface ClientFormProps {
  clientInfo: ClientInfo;
  errors: Record<string, string>;
  onInputChange: (field: keyof ClientInfo, value: string) => void;
  onPhoneChange: (value: string) => void;
  loading?: boolean;
}

export const ClientForm: React.FC<ClientFormProps> = ({
  clientInfo,
  errors,
  onInputChange,
  onPhoneChange,
  loading = false
}) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      <h3 className="font-medium text-neutral-900 mb-4">Seus Dados</h3>
      
      <div className="space-y-4">
        <FormField
          label="Nome Completo"
          required
          error={errors.name}
        >
          <input
            type="text"
            id="name"
            value={clientInfo.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            disabled={loading}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
              errors.name ? 'border-status-error-light' : 'border-neutral-300'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Digite seu nome completo"
          />
        </FormField>

        <FormField
          label="Email"
          required
          error={errors.email}
        >
          <input
            type="email"
            id="email"
            value={clientInfo.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            disabled={loading}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
              errors.email ? 'border-status-error-light' : 'border-neutral-300'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="seu@email.com"
          />
        </FormField>

        <FormField
          label="Telefone"
          required
          error={errors.phone}
        >
          <input
            type="tel"
            id="phone"
            value={clientInfo.phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            disabled={loading}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
              errors.phone ? 'border-status-error-light' : 'border-neutral-300'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="(11) 99999-9999"
            maxLength={15}
          />
        </FormField>

        <FormField
          label="Observações (opcional)"
        >
          <textarea
            id="notes"
            value={clientInfo.notes || ''}
            onChange={(e) => onInputChange('notes', e.target.value)}
            disabled={loading}
            rows={3}
            className={`w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder="Alguma observação especial sobre o atendimento..."
          />
        </FormField>
      </div>
    </div>
  );
};