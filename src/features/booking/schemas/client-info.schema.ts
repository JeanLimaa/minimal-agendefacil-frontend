import { z } from 'zod';

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

export const clientInfoSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .max(100, 'Email deve ter no máximo 100 caracteres'),
  
  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .regex(phoneRegex, 'Telefone deve estar no formato (xx) xxxxx-xxxx'),
  
  notes: z
    .string()
    .max(500, 'Observações devem ter no máximo 500 caracteres')
    .optional()
    .default('')
});

export type ClientInfoSchema = z.infer<typeof clientInfoSchema>;