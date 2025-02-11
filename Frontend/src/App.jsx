import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components/shared'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import AIaaS from './pages/AIaaS'
import Contact from './pages/Contact'
import Idea2MVP from './pages/Idea2MVP'
import AIShopAssist from './pages/AIShopAssist'
import GeoSpatialAnalytics from './pages/GeoSpatialAnalytics'
import InStoreAnalytics from './pages/InStoreAnalytics'
import SCMAnalytics from './pages/SCMAnalytics'
import VideoAnalytics from './pages/VideoAnalytics'
import Robotics from './pages/Robotics'
// import About from './pages/About'
// import Services from './pages/Services'
// import UseCases from './pages/UseCases'
// import Careers from './pages/Careers'
// import News from './pages/News'

// Styles
import './App.css'

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Layout component to handle which components to show
const Layout = ({ children, showNavbar = true, showFooter = true, darkMode, setDarkMode }) => {
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      {showNavbar && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
      <main className={`flex-grow ${showNavbar ? 'pt-16' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

// Component to handle page layouts
const AppContent = ({ darkMode, setDarkMode }) => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login'

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/login" 
        element={
          <Layout 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            showNavbar={false}
            showFooter={false}
          >
            <Login />
          </Layout>
        } 
      />
      <Route 
        path="/aiaas" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <AIaaS />
          </Layout>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Contact />
          </Layout>
        } 
      />
      <Route 
        path="/idea2mvp" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Idea2MVP />
          </Layout>
        } 
      />
      <Route 
        path="/ai-shop-assist" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <AIShopAssist />
          </Layout>
        } 
      />
      <Route 
        path="/geo-spatial-analytics" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <GeoSpatialAnalytics />
          </Layout>
        } 
      />
      <Route 
        path="/in-store-analytics" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <InStoreAnalytics />
          </Layout>
        } 
      />
      <Route 
        path="/scm-analytics" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <SCMAnalytics />
          </Layout>
        } 
      />
      <Route 
        path="/video-analytics" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <VideoAnalytics />
          </Layout>
        } 
      />
      <Route 
        path="/robotics" 
        element={
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Robotics />
          </Layout>
        } 
      />
      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news" element={<News />} /> */}
    </Routes>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <ScrollToTop />
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  )
}

export default App
