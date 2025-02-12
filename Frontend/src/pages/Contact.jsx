import { motion } from 'framer-motion'
import { Section, Container } from '../components/shared'
import { HiMail, HiOfficeBuilding } from 'react-icons/hi'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    region: '',
    industry: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const locations = [
    {
      country: 'Singapore',
      address: '68 Circular Road, #02-01\nSingapore, 049422',
      flag: 'https://flagcdn.com/w40/sg.png'
    },
    {
      country: 'United Arab Emirates', 
      address: 'A4/1032 Al Hamra RAKEZ\nRas Al Khaimah, UAE',
      flag: 'https://flagcdn.com/w40/ae.png'
    },
    {
      country: 'India',
      address: '2nd Floor, Regal Building,\nConnaught Place, Delhi 110001',
      flag: 'https://flagcdn.com/w40/in.png'
    }
  ]

  const industries = [
    'Retail', 'Hospitality', 'Healthcare', 'F&B', 'Fashion', 'Others'
  ]

  const regions = [
    'United Arab Emirates', 'Saudi Arabia', 'India', 'Singapore', 
    'Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Vietnam', 'Indonesia', 
    'Malaysia', 'Rest of the world'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          region: '',
          industry: ''
        });
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Submission error:', error);
    }
  };

  return (
    <>
      <Section >
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300"
            >
              Get in touch with us to transform your business with AI
            </motion.p>
          </div>
        </Container>
      </Section>

      <Section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Know More</h2>
              {submissionStatus === 'success' && (
                <div className="bg-green-100 p-4 mb-4 rounded-lg">
                  Message sent successfully! Check your email for confirmation.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="bg-red-100 p-4 mb-4 rounded-lg">
                  Error sending message. Please try again.
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Region Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Region</label>
                    <select 
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="">Select Region</option>
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  {/* Industry Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 8px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    boxShadow: "0 0 2px rgba(255,255,255,0.3)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                  className="w-full bg-accent-500 text-white py-3 rounded-lg hover:bg-accent-600 transition-all duration-300 border-2 border-accent-400 hover:border-accent-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="grid gap-8">
                {locations.map((location) => (
                  <div 
                    key={location.country}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <img 
                        src={location.flag} 
                        alt={`${location.country} flag`}
                        className="w-6 h-4 object-cover rounded shadow-sm"
                      />
                      {location.country}
                    </h3>
                    <div className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                      <HiOfficeBuilding className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p className="whitespace-pre-line">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <HiMail className="w-5 h-5" />
                  <a href="mailto:info@waysaheadglobal.com" className="hover:text-accent-500">
                    info@waysaheadglobal.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Contact 