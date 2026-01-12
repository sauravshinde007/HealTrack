import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />

      {/* --- GLOBAL BACKGROUND LAYER --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Large Purple Glow (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-200/30 rounded-full blur-[120px]" />
        {/* Large Indigo Glow (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-200/20 rounded-full blur-[100px]" />
        {/* Subtle Blue Glow (Center) */}
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-blue-100/20 rounded-full blur-[100px]" />
      </div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App