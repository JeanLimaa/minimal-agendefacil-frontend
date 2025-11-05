const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface FetchOptions extends RequestInit {
  searchParams?: Record<string, string | number>;
}

class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { searchParams, ...fetchOptions } = options;
  
  let url = `${API_BASE_URL}${endpoint}`;
  
  // Adiciona query parameters, se houver
  if (searchParams) {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    url += `?${params.toString()}`;
  }

  const headers = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      // Ativa cache para requisições GET
      next: fetchOptions.method === 'GET' ? { revalidate: 300 } : undefined,
    });

    if (!response.ok) {
      throw new APIError(
        `API request failed: ${response.statusText}`,
        response.status,
        response.statusText
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    
    throw new APIError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      0,
      'Network Error'
    );
  }
}

export const apiClient = {
  get: <T>(endpoint: string, searchParams?: Record<string, string | number>) =>
    fetchAPI<T>(endpoint, { method: 'GET', searchParams }),
    
  post: <T>(endpoint: string, data?: unknown, searchParams?: Record<string, string | number>) =>
    fetchAPI<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      searchParams,
    }),
    
  put: <T>(endpoint: string, data?: unknown) =>
    fetchAPI<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  delete: <T>(endpoint: string) =>
    fetchAPI<T>(endpoint, { method: 'DELETE' }),
};

export { APIError };