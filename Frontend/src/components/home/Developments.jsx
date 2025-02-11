import { motion } from 'framer-motion'
import { Section, Container, Button } from '../shared'
import { developmentsData } from '../../data/homeData'

const Developments = () => {
  return (
    <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Our Recent Developments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentsData.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={dev.image} 
                  alt={`Development ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-4 left-0 right-0">
                    <p className="text-white text-xl font-bold text-center">
                      Product completed in {dev.days} days
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="primary">
            Explore More
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default Developments 