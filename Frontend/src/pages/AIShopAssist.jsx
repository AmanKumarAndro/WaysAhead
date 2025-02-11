import { motion } from 'framer-motion'
import { Section, Container, Button } from '../components/shared'
import { useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart, HiOutlineChat, HiOutlineChartBar } from 'react-icons/hi'

const AIShopAssist = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <HiOutlineShoppingCart className="w-8 h-8" />,
      title: 'B2B eCommerce Solution',
      description: 'Complete solution for eCommerce and marketplace portals with AI-powered assistance.'
    },
    {
      icon: <HiOutlineChat className="w-8 h-8" />,
      title: 'AI Agents',
      description: 'AI agents that represent your brand online, drive sales, and increase ROI.'
    },
    {
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      title: 'Analytics & Insights',
      description: 'Detailed analytics and insights about customer interactions and sales performance.'
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
              AI Shop Assist
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Great in-store salespeople, but why leave eCommerce customers unsupported?
            </motion.p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact')}
              className="px-8"
            >
              Claim your FREE AI AGENT now!
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

      {/* CTA Section */}
      <Section bgLight="bg-primary-600" bgDark="bg-primary-700">
        <Container>
          <div className="text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to transform your online sales experience?
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

export default AIShopAssist 