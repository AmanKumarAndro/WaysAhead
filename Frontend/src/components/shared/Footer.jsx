import { Link } from 'react-router-dom'
import { footerData } from '../../data/footerData'
import { Container } from './'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Addresses */}
          <div className="lg:col-span-2 space-y-8">
            {Object.values(footerData.addresses).map((location) => (
              <div key={location.title} className="flex items-center">
                <img src={location.image} alt={location.title} className="h-4 w-auto mr-2" />
                <div>
                  <h6 className="text-sm font-semibold mb-2 text-gray-400">
                    {location.title}
                  </h6>
                  <p className="text-sm text-gray-300 whitespace-pre-line">
                    {location.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          {Object.values(footerData.links).map((section) => (
            <div key={section.title}>
              <h6 className="text-sm font-semibold mb-4 text-gray-400">
                {section.title}
              </h6>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/images/waysahead-logo.png" 
                alt="WaysAhead Global" 
                className="h-8"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Copyright WaysAhead Global.
              </p>
              <Link 
                to="/privacy" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 