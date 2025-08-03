import { FileText } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Button } from '../ui/button'
import { getStudentsForTeacher, type User } from '@/http/getStudentsForTeacher'
import { useEffect, useState } from 'react'

export function TabStudents() {
  const [students, setStudents] = useState<User[]>([])
  const userId = localStorage.getItem('userId')?.replace(/^"(.*)"$/, '$1')
  async function getStudents() {
    if (userId) {
      try {
        const result = await getStudentsForTeacher(userId)

        setStudents(result.filter((student) => student.role === 'aluno'))
      } catch (error) {
        console.error('Error fetching classes:', error)
      }
    }
  }
  useEffect(() => {
    getStudents()
  }, [])
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
            <TableHead className='pl-4'>Nome</TableHead>
            <TableHead>Contato</TableHead>
            <TableHead>Graduação</TableHead>
            <TableHead>Valor da Aula</TableHead>
            <TableHead>Total de aulas</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className='text-left pl-4'>
                {student.username}
              </TableCell>
              <TableCell className='text-left'>{student.telefone}</TableCell>
              <TableCell className='text-left'>
                {student.faixaGraduacao}
              </TableCell>
              <TableCell className='text-left'>
                {student.valorPorAula}
              </TableCell>
              <TableCell className='text-left'>{student.totalAulas}</TableCell>
              <TableCell className='text-left'>{student.status}</TableCell>
              <TableCell className='text-left'>
                <Button variant='outline' type='button'>
                  <FileText />
                  Relatorios
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
