import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import logo from '/images/waysahead-logo.png'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      // If on home page, scroll to section
      const element = document.getElementById(link.path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on other pages, navigate to home and then scroll
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(link.path)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
    setIsOpen(false)
  }

  const currentLinks = location.pathname === '/' ? homeNavLinks : navLinks

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white dark:bg-gray-900 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation({ name: 'Home', path: 'hero' })}
                className="flex items-center"
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
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white'
                } hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {link.name}
              </button>
            ))}

            {/* Login Button */}
            <Link
              to="/login"
              className={`ml-4 px-4 py-2 rounded-lg ${
                isScrolled
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              } transition-all duration-300 text-sm font-medium`}
            >
              Login
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              } transition-colors`}
            >
              {darkMode ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              } transition-colors`}
            >
              {darkMode ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-white'
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
            {/* Mobile Login Button */}
            <Link
              to="/login"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar