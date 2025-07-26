import { Header } from '@/Components/Header'

export function TeacherDashboard() {
  function handleClick() {
    alert('professor clicou')
  }
  function getUserName(name: any) {
    try {
      const userName = localStorage.getItem('user')
      return userName?.toString() ?? 'default name'
    } catch (error) {}
  }
  return (
    <div>
      <Header
        buttonLabel='Nova Aula'
        onButtonClick={handleClick}
        name={getUserName(name)}
      />
      <div>oi professor</div>
    </div>
  )
}
