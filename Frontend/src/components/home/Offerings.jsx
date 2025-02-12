import { motion } from 'framer-motion'
import { offeringsData } from '../../data/homeData'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Offerings = () => {
  const navigate = useNavigate()
  const [startIndex, setStartIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)
  const autoScrollInterval = 4000 // 4 seconds

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Function to get next index with wrapping
  const getNextIndex = (currentIndex) => {
    return (currentIndex + 1) % (offeringsData.length - (itemsToShow - 1))
  }

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => getNextIndex(prev))
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [itemsToShow])

  const nextSlide = () => {
    setStartIndex(getNextIndex(startIndex))
  }

  const prevSlide = () => {
    setStartIndex(prev => 
      prev === 0 ? offeringsData.length - itemsToShow : prev - 1
    )
  }

  // Create a wrapped array for infinite scroll
  const getWrappedData = () => {
    const wrappedData = [...offeringsData]
    wrappedData.push(...offeringsData.slice(0, itemsToShow))
    return wrappedData
  }

  return (
    <section className="py-12 md:py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white"
        >
          Our Offerings
        </motion.h2>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 md:gap-8 transition-all duration-1000" 
              style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
            >
              {getWrappedData().map((offering, index) => (
                <motion.div
                  key={`${offering.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/30 p-4 md:p-6 hover:shadow-xl transition-all"
                >
                  <div className="relative w-full h-40 sm:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4 text-primary-600 dark:text-primary-400">
                    {offering.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                    {offering.description}
                  </p>
                  <ul className="mb-4 md:mb-6 space-y-1 md:space-y-2">
                    {offering.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 md:py-3 rounded-full transition-all duration-300 font-semibold border-2 border-accent-500 hover:border-accent-400 text-sm sm:text-base"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(var(--color-accent-500), 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(offering.path)}
                  >
                    {offering.action}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg text-sm sm:text-base"
            onClick={prevSlide}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg text-sm sm:text-base"
            onClick={nextSlide}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {Array.from({ length: offeringsData.length - (itemsToShow - 1) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === startIndex ? 'bg-accent-500 w-4' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offerings