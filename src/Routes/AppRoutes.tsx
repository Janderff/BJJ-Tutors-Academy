import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { TeacherDashboard } from '@/Pages/TeacherDashboard'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/teacherDashboard' element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
