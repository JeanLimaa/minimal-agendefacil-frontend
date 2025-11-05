'use client';

import React from 'react';
import { Service } from '../../types';
import {
  LoadingSkeleton,
  EmptyState,
  SectionHeader,
  ServiceCard
} from '../ui';
import { ServicesList } from '../ui/service/ServicesList';

interface ServiceSelectionProps {
  services: Service[];
  selectedServices: Service[];
  onToggleService: (service: Service) => void;
  loading: boolean;
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  services,
  selectedServices,
  onToggleService,
  loading,
}) => {
  if (loading) {
    return (
      <div className="space-y-6">
        <SectionHeader
          title="Escolha os Serviços"
        />
        <LoadingSkeleton className="bg-neutral-200 rounded-lg p-4 h-24" count={3} />
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <EmptyState
        title="Escolha os Serviços"
        description="Nenhum serviço disponível."
      />
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Escolha os Serviços"
        description="Selecione um ou mais serviços que deseja agendar"
      />

      
      <ServicesList
        services={services}
        selectedServices={selectedServices}
        onToggleService={onToggleService}
        canSelectService={() => true}
      />
    </div>
  );
};