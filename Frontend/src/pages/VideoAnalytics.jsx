import { motion } from 'framer-motion'
import { Section, Container, Button } from '../components/shared'
import { useNavigate } from 'react-router-dom'
import { HiOutlineVideoCamera, HiOutlineEye, HiOutlineLightningBolt } from 'react-icons/hi'

const VideoAnalytics = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <HiOutlineVideoCamera className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: 'Advanced video analytics for real-time monitoring and instant alerts for security and operations.'
    },
    {
      icon: <HiOutlineEye className="w-8 h-8" />,
      title: 'Behavior Analysis',
      description: 'AI-powered analysis of customer behavior, movement patterns, and interaction hotspots.'
    },
    {
      icon: <HiOutlineLightningBolt className="w-8 h-8" />,
      title: 'Smart Alerts',
      description: 'Intelligent notification system for security events, crowd management, and operational anomalies.'
    }
  ]

  const applications = [
    {
      title: 'Security & Surveillance',
      description: 'Enhance security with AI-powered threat detection and automated response systems.',
      image: 'https://images.unsplash.com/photo-1557597774-9d475d5e8142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Customer Analytics',
      description: 'Track customer journeys, analyze shopping patterns, and optimize store layouts.',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Operations Optimization',
      description: 'Monitor and optimize store operations, queue management, and staff deployment.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
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
              Video Analytics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Transform your surveillance systems into intelligent business tools
            </motion.p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact')}
              className="px-8"
            >
              Explore Solutions
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

      {/* Applications Section */}
      <Section bgLight="bg-gray-50" bgDark="bg-gray-800/50">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Applications
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg h-[300px]"
              >
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">{app.title}</h3>
                  <p className="text-gray-200">{app.description}</p>
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
              Ready to upgrade your surveillance systems?
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

export default VideoAnalytics 