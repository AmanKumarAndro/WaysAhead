import { motion, AnimatePresence } from 'framer-motion'
import { Section, Container, Button } from '../components/shared'
import { useNavigate } from 'react-router-dom'
import { HiOutlineClipboardCheck, HiOutlineDocumentSearch, HiOutlineLightningBolt, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useState } from 'react'

const Idea2MVP = () => {
  const navigate = useNavigate()
  const [currentPackage, setCurrentPackage] = useState(0)

  const steps = [
    {
      id: '01',
      title: 'Due Diligence',
      description: 'This step ensures the selection of the best ideas through a dedicated screening process.',
      icon: <HiOutlineClipboardCheck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: '02',
      title: 'Discovery Report',
      description: 'This step involves developing the discovery report to help companies understand the feasibility, scaling factor, and other aspects that make the business idea a strong proposition.',
      icon: <HiOutlineDocumentSearch className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: '03',
      title: 'MVP Development',
      description: 'This stage is when the participant realizes their potential business idea as a real-life product that can be interacted with.',
      icon: <HiOutlineLightningBolt className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const packages = [
    {
      title: 'GOLD',
      duration: '1-2 Weeks',
      features: ['Due Diligence & Onboarding'],
      description: 
        'Startup due diligence is a part of the investment process that helps investors, ' +
        'usually business angels or VC funds, to reduce risks involved in the transaction ' +
        'by verifying information provided in the startup pitch deck, assessing business ' +
        'and market potential, financial statements and forecasts, legal documents and all sorts of risks.',
      image: "https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: 'DIAMOND',
      duration: '2-4 Weeks',
      features: ['Includes Gold +', 'Product Discovery and Market Fit Analysis'],
      description: 
        'Product-market fit is important because businesses must know whether they have ' +
        'a product with market appeal before they dive into the production phase. ' +
        'Investing funds into developing goods nobody is looking for, or which are ' +
        'inferior to existing products, is a waste of money and time.',
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: 'PLATINUM',
      duration: '12-16 Weeks', 
      features: ['Includes Diamond +', 'MVP Development'],
      description: 
        'To get early feedback from end users and prove the feasibility of the project, ' +
        'we build a minimum viable product for your onboarded startups. This iterative ' +
        'process will allow your team to learn how the target audience of startups ' +
        'responds to the product\'s core business purpose.',
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % packages.length)
  }

  const prevPackage = () => {
    setCurrentPackage((prev) => (prev - 1 + packages.length) % packages.length)
  }

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
              Idea2MVP
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-300 mb-8"
            >
              Foundations are important to grow fast. Our typical engagement with a startup 
              would involve helping the business take their Idea2MVP and beyond. We help 
              put in place all kinds of due diligence around founder vesting documents thus 
              facilitating the incubation or acceleration of the startup.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Steps Section */}
      <Section>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            3 Steps towards a successful MVP
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 mb-4 bg-accent-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{step.id}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-200 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Market Fit Section */}
      <Section bgLight="bg-gray-50" bgDark="bg-gray-800/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              "Every Idea is Worth an MVP"
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              All You Need is to Discover the Right Market Fit
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Packages Section */}
      <Section>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Packages Offered
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPackage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={packages[currentPackage].image}
                      alt={packages[currentPackage].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-3xl font-bold text-accent-500 mb-2">
                      {packages[currentPackage].title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {packages[currentPackage].duration}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {packages[currentPackage].features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                      {packages[currentPackage].description}
                    </p>
                    <Button
                      variant="accent"
                      onClick={() => navigate('/contact')}
                      className="w-full border-2 border-accent-500 hover:border-accent-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                      whileHover={{
                        boxShadow: "0 0 15px rgba(var(--color-accent-500), 0.5)"
                      }}
                      whileTap={{
                        scale: 0.95
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={prevPackage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextPackage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Idea2MVP