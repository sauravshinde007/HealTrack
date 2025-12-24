import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../utils/cn'

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        'text-gray-600 hover:text-black transition',
        isActive && 'text-black'
      )
    }
  >
    {children}
  </NavLink>
)

const MobileNavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="text-gray-700 hover:text-black"
  >
    {children}
  </NavLink>
)

const DropdownItem = ({ children, onClick }) => (
  <p
    onClick={onClick}
    className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100"
  >
    {children}
  </p>
)


  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <nav
        className={cn(
          "mx-auto mt-3 max-w-6xl rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-white/70 backdrop-blur-lg border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <h1
            onClick={() => navigate('/')}
            className="text-xl font-semibold cursor-pointer"
          >
            HealTrack
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/doctors">Doctors</NavItem>
            <NavItem to="/about">About</NavItem>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {token && userData ? (
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium">
                  <img
                    src={userData.image}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-3 hidden group-hover:block">
                  <div className="bg-white rounded-xl shadow-lg border min-w-48 p-3 space-y-2 text-sm">
                    <DropdownItem onClick={() => navigate('/my-profile')}>
                      My Profile
                    </DropdownItem>
                    <DropdownItem onClick={() => navigate('/my-appointments')}>
                      My Appointments
                    </DropdownItem>
                    <DropdownItem onClick={logout}>
                      Logout
                    </DropdownItem>
                  </div>
                </div>
              </div>
            ) : (
              <Button onClick={() => navigate('/login')} className="hidden md:flex">
                Get Started
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <MobileNavItem to="/" onClick={() => setMenuOpen(false)}>Home</MobileNavItem>
              <MobileNavItem to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</MobileNavItem>
              <MobileNavItem to="/about" onClick={() => setMenuOpen(false)}>About</MobileNavItem>

              {!token && (
                <Button onClick={() => navigate('/login')} className="mt-4">
                  Get Started
                </Button>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
