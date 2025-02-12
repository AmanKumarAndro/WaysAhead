import { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import logo from '/images/waysahead-logo.png'
import { FaUserCircle } from 'react-icons/fa'
import axios from 'axios'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [opencard, setOpenCard] = useState(false)
  const profileRef = useRef(null)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true')
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(systemDark)
    }
  }, [setDarkMode])

  // Update dark mode class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) return
      
      try {
        const response = await axios.get('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user:', error)
        localStorage.removeItem('token')
        setUser(null)
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenCard(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'News', path: '/news' }
  ]

  const homeNavLinks = [
    { name: 'Home', path: 'hero' },
    { name: 'Offerings', path: 'offerings' },
    { name: 'Use Cases', path: 'use-cases' },
    { name: 'Developments', path: 'developments' },
    { name: 'News', path: 'news' },
    { name: 'Mentors', path: 'mentors' },
    { name: 'Presence', path: 'presence' },
    { name: 'Philosophy', path: 'philosophy' }
  ]

  const handleNavigation = (link) => {
    if (location.pathname === '/') {
      const element = document.getElementById(link.path)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(link.path)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    setIsOpen(false)
    setOpenCard(false)
  }

  const currentLinks = location.pathname === '/' ? homeNavLinks : navLinks

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setOpenCard(false)
    navigate('/login')
  }

  const handleProfileClick = async () => {
    if (!localStorage.getItem('token')) return
    
    try {
      const response = await axios.get('/api/users/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      setUser(response.data)
      setOpenCard(prev => !prev)
    } catch (error) {
      console.error('Error fetching user details:', error)
      handleLogout()
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation({ name: 'Home', path: 'hero' })}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logo}
                  alt="WaysAhead Global" 
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400 hidden sm:block">
                  WaysAhead Global
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {currentLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className={`${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                } hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {link.name}
              </button>
            ))}

            {/* Profile Section */}
            <div className="relative ml-4" ref={profileRef}>
              {user ? (
                <>
                  <button 
                    onClick={handleProfileClick}
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                  >
                    <FaUserCircle className="w-8 h-8 text-gray-700 dark:text-gray-700" />
                    <span className="text-sm pl-2 font-medium text-gray-700 dark:text-gray-700">
                      {user.name.split(' ')[0]}
                    </span>
                  </button>
                  
                  {opencard && (
                    <div className="absolute right-0 mt-2 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 space-y-3">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 truncate">{user.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{user.email}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button 
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg ${
                    isScrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/10 hover:bg-white/20'
                  } text-white backdrop-blur-sm transition-all duration-300 text-sm font-medium`}
                >
                  Login
                </Link>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'
              } transition-colors`}
            >
              {darkMode ? (
                <BsSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <BsMoon className="w-5 h-5 text-gray-600 dark:text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'
              } transition-colors`}
            >
              {darkMode ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              } hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none`}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {currentLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </button>
            ))}
            
            {/* Mobile Profile Section */}
            {user ? (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="px-4 py-3">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{user.email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full mt-2 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar