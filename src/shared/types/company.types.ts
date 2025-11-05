import {  WorkingHours } from "../../features/booking/types/working-hours.interface";

export interface CompanyProfile {
    name: string;
    email: string;
    phone: string;
    description?: string;
    logo?: string; // URL ou caminho do arquivo
}

export interface CompanyAddress {
    zipCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
}

// Representa o horário de funcionamento para um único dia da semana
export interface CompanyWorkingHours {
    serviceInterval: number; // em minutos
    workingHours: WorkingHours[]; 
}

export interface CompanyInfo {
    profile: CompanyProfile;
    address: CompanyAddress;
    schedule: CompanyWorkingHours;
}

export interface CompanyPaymentSettings {
    paymentPolicy: 'PRESENTIAL' | 'ONLINE' | 'BOTH';
    partialPaymentEnabled: boolean;
    partialPaymentPercentage: number;
    paymentTimeoutMinutes: number;
}

export interface CompanyPaymentMethod {
    id: number;
    name: string;
    description?: string;
    isOnline: boolean;
    onlinePaymentMethodId?: number | null;
    onlinePaymentMethod?: {
        id: number;
        name: string;
        type: string;
        provider: string;
    } | null;
}

export interface Company extends CompanyProfile {
    id: number;
    link: string;
    companyAddress?: CompanyAddress;
    companyWorkingHours: WorkingHours[];
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    paymentSettings?: CompanyPaymentSettings | null;
    paymentMethods?: CompanyPaymentMethod[];
}