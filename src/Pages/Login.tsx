import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import BjjTutor from '@/assets/bjj-tutors-logo.png'

export function Login() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#FFF3F0] '>
      <div className='flex-row w-[540px] h-[540px] justify-center items-center shadow-2xl shadow-gray-400 border-2 bg-[#FFFFFF] border-white rounded-xl'>
        <div className='der-2 w-full h-[280px] flex items-center justify-center'>
          <img src={BjjTutor} alt='Logo do BJJ Tutors Academy' />
        </div>
        <div className='mt-4 flex flex-col items-center'>
          <form className='flex flex-col gap-6'>
            <div className='grid  gap-3 w-[450px]'>
              <Label>E-MAIL</Label>
              <Input />
              <Label>SENHA</Label>
              <Input />
              <Button className='mt-2' variant='destructive'>
                ENTRAR
              </Button>
            </div>
          </form>
          <div className='mt-3'>
            <a href=''>Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </div>
  )
}
