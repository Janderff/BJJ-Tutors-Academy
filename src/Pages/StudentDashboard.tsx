import { Header } from '@/Components/Header'

export function StudentDashboard() {
  function handleClick() {
    console.log('aluno clicou')
  }

  function getUserName(_name: any) {
    try {
      const userName = localStorage.getItem('user')?.replace(/^"(.*)"$/, '$1')

      console.log(userName)
      return userName?.toString() ?? 'default name'
    } catch (error) {}
  }

  return (
    <div>
      <Header
        buttonLabel='Agendar Aula'
        onButtonClick={handleClick}
        name={getUserName(name)}
      />
      <div>oi estudante</div>
    </div>
  )
}
