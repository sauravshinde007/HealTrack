import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

  const navigate = useNavigate()

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const logout = () => {
    navigate('/')
    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
    }
    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <nav className="w-full border-b bg-white/70 backdrop-blur-lg shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-10 py-3">
          
          {/* Logo + Role */}
          <div className="flex items-center gap-3 text-xs">
            <h1
              onClick={() => navigate('/')}
              className="text-lg font-semibold cursor-pointer"
            >
              HealTrack
            </h1>

            <span className="px-3 py-1 rounded-full border border-gray-400 text-gray-600 bg-gray-50">
              {aToken ? 'Admin' : 'Doctor'}
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="bg-primary text-white text-sm px-8 py-2 rounded-full hover:bg-primary/90 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
