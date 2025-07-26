import { Header } from '@/Components/Header'

export function StudentDashboard() {
  function handleClick() {
    console.log('aluno clicou')
  }

  return (
    <div>
      <Header buttonLabel='Agendar Aula' onButtonClick={handleClick} name='' />
      <div>oi estudante</div>
    </div>
  )
}
