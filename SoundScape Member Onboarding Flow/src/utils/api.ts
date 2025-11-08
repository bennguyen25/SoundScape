import { projectId, publicAnonKey } from './supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-224cbd01`;

const headers = {
  'Authorization': `Bearer ${publicAnonKey}`,
  'Content-Type': 'application/json',
};

export const api = {
  // User profile
  getProfile: async (userId: string) => {
    const response = await fetch(`${API_BASE}/profile/${userId}`, { headers });
    return response.json();
  },

  updateProfile: async (userId: string, data: any) => {
    const response = await fetch(`${API_BASE}/profile/${userId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Deals
  getDeals: async (neighborhood: string, filters?: { category?: string; maxDistance?: number }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.maxDistance) params.append('maxDistance', filters.maxDistance.toString());
    
    const response = await fetch(`${API_BASE}/deals/${neighborhood}?${params}`, { headers });
    return response.json();
  },

  // Business analytics
  getBusinessAnalytics: async (businessId: string, period = 'week') => {
    const response = await fetch(`${API_BASE}/business/${businessId}/analytics?period=${period}`, { headers });
    return response.json();
  },

  // AI insights
  getAIInsights: async (businessId: string, timeOfDay: string) => {
    const response = await fetch(`${API_BASE}/business/${businessId}/insights?timeOfDay=${timeOfDay}`, { headers });
    return response.json();
  },

  // Promotions
  schedulePromotion: async (businessId: string, data: any) => {
    const response = await fetch(`${API_BASE}/business/${businessId}/promotion`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Community impact
  getCommunityImpact: async (neighborhood: string) => {
    const response = await fetch(`${API_BASE}/community/${neighborhood}/impact`, { headers });
    return response.json();
  },

  // Reviews
  getReviews: async (businessId: string) => {
    const response = await fetch(`${API_BASE}/business/${businessId}/reviews`, { headers });
    return response.json();
  },

  submitReview: async (businessId: string, data: any) => {
    const response = await fetch(`${API_BASE}/business/${businessId}/review`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Initialize data
  initializeData: async () => {
    const response = await fetch(`${API_BASE}/init-data`, {
      method: 'POST',
      headers,
    });
    return response.json();
  },
};
