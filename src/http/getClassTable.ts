import { api } from '../api/ApiConfig'

export interface getClassTableProps {
  id: string | number
  alunoId: string | number
  alunoNome: string
  data: string
  professorId: string
  horario: string
  duracao: number
  valor: number
  status: string
  pagamento: string
}
export async function getClassTable(
  professorId: string
): Promise<getClassTableProps[]> {
  const response = await api.get<getClassTableProps[]>(
    `/aulas?professorId=${professorId}`
  )
  return response.data
}
