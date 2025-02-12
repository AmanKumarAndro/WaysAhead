import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const knowledgeBase = {
    greeting: {
      response: `Hello! How can I assist you today? Feel free to ask me anything about our services or company.`,
      keywords: ['hi', 'hello', 'greetings', 'hey']
    },
    aiShopAssist: {
      response: `Our AI Shop Assist solution:
      • B2B solution for eCommerce portals
      • Brand-representative AI agents
      • Increases ROI through 24/7 support
      <Link to="/ai-shop-assist" class="text-blue-500 underline">Claim your FREE AI AGENT</Link>`,
      keywords: ['ai shop', 'ecommerce', 'marketplace', 'online support']
    },
    geoAnalytics: {
      response: `Geo Spatial Analytics features:
      • Location intelligence
      • Revenue & footfall prediction
      • Competitor impact analysis
      • Heatmap visualizations for customer behavior
      <Link to="/geo-spatial-analytics" class="text-blue-500 underline">Start FREE TRIAL</Link>`,
      keywords: ['location', 'geo', 'footfall', 'competitor']
    },
    retailAnalytics: {
      response: `Retail Analytics solutions:
      • POS analytics
      • Market Basket Analysis (MBA)
      • Store Loss Prevention (SLP)
      • Customer segmentation and targeting
      <Link to="/in-store-analytics" class="text-blue-500 underline">Get FREE DEMO</Link>`,
      keywords: ['retail', 'pos', 'store analytics', 'mba']
    },
    scmAnalytics: {
      response: `SCM Analytics capabilities:
      • Shipment TAT analysis
      • Warehousing optimization
      • Reverse logistics tracking
      • Supplier performance evaluation
      <Link to="/scm-analytics" class="text-blue-500 underline">Speak with our Team</Link>`,
      keywords: ['supply chain', 'scm', 'logistics', 'warehousing']
    },
    videoAnalytics: {
      response: `Video Analytics solutions:
      • In-store customer profiling
      • Dwell time analysis
      • Revenue mapping
      • Real-time surveillance and alerts
      <Link to="/video-analytics" class="text-blue-500 underline">Activate FREE VMS</Link>`,
      keywords: ['video analytics', 'vms', 'customer tracking', 'dwell time']
    },
    companyInfo: {
      response: `WaysAhead Global:
      • Singapore-based since 2020
      • 12+ countries served
      • Digital transformation experts
      • Award-winning solutions in AI and analytics
      <Link to="/about" class="text-blue-500 underline">About Us</Link> | 
      <Link to="/careers" class="text-blue-500 underline">Careers</Link>`,
      keywords: ['company', 'about', 'history', 'team']
    },
    contactInfo: {
      response: `Contact us:
      • Singapore: 68 Circular Road
      • UAE: Al Hamra RAKEZ
      • <a href="mailto:info@waysaheadglobal.com" class="text-blue-500 underline">Email</a>
      • <Link to="/contact" class="text-blue-500 underline">Full Contact Details</Link>`,
      keywords: ['contact', 'email', 'phone', 'location']
    },
    industryTrends: {
      response: `Stay updated with the latest industry trends:
      • AI and machine learning advancements
      • The rise of eCommerce and digital marketplaces
      • Importance of data-driven decision making
      <Link to="/industry-trends" class="text-blue-500 underline">Explore Trends</Link>`,
      keywords: ['trends', 'industry', 'news', 'updates']
    },
    customerSuccess: {
      response: `Our customer success stories:
      • Increased sales for a retail client by 30% using our analytics
      • Improved operational efficiency for a logistics company
      • Enhanced customer engagement through AI solutions
      <Link to="/success-stories" class="text-blue-500 underline">Read More</Link>`,
      keywords: ['success', 'case studies', 'testimonials', 'clients']
    },
    productUpdates: {
      response: `Check out our latest product updates:
      • New features in AI Shop Assist
      • Enhanced analytics dashboard for better insights
      • Integration with popular eCommerce platforms
      <Link to="/product-updates" class="text-blue-500 underline">View Updates</Link>`,
      keywords: ['updates', 'features', 'products', 'news']
    },
    support: {
      response: `Need help? Our support team is here for you:
      • 24/7 customer support available
      • Comprehensive knowledge base and FAQs
      • Live chat support for immediate assistance
      <Link to="/support" class="text-blue-500 underline">Get Support</Link>`,
      keywords: ['support', 'help', 'assistance', 'faq']
    },
    generalQuestions: {
      response: `Here are some common questions I can help with:
      • What services do you offer?
      • How can I get in touch with support?
      • What are your business hours?
      • Can I schedule a demo?
      <Link to="/faq" class="text-blue-500 underline">Visit our FAQ page for more information</Link>`,
      keywords: ['services', 'support', 'business hours', 'demo', 'faq']
    },
    creatorInfo: {
      response: `I am Aman Kumar, a B.Tech student from Jharkhand, currently studying at UEM Jaipur. Feel free to ask me anything!`,
      keywords: ['creator', 'aman kumar', 'about me', 'who are you']
    },
    default: {
      response: `I specialize in WaysAhead Global's solutions. Ask about:
      <div class="grid grid-cols-2 gap-2 mt-2">
        <a href="/ai-shop-assist" class="text-blue-500 underline">AI Shop Assist</a>
        <a href="/geo-spatial-analytics" class="text-blue-500 underline">Geo Analytics</a>
        <a href="/scm-analytics" class="text-blue-500 underline">SCM Analytics</a>
        <a href="/video-analytics" class="text-blue-500 underline">Video Analytics</a>
        <a href="/retail-analytics" class="text-blue-500 underline">Retail Analytics</a>
        <a href="/industry-trends" class="text-blue-500 underline">Industry Trends</a>
        <a href="/success-stories" class="text-blue-500 underline">Customer Success</a>
        <a href="/product-updates" class="text-blue-500 underline">Product Updates</a>
        <a href="/support" class="text-blue-500 underline">Support</a>
      </div>`,
      keywords: []
    }
  };

  const findResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Match exact service names from website
    const serviceMatch = Object.entries(knowledgeBase).find(([_, service]) =>
      service.keywords.some(keyword => 
        new RegExp(`\\b${keyword}\\b`, 'i').test(lowerQuery)
      )
    );

    if (serviceMatch) return serviceMatch[1].response;

    // Match partial keywords from website content
    const websiteKeywords = [
      'digital transformation', 'phygital', 'data analytics',
      'business intelligence', 'low carbon mobility', 'merchandising'
    ];
    
    const partialMatch = websiteKeywords.find(keyword =>
      lowerQuery.includes(keyword)
    );

    if (partialMatch) {
      return `Our ${partialMatch} solutions: <Link to="/${partialMatch.replace(/ /g, '-')}" class="text-blue-500 underline">Learn More</Link>`;
    }

    // Log unresolved question
    axios.post(`${API_BASE_URL}/api/chat-logs`, {
      message: query,
      response: 'UNRESOLVED',
      unresolved: true
    });

    return knowledgeBase.default.response;
  };

  const handleSend = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setShowAuthPrompt(true);
      return;
    }

    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    try {
      // Get user ID from token
      const userData = JSON.parse(atob(token.split('.')[1]));
      
      // Save chat log to backend
      const logResponse = await axios.post(`${API_BASE_URL}/api/chat-logs`, {
        userId: userData.id,
        message: input,
        response: 'PENDING'
      });

      const response = findResponse(input);
      const botMessage = { 
        text: response,
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Update chat log with actual response
      await axios.patch(`${API_BASE_URL}/api/chat-logs/${logResponse.data._id}`, {
        response: response,
        unresolved: response === knowledgeBase.default.response
      });

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = { 
        text: `Error saving conversation. Please try again.`,
        isBot: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <FaRobot className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-gray-300 rounded-lg shadow-xl"
          >
            {showAuthPrompt && (
              <div className="bg-yellow-100 p-4 text-center">
                <FaUserLock className="mx-auto mb-2" />
                <p>Please <Link to="/login" className="text-blue-500 underline">login</Link> to chat</p>
              </div>
            )}

            <div className="h-64 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-blue-600 text-white'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
              ))}
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about WaysAhead..."
                  className="flex-1 p-2 border rounded-lg dark:bg-gray-100 dark:border-gray-700"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPaperPlane className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
