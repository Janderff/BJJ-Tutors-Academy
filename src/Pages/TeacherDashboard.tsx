import { Header } from '@/Components/Header'

export function TeacherDashboard() {
  function handleClick() {
    alert('professor clicou')
  }
  function getUserName(_name: any) {
    try {
      const userName = localStorage.getItem('user')?.replace(/^"(.*)"$/, '$1')
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
