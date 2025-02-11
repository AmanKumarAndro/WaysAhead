import { motion } from 'framer-motion'
import { Section, Container, Button } from '../components/shared'
import { HiOutlineLightningBolt, HiOutlineCube, HiOutlineChat, HiOutlinePuzzle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const AIaaS = () => {
  const navigate = useNavigate()

  const benefits = [
    {
      id: '01',
      title: 'Cost-Effective',
      description: 'No need for large upfront investments in infrastructure or AI expertise. Our AIaaS allows you to scale AI without overspending.'
    },
    {
      id: '02',
      title: 'Scalable', 
      description: 'Our AI solutions grow with your business, offering flexibility as your operations expand.'
    },
    {
      id: '03',
      title: 'Future-Proof',
      description: 'Stay ahead with AI tools that evolve with the retail industry, ensuring your business is always up-to-date with the latest innovations.'
    }
  ]

  const features = [
    {
      icon: <HiOutlineLightningBolt className="w-8 h-8" />,
      title: 'Ready-to-Use AI Products',
      description: 'Gain instant access to AI tools for data management, trend analysis, and predictive analytics, designed specifically for retail needs.'
    },
    {
      icon: <HiOutlineCube className="w-8 h-8" />,
      title: 'Prebuilt AI Models',
      description: 'Utilize pre-trained Machine Learning (ML) and Deep Learning (DL) models for pattern matching, business forecasting, and customer insights.'
    },
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: 'AI Chatbots & Digital Assistants',
      description: 'Deploy AI-powered chatbots and digital assistants that are trained on industry-specific data, improving customer interactions and decision-making processes.'
    },
    {
      icon: <HiOutlinePuzzle className="w-8 h-8" />,
      title: 'Plug-and-Play AI Solutions',
      description: 'No complex integration required – our AI frameworks fit right into your existing systems, providing a smooth and scalable solution.'
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
              Revolutionizing Retail with AI Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-300 mb-8"
            >
              In today's fast-moving retail world, staying competitive means keeping up with new technology. Artificial Intelligence (AI) is reshaping how retailers improve customer experiences, streamline operations, and make smarter decisions. AI in the retail industry is projected to grow from $4.84 billion in 2021 to over $31 billion by 2028, driven by advancements in machine learning and automation.
            </motion.p>
            <Button 
              variant="light" 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-all duration-300 hover:scale-105 shadow-xl ring-2 ring-white/50 hover:ring-white/100"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Request a Demo
            </Button>
          </div>
        </Container>
      </Section>

      {/* What is AIaaS Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-6"
              >
                What is AI as a Service (AIaaS)?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-300"
              >
                AI as a Service (AIaaS) provides businesses access to advanced AI technologies without the need for extensive infrastructure. This allows even smaller retailers to adopt cutting-edge solutions like image recognition, chatbots, and predictive analytics—tools previously accessible only to tech giants. WaysAhead Global's AIaaS solutions are designed to help retailers automate repetitive tasks, enhance customer interactions with AI-driven chatbots, analyze large datasets for smarter decision-making, provide real-time insights into customer behavior, and build custom AI models to meet specific business needs.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI as a Service Demo showing futuristic interface"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section bgLight="bg-gray-50" bgDark="dark:bg-gray-800/50">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Our AI as a Service
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-accent-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Benefits for Retail Businesses
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent-500 mb-4">{benefit.id}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
              Transform your retail operations today with WaysAhead Global's AIaaS
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Button 
                variant="light" 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-all duration-300 hover:scale-105 shadow-xl ring-2 ring-white/50 hover:ring-white/100"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default AIaaS