import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export function Header() {
  const navigate = useNavigate()
  return (
    <header className='p-4 mb-2 w-full h-auto border-b-2 flex'>
      <div className=' flex-col w-1/2  h-auto p-2 justify-start gap-2 flex'>
        <h1 className='text-start text-2xl font-bold'>BJJ Tutors Academy</h1>
        <span className='text-start text-xl'>Bem vindo, Carlos</span>
      </div>
      <div className='w-1/2  h-auto p-2 flex justify-end items-center pr-6'>
        <Button onClick={() => navigate('/')} variant='outline' type='button'>
          <LogOut /> Sair
        </Button>
      </div>
    </header>
  )
}
