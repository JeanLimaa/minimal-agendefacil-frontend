'use server';

import { apiClient } from '@/shared/lib/api-client';
import { Service } from '../types';

export async function getServicesByCompany(companyId: number): Promise<Service[]> {
  try {
    const services = await apiClient.get<Service[]>(
      `/company/${companyId}/services`,
      { onlyActive: 'true' }
    );
    return services;
  } catch (error) {
    console.error('Failed to fetch services:', error);
    throw new Error('Erro ao buscar serviços');
  }
}

export async function getAvailableTimeSlots(
  companyId: number,
  date: string,
  serviceIds: number[]
): Promise<string[]> {
  try {
    const response = await apiClient.post<{ availableTimes: string[] }>(
      `/company/${companyId}/available-times`,
      {
        date,
        servicesId: serviceIds
      },
      { date }
    );
    console.log('Available time slots response:', response);
    console.log('Available time slots:', Array.isArray(response.availableTimes) ? response.availableTimes : []);
    return Array.isArray(response.availableTimes) ? response.availableTimes : [];
  } catch (error) {
    console.error('Failed to fetch available time slots:', error);
    return [];
  }
}

export async function createAppointment(appointmentData: {
  companyId: number;
  date: string;
  time: string;
  serviceIds: number[];
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
}) {
  try {
    // Combinar data e hora em um único DateTime
    const dateTime = new Date(`${appointmentData.date}T${appointmentData.time}`).toISOString();

    const payload = {
      date: dateTime,
      companyId: appointmentData.companyId,
      serviceIds: appointmentData.serviceIds,
      clientName: appointmentData.clientInfo.name,
      clientEmail: appointmentData.clientInfo.email,
      clientPhone: appointmentData.clientInfo.phone,
      notes: appointmentData.clientInfo.notes,
    };
console.log('Creating appointment with payload:', payload);
    const response = await apiClient.post('/appointment/client', payload);
    console.log('Appointment created successfully:', response);
    return response;
  } catch (error: any) {
      console.error('❌ Falha ao criar agendamento:');

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Mensagem:', error.message);
      console.error('Stack:', error.stack);
    }
    throw new Error('Erro ao criar agendamento');
  }
}
