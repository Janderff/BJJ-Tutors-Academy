import { api } from '../api/ApiConfig'
export type User = {
  id: string
  username: string
  email: string
  password: string
  role: 'aluno' | 'professor' | 'admin'
  telefone: string
  professorId?: string
  faixaGraduacao?: string
  dataGraduacao?: string | null
  valorPorAula?: number
  status?: 'Ativo' | 'Inativo'
}
export async function getUsers(): Promise<User[]> {
  const response = await api.get('/users')
  return response.data
}
