import { motion } from 'framer-motion'
import { Section, Container } from '../shared'
import { whoWeAreData } from '../../data/homeData'

const WhoWeAre = () => {
  return (
    <Section bgLight="bg-white" bgDark="dark:bg-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              {whoWeAreData.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
            >
              {whoWeAreData.description}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={whoWeAreData.videoUrl} 
                title="Company Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default WhoWeAre 