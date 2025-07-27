import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

export function TeacherTabs() {
  return (
    <Tabs defaultValue='account' className='w-full'>
      <TabsList className='w-full'>
        <TabsTrigger value='aulas'>Aulas</TabsTrigger>
        <TabsTrigger value='alunos'>Alunos</TabsTrigger>
        <TabsTrigger value='professores'>Professores</TabsTrigger>
        <TabsTrigger value='financeiro'>Financeiro</TabsTrigger>
        <TabsTrigger value='relatorios'>Relatórios</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
