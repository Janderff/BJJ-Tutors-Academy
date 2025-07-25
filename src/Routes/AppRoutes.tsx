import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { TeacherDashboard } from '@/Pages/TeacherDashboard'
import { StudentDashboard } from '@/Pages/StudentDashboard'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/teacherDashboard' element={<TeacherDashboard />} />
        <Route path='/studentDashboard' element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
