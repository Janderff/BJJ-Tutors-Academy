import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import BjjTutorLogo from '@/assets/bjjTutorsLogo.png'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
type FormData = z.infer<typeof schema>
export function Login() {
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#FFF3F0] '>
      <div className='flex-row w-[540px] h-[545px] justify-center items-center shadow-2xl shadow-gray-400 border-2 bg-[#FFFFFF] border-white rounded-xl'>
        <div className=' w-full h-[250px] flex items-center justify-center'>
          <img src={BjjTutorLogo} alt='Logo do BJJ Tutors Academy' />
        </div>
        <div className='mt-3 flex flex-col items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6'
          >
            <div className='grid  gap-3 w-[450px]'>
              <Label>E-MAIL</Label>
              <Input {...register('email')} />
              {formState.errors.email?.message && (
                <span className='text-red-500 text-[12px]'>
                  {formState.errors.email?.message}
                </span>
              )}
              <Label>SENHA</Label>

              <Input type='password' {...register('password')} />
              {formState.errors.password?.message && (
                <span className='text-red-500 text-[12px]'>
                  {formState.errors.password?.message}
                </span>
              )}
              <Button type='submit' className='mt-2' variant='destructive'>
                ENTRAR
              </Button>
            </div>
          </form>
          <div className='mt-2'>
            <a href=''>Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </div>
  )
}
