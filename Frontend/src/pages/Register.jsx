import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Section, Container, Button } from '../components/shared';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, formData);
      if (response.status === 201) {
        toast.success('Registration successful! Redirecting to login...');
        window.location.href = '/login';
      }
    } catch (error) {
      toast.error('Error registering user. Please try again.');
      console.error('Error registering user:', error);
    }
  };

  return (
    <Section>
      <Container>
        <div className="max-w-lg mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Register
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Create your account to get started
          </motion.p>
        </div>
        <form className="mt-8 max-w-lg mx-auto  bg-gray-800 p-8 rounded-lg" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <Button 
            type="submit" 
            variant="accent" 
            className="w-full mt-4 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
          >
            Register
          </Button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-red-500 hover:text-red-400">
              Login
            </Link>
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-500">
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <FcGoogle className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <FaFacebook className="w-6 h-6 text-[#1877F2]" />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Register; 