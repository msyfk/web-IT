import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Lecturers from './pages/Lecturers'
import Curriculum from './pages/Curriculum'
import Innovation from './pages/Innovation'
import Downloads from './pages/Downloads'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/dosen" element={<Lecturers />} />
        <Route path="/kurikulum" element={<Curriculum />} />
        <Route path="/inovasi" element={<Innovation />} />
        <Route path="/unduhan" element={<Downloads />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}
