import { Ellipsis } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { useEffect, useState } from 'react'
import { getClassTable, type getClassTableProps } from '@/http/getClassTable'

export function TabClasses() {
  const [aulas, setAulas] = useState<getClassTableProps[]>([])

  async function getClasse() {
    try {
      const userId = localStorage.getItem('userId')?.replace(/^"(.*)"$/, '$1')
      if (userId) {
        const result = await getClassTable(userId) // Passa o 'userId' como parâmetro
        setAulas(result) // Atualiza o estado com as aulas retornadas
      } else {
        console.error('User ID not found')
      }
    } catch (error) {
      console.error('Error fetching classes:', error)
    }
  }
  useEffect(() => {
    getClasse()
  })
  return (
    <div className='flex py-4 flex-col bg-white rounded-xl'>
      <h1 className=' text-2xl text-left flex-col ml-4'>Controle de Aulas</h1>
      <span className='text-left ml-4 mb-4'>
        Gerencie suas aulas agendadas e realizadas
      </span>
      <Table className='w-full'>
        <TableCaption className='w-full flex'></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='pl-4'>Aluno</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Horario</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Pagamento</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {aulas.map((aula) => (
            <TableRow key={aula.id}>
              <TableCell className='text-left pl-4'>{aula.alunoNome}</TableCell>
              <TableCell className='text-left'>{aula.data}</TableCell>
              <TableCell className='text-left'>{aula.horario}</TableCell>
              <TableCell className='text-left'>{aula.duracao}</TableCell>
              <TableCell className='text-left'>{aula.valor}</TableCell>
              <TableCell className='text-left'>{aula.status}</TableCell>
              <TableCell className='text-left'>{aula.pagamento}</TableCell>
              <TableCell className='text-left'>
                <Ellipsis />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
