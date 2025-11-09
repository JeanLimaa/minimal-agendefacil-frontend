'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookingData, BookingStep, Service, ClientInfo, Company } from '../types';
import { BOOKING_STEPS } from '../constants';

export const useBooking = (initialCompany: Company) => {
  const router = useRouter();
  const company = initialCompany;
  
  const [bookingData, setBookingData] = useState<BookingData>({
    services: [],
    selectedDate: null,
    selectedTime: null,
    clientInfo: null,
  });
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [loading, setLoading] = useState({
    services: false,
    timeSlots: false,
    booking: false
  });
  const [error, setError] = useState<string | null>(null);
  
  const [availableServices, setAvailableServices] = useState<Service[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [bookingResult, setBookingResult] = useState<any>(null);

  // Carregar serviços da empresa
  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading({ ...loading, services: true });
        const { getServicesByCompany } = await import('../actions/booking.actions');
        const servicesData = await getServicesByCompany(company.id);
        setAvailableServices(servicesData);
      } catch (err) {
        setError('Erro ao carregar serviços');
        console.error(err);
      } finally {
        setLoading({ ...loading, services: false });
      }
    };

    loadServices();
  }, [company.id]);

  // Carregar horários disponíveis quando data/serviços mudarem
  useEffect(() => {
    const loadTimeSlots = async () => {
      if (!bookingData.selectedDate || bookingData.services.length === 0) {
        setAvailableTimeSlots([]);
        return;
      }
      
      try {
        setLoading({ ...loading, timeSlots: true });
        const { getAvailableTimeSlots } = await import('../actions/booking.actions');
        
        const timeSlots = await getAvailableTimeSlots(
          company.id,
          bookingData.selectedDate,
          bookingData.services.map(s => s.id)
        );

        setAvailableTimeSlots(Array.isArray(timeSlots) ? timeSlots : []);
      } catch (err) {
        setError('Erro ao carregar horários disponíveis');
        console.error(err);
      } finally {
        setLoading({ ...loading, timeSlots: false });
      }
    };

    loadTimeSlots();
  }, [company.id, bookingData.selectedDate, bookingData.services]);

  const currentStep = BOOKING_STEPS[currentStepIndex];

  const toggleService = useCallback((service: Service) => {
    setBookingData(prev => {
      const isSelected = prev.services.some(s => s.id === service.id);
      const newServices = isSelected
        ? prev.services.filter(s => s.id !== service.id)
        : [...prev.services, service];
        
      return {
        ...prev,
        services: newServices,
        selectedTime: null
      };
    });
  }, []);

  const selectDateTime = useCallback((date: string, time: string) => {
    setBookingData(prev => ({
      ...prev,
      selectedDate: date,
      selectedTime: time
    }));
  }, []);

  const setClientInfo = useCallback((clientInfo: ClientInfo) => {
    setBookingData(prev => ({
      ...prev,
      clientInfo,
    }));
  }, []);

  const nextStep = useCallback(() => {
    if (currentStepIndex < BOOKING_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  }, [currentStepIndex]);

  const prevStep = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  }, [currentStepIndex]);

  const goToStep = useCallback((step: BookingStep) => {
    const stepIndex = BOOKING_STEPS.indexOf(step);
    if (stepIndex !== -1) {
      setCurrentStepIndex(stepIndex);
    }
  }, []);

  const canProceedToNextStep = useCallback(() => {
    switch (currentStep) {
      case BookingStep.SERVICE:
        return bookingData.services.length > 0;
      case BookingStep.DATETIME:
        return !!bookingData.selectedDate && !!bookingData.selectedTime;
      case BookingStep.CHECKOUT:
        return !!bookingData.clientInfo;
      default:
        return false;
    }
  }, [currentStep, bookingData]);

  const confirmBooking = useCallback(async (): Promise<boolean> => {
    if (!bookingData.selectedDate || !bookingData.selectedTime || 
        !bookingData.clientInfo || bookingData.services.length === 0) {
      setError('Dados incompletos para finalizar o agendamento');
      return false;
    }

    try {
      setLoading({ ...loading, booking: true });
      const { createAppointment } = await import('../actions/booking.actions');

      const response = await createAppointment({
        companyId: company.id,
        date: bookingData.selectedDate,
        time: bookingData.selectedTime,
        serviceIds: bookingData.services.map(s => s.id),
        clientInfo: bookingData.clientInfo,
      });

      
      router.push(`/company/${company.link}/booking/confirmation`);

      setBookingResult(response);

      // Reset após sucesso
      setBookingData({
        services: [],
        selectedDate: null,
        selectedTime: null,
        clientInfo: null,
      });
      return true;
    } catch (err) {
      setError('Erro ao confirmar agendamento');
      console.error(err);
      return false;
    } finally {
      setLoading({ ...loading, booking: false });
    }
  }, [bookingData, company.id, router]);

  const getTotalDuration = useCallback(() => {
    return bookingData.services.reduce((total, service) => total + service.duration, 0);
  }, [bookingData.services]);

  const getTotalPrice = useCallback(() => {
    return bookingData.services.reduce((total, service) => total + service.price, 0);
  }, [bookingData.services]);

  return {
    company,
    bookingData,
    currentStep,
    currentStepIndex,
    loading,
    error,
    
    availableServices,
    availableTimeSlots,
    
    toggleService,
    selectDateTime,
    setClientInfo,
    nextStep,
    prevStep,
    goToStep,
    confirmBooking,
    
    canProceedToNextStep: canProceedToNextStep(),
    totalDuration: getTotalDuration(),
    totalPrice: getTotalPrice(),
    bookingResult,
    
    clearError: () => setError(null),
    clearBookingResult: () => setBookingResult(null),
  };
};