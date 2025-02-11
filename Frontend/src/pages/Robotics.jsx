import { motion } from 'framer-motion'
import { Section, Container, Button } from '../components/shared'
import { useNavigate } from 'react-router-dom'
import { HiOutlineChip, HiOutlineCog, HiOutlineCube } from 'react-icons/hi'

const Robotics = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <HiOutlineChip className="w-8 h-8" />,
      title: 'Smart Automation',
      description: 'Advanced robotics solutions powered by AI for warehouse and retail automation.'
    },
    {
      icon: <HiOutlineCog className="w-8 h-8" />,
      title: 'Process Optimization',
      description: 'Streamline operations with intelligent robots that learn and adapt to your needs.'
    },
    {
      icon: <HiOutlineCube className="w-8 h-8" />,
      title: 'Inventory Management',
      description: 'Automated inventory tracking and management with robotic assistance.'
    }
  ]

  const solutions = [
    {
      title: 'Warehouse Robotics',
      description: 'Autonomous mobile robots for efficient warehouse operations and logistics.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Retail Automation',
      description: 'Smart robots for inventory management and customer service in retail environments.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Collaborative Robots',
      description: 'Cobots that work safely alongside humans to enhance productivity and efficiency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src="/images/waysahead-logo.png"
            alt="WaysAhead Logo"
            className="w-[600px] opacity-60"
          />
        </motion.div>
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Robotics Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Revolutionize your operations with intelligent robotics and automation
            </motion.p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact')}
              className="px-8"
            >
              Discover Automation
            </Button>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/10 rounded-full flex items-center justify-center text-accent-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section bgLight="bg-gray-50" bgDark="bg-gray-800/50">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Robotics Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg h-[300px]"
              >
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                  <p className="text-gray-200">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bgLight="bg-primary-600" bgDark="bg-primary-700">
        <Container>
          <div className="text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to automate your operations?
            </motion.h2>
            <Button 
              variant="light" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Robotics 