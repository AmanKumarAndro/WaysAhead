import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { mentorsData } from '../../data/homeData'
import { FaLinkedinIn } from 'react-icons/fa'

const Mentors = () => {
  return (
    <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Our Mentors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorsData.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <a 
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-5 bg-[#0A66C2] hover:bg-[#004182] text-white p-3 rounded-full transform translate-x-1/4 translate-y-1/4 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {mentor.name}
              </h3>
              <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                {mentor.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {mentor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Mentors 