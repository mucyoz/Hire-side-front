import type { JobSeeker, Employer, ContactSubmission } from '../lib/supabase';

const API_BASE_URL = '/api';

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  details?: Record<string, string>;
}

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  async submitJobSeeker(data: Omit<JobSeeker, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse> {
    return this.request('/job-seekers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitEmployer(data: Omit<Employer, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse> {
    return this.request('/employers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitContact(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }
}

export const apiService = new ApiService();
export type { ApiResponse };