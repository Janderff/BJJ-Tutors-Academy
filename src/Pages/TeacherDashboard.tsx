import { FormTeacherClass } from '@/Components/FormTeacherClass'
import { Header } from '@/Components/Header'
import { useState } from 'react'

export function TeacherDashboard() {
  const [open, setOpen] = useState(false)
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
        onButtonClick={async () => setOpen(true)}
        name={getUserName(name)}
      />
      <FormTeacherClass open={open} onOpenChange={setOpen} />
      <div>oi professor</div>
    </div>
  )
}
