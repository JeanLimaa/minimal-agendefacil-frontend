import React from 'react';
import { Loader2, Check } from 'lucide-react';

interface ConfirmationButtonProps {
  loading: boolean;
  disabled?: boolean;
  onConfirm: () => void;
  text?: string;
  loadingText?: string;
}

export const ConfirmationButton: React.FC<ConfirmationButtonProps> = ({
  loading,
  disabled = false,
  onConfirm,
  text = "Confirmar Agendamento",
  loadingText = "Confirmando Agendamento..."
}) => {
  return (
    <div className="mt-6 pt-6 border-t border-neutral-100">
      <button
        type="button"
        onClick={onConfirm}
        disabled={loading || disabled}
        className="w-full bg-brand-600 text-white py-3 px-4 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-medium"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
            {loadingText}
          </>
        ) : (
          <>
            <Check className="w-5 h-5 mr-2" />
            {text}
          </>
        )}
      </button>
    </div>
  );
};