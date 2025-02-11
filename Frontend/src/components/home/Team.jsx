import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { teamData, mentorsData } from '../../data/homeData'
import { HiUsers } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

const Team = () => {
  return (
    <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-2 bg-accent-500/10 rounded-full mb-6"
          >
            <HiUsers className="w-6 h-6 text-accent-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {teamData.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold mb-12 text-accent-600 dark:text-accent-400"
          >
            {teamData.subtitle}
          </motion.h3>
        </div>

        {/* Development Team Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-8">
            {teamData.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 z-0"></div>
                
                {/* Image container */}
                <div className="relative z-10 aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white text-xl font-bold mb-2">
                        {image.title}
                      </h4>
                      <p className="text-white/80 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Together we make innovation happen
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Team