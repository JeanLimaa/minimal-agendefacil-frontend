'use client';

import React from 'react';
import { Company } from '../types';

interface BookingHeaderProps {
  company: Company;
}

export const BookingHeader: React.FC<BookingHeaderProps> = ({ company }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">{company.name}</h1>
            <p className="text-neutral-600 mt-1">Agende seu horário</p>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-neutral-500">Contato</p>
            <p className="text-sm font-medium text-neutral-900">{company.phone}</p>
            <p className="text-sm text-neutral-500">{company.email}</p>
          </div>
        </div>
        
        {company.description && (
          <p className="text-neutral-600 mt-4 text-sm">{company.description}</p>
        )}
      </div>
    </div>
  );
};