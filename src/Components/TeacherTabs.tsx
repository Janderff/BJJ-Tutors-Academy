import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { TabClasses } from './Tabs/TabClasses'
import { TabStudents } from './Tabs/TabStudents'

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
      <TabsContent value='aulas' className='w-full'>
        <TabClasses />
      </TabsContent>
      <TabsContent value='alunos' className='w-full'>
        <TabStudents />
      </TabsContent>
    </Tabs>
  )
}
