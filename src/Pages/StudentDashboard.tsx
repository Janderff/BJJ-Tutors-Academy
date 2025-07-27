import { FormStudentClass } from '@/Components/FormStudentClass'
import { Header } from '@/Components/Header'
import { useState } from 'react'

export function StudentDashboard() {
  const [open, setOpen] = useState(false)

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
        onButtonClick={async () => setOpen(true)}
        name={getUserName(name)}
      />
      <FormStudentClass open={open} onOpenChange={setOpen} />
      <div>oi estudante</div>
    </div>
  )
}
