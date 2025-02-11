import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { philosophyData } from '../../data/homeData'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const Philosophy = () => {
  return (
    <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          >
            Our Philosophy of Data
          </motion.h2>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -top-6 -left-8 text-accent-500/20 dark:text-accent-500/10"
            >
              <RiDoubleQuotesL className="w-16 h-16" />
            </motion.div>
            
            <motion.blockquote 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl italic text-gray-600 dark:text-gray-300 mb-8 relative z-10"
            >
              {philosophyData.quote}
              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold text-accent-600 dark:text-accent-400 mt-4"
              >
                – {philosophyData.author}
              </motion.footer>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-6 -right-8 text-accent-500/20 dark:text-accent-500/10"
            >
              <RiDoubleQuotesR className="w-16 h-16" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-lg transform -rotate-1"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {philosophyData.description}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Philosophy 