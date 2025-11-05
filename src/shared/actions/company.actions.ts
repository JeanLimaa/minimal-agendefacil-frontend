import { apiClient } from '@/shared/lib/api-client';
import { Company } from '@/features/booking/types';

export async function getCompanyByLink(companyLink: string): Promise<Company> {
  try {
    const company = await apiClient.get<Company>(`/company/${companyLink}`);
    
    return company;
  } catch (error) {
    console.error('Failed to fetch company for landing:', error);
    throw new Error('Empresa não encontrada');
  }
}