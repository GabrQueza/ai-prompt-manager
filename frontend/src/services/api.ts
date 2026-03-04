import axios from 'axios';

// TypeScript interface for Prompt corresponding to the backend model
export interface Prompt {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export interface CreatePromptData {
  title: string;
  content: string;
  category: string;
}

// Ensure setting the base URL appropriately for the backend setup
const api = axios.create({
  baseURL: 'http://localhost:3000/prompts',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const promptApi = {
  // Fetch all prompts (GET)
  fetchPrompts: async (): Promise<Prompt[]> => {
    const response = await api.get<Prompt[]>('/');
    return response.data;
  },

  // Create a new prompt (POST)
  createPrompt: async (data: CreatePromptData): Promise<Prompt> => {
    const response = await api.post<Prompt>('/', data);
    return response.data;
  },

  // Delete a prompt (DELETE)
  deletePrompt: async (id: string): Promise<Prompt> => {
    const response = await api.delete<Prompt>(`/${id}`);
    return response.data;
  },
};
