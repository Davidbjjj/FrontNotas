import axios from 'axios';

const API_BASE_URL = 'https://backnotas.onrender.com';

export interface Professor {
  id: string;
  nome: string;
  email: string;
  role: string;
  escolaNome?: string;
  disciplinas: string[];
}

export async function getAllProfessores(): Promise<Professor[]> {
  try {
    const response = await axios.get<Professor[]>(`${API_BASE_URL}/professores`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Erro na requisição:', {
        status: error.response?.status,
        data: error.response?.data,
      });
      throw new Error(error.response?.data?.message || 'Erro na requisição');
    }
    if (error instanceof Error) {
      console.error('Erro ao buscar professores:', error.message);
      throw error;
    }
    console.error('Erro desconhecido ao buscar professores');
    throw new Error('Erro desconhecido ao carregar professores');
  }
}

export async function deleteProfessor(id: string): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/professores/${id}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Erro na requisição:', {
        status: error.response?.status,
        data: error.response?.data,
      });
      throw new Error(error.response?.data?.message || 'Erro na requisição');
    }
    if (error instanceof Error) {
      console.error('Erro ao excluir professor:', error.message);
      throw error;
    }
    console.error('Erro desconhecido ao excluir professor');
    throw new Error('Erro desconhecido ao excluir professor');
  }
}