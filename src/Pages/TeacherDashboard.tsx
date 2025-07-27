import { FormTeacherClass } from '@/Components/FormTeacherClass'
import { Header } from '@/Components/Header'
import { TeacherCards } from '@/Components/TeacherCards'
import { TeacherTabs } from '@/Components/TeacherTabs'
import {
  Calendar,
  CircleCheckBig,
  DollarSign,
  TriangleAlert,
} from 'lucide-react'
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
    <div className='h-screen bg-zinc-200'>
      {/* Header */}
      <Header
        buttonLabel='Nova Aula'
        onButtonClick={async () => setOpen(true)}
        name={getUserName(name)}
      />
      <FormTeacherClass open={open} onOpenChange={setOpen} />
      <main className='bg-zinc-200 h-screen'>
        {/* Aqui inicia os cards */}
        <div className='grid grid-cols-4 gap-4 m-4'>
          <TeacherCards
            cardName='Aulas Agendadas'
            number={0}
            icon={Calendar}
            iconColor='text-cyan-500'
          />
          <TeacherCards
            cardName='Aulas Realizadas'
            number={0}
            icon={CircleCheckBig}
            iconColor='text-emerald-500'
          />
          <TeacherCards
            cardName='Reita Total'
            number={0}
            icon={DollarSign}
            iconColor='text-teal-500'
          />
          <TeacherCards
            cardName='Pagamentos Pendentes'
            number={0}
            icon={TriangleAlert}
            iconColor='text-red-500'
          />
        </div>
        {/* Aqui inicia as tabs */}
        <div className='m-4'>
          <TeacherTabs />
        </div>
      </main>
    </div>
  )
}
