import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { presenceData } from '../../data/homeData'
import { HiOutlineGlobeAlt } from 'react-icons/hi'

const Presence = () => {
  return (
    <Section bgLight="bg-white" bgDark="dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-2 bg-accent-500/10 rounded-full mb-6"
          >
            <HiOutlineGlobeAlt className="w-6 h-6 text-accent-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Global Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          >
            Delivering innovative AI and data analytics solutions across continents
          </motion.p>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {presenceData.map((location, index) => (
            <motion.div
              key={location.country}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image with grayscale effect on hover */}
              <img 
                src={location.image}
                alt={`${location.city}, ${location.country}`}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-50"
              />

              {/* Overlay with text appearing on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-1 text-white transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300">
                  {location.country}
                </h3>
                <p className="text-lg text-white transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                  {location.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Expanding our reach to bring data-driven solutions worldwide
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Presence
