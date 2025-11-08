'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function BookingConfirmation() {
  const router = useRouter();

  const handleNewBooking = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-status-success-light rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-status-success-dark" />
          </div>
          
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">
            Agendamento Confirmado!
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            Seu agendamento foi realizado com sucesso. 
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="font-semibold text-neutral-900 mb-3">Próximos Passos</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li className="flex items-start">
              <span className="mr-2 mt-0.5">✓</span>
              <span>Chegue com antecedência para o atendimento</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5">✓</span>
              <span>Em caso de cancelamento, entre em contato com antecedência</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleNewBooking}
            className="flex-1 px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium"
          >
            Fazer Novo Agendamento
          </button>
        </div>
      </div>
    </div>
  );
}