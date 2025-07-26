import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import BjjTutorLogo from '@/assets/bjjTutorsLogo.png'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
type FormData = z.infer<typeof schema>
export function Login() {
  const navigate = useNavigate()
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  async function onSubmit(data: FormData) {
    const email = data.email
    const password = data.password
    try {
      const response = await fetch('http://localhost:3000/users')
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários')
      }
      const users = await response.json()
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      )
      localStorage.setItem('user', JSON.stringify(user.username))
      if (user && user.role === 'professor') {
        setTimeout(() => {
          navigate('/teacherDashboard')
        }, 1000)
      } else if (user && user.role === 'aluno') {
        setTimeout(() => {
          navigate('/studentDashboard')
        }, 1000)
      } else {
        console.log('Login falhou: Credenciais inválidas.')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#FFF3F0] flex-col lg:flex-row p-4 overflow-y-auto'>
      <div className='w-full max-w-[540px] h-auto p-6 justify-center items-center shadow-2xl shadow-gray-400 border-2 bg-[#FFFFFF] border-white rounded-xl'>
        <div className=' w-full h-[250px] flex items-center justify-center'>
          <img
            src={BjjTutorLogo}
            alt='Logo do BJJ Tutors Academy'
            className='max-w-[350px] w-full h-auto'
          />
        </div>
        <div className='mt-3 flex flex-col items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 w-full max-w[450px] px-4'
          >
            <div className=' gap-3 w-full max-w-[450px] px-4 grid '>
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
              <Button
                type='submit'
                className='mt-2 w-full sm:w-auto '
                variant='destructive'
              >
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
