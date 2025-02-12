import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.setItem('token', response.data.token); // Store token
      window.location.href = '/'; // Redirect to home
    } catch (error) {
      if (error.response) {
        // Handle HTTP errors
        console.error('Login failed:', error.response.data.message);
      } else {
        // Handle network errors
        console.error('Error during login:', error.message);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Login Card */}
      <div className="relative bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm w-full max-w-md mx-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/images/waysahead-logo.png" 
            alt="WaysAhead Global" 
            className="h-8"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-2">Login</h2>
        <p className="text-gray-400 text-center mb-8">Glad you're back!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        {/* <div className="mt-8">
          <div className="flex items-center justify-center space-x-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <FcGoogle className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <FaFacebook className="w-6 h-6 text-[#1877F2]" />
            </button>
          </div>
        </div> */}

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-500 hover:text-red-400">
              Signup
            </Link>
          </p>
        </div>

        {/* Terms Links */}
        <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-500">
          <Link to="/terms" className="hover:text-gray-400">
            Terms & Conditions
          </Link>
          <Link to="/support" className="hover:text-gray-400">
            Support
          </Link>
          <Link to="/customer-care" className="hover:text-gray-400">
            Customer Care
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login 