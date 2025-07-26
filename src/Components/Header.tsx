import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { LogOut, Plus } from 'lucide-react'
interface HeaderProps {
  buttonLabel: string
  onButtonClick: () => void
  name?: string
}
export function Header({ buttonLabel, onButtonClick, name }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <header className='p-4 mb-2 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2'>
      {/* Esquerda */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>BJJ Tutors Academy</h1>
        <span className='text-xl'>Bem-vindo, {name}</span>
      </div>

      {/* Direita */}
      <div className='w-full sm:w-auto flex flex-col sm:flex-row justify-end items-center gap-4'>
        <Button variant='destructive' type='button' onClick={onButtonClick}>
          <Plus className='mr-2' />
          {buttonLabel}
        </Button>
        <Button onClick={() => navigate('/')} variant='outline' type='button'>
          <LogOut className='mr-2' />
          Sair
        </Button>
      </div>
    </header>
  )
}
