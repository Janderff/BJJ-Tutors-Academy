import { Header } from '@/Components/Header'

export function TeacherDashboard() {
  function handleClick() {
    alert('professor clicou')
  }
  return (
    <div>
      <Header buttonLabel='Nova Aula' onButtonClick={handleClick} />
      <div>teacherDashboard</div>
    </div>
  )
}
