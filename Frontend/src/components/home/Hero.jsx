import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#41dfe0] to-[#1dacd7] dark:from-[#1a3a4d] dark:to-[#0d2a3a] transition-all duration-300">
      <div className="absolute inset-0 bg-black/30 dark:bg-black/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white dark:text-gray-100"
        >
          Data is eternal and we are building consciousness around it
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-100 dark:text-gray-200"
        >
          We help companies to transform their business vision into data-centric innovations
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/aiaas')}
            className="bg-accent-500 hover:bg-accent-600 text-white dark:text-gray-100 px-8 py-3 rounded-full transition-colors"
          >
            Explore AIaaS
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/idea2mvp')}
            className="bg-transparent border-2 border-white dark:border-gray-300 hover:bg-white/10 dark:hover:bg-gray-300/10 text-white dark:text-gray-100 px-8 py-3 rounded-full transition-colors"
          >
            Rapid Product Development
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero