import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { useCasesData } from '../../data/homeData'
import { HiArrowRight } from 'react-icons/hi'
import { useState, useEffect } from 'react'

const UseCases = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const autoScrollInterval = 4000 // 4 seconds

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Function to get next index with wrapping
  const getNextIndex = (currentIndex) => {
    return (currentIndex + 1) % useCasesData.length
  }

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => getNextIndex(prev))
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [])

  // Create a wrapped array for infinite scroll
  const getWrappedData = () => {
    const wrappedData = [...useCasesData]
    wrappedData.push(...useCasesData.slice(0, itemsPerView))
    return wrappedData
  }

  return (
    <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
      <Container>
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white"
          >
            Use Cases
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6">
          <div 
            className="flex gap-4 md:gap-8 transition-all duration-1000"
            style={{ transform: `translateX(-${startIndex * (100/itemsPerView)}%)` }}
          >
            {getWrappedData().map((useCase, index) => (
              <motion.div
                key={`${useCase.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative group overflow-hidden rounded-lg h-[300px] md:h-[400px]"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 z-0"></div>
                
                {/* Image container */}
                <div className="relative z-10 h-full overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Default overlay - always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay - appears on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-white/90 mb-6 text-sm md:text-base">
                        {useCase.description}
                      </p>
                      {useCase.features && (
                        <ul className="text-white/80 space-y-2 mb-6 text-xs md:text-sm">
                          {useCase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <button className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors group/btn">
                        <span className="mr-2 text-sm md:text-base">Learn More</span>
                        <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default UseCases