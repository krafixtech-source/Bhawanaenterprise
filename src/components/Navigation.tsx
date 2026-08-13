import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Calendar } from 'lucide-react'

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate()

  const services = [
    { name: 'Property Sell', path: '/sell.html' },
    { name: 'Property Rent & Lease', path: '/rent.html' },
    { name: 'Property Purchase', path: '/purchase.html' },
    { name: 'Property Exchange', path: '/exchange.html' },
    { name: 'Joint Venture', path: '/joint-venture.html' },
    { name: 'Residential Land', path: '/residential-property.html' },
    { name: 'Industrial Land', path: '/industrial-property.html' },
    { name: 'Commercial Land', path: '/commercial-property.html' },
    { name: 'Agricultural Land', path: '/agricultural-property.html' },
  ]

  const handleLinkClick = (path: string) => {
    setIsOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Header Container */}
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
        {/* Left: Brand logo */}
        <div className="pointer-events-auto">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img 
              src="/logo-light.png" 
              alt="Bhawana Enterprises Logo" 
              className="h-7 sm:h-8 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity" 
            />
          </Link>
        </div>

        {/* Center: Floating Capsule menu links (hidden on mobile) */}
        <div className="hidden lg:flex pointer-events-auto bg-black/35 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md items-center gap-6 text-[10px] uppercase tracking-[2px] font-bold text-brand-light">
          <Link to="/" className="hover:text-brand-bronze transition-colors">Browse Properties</Link>
          <Link to="/about.html" className="hover:text-brand-bronze transition-colors">Our Story</Link>
          <Link to="/contact.html" className="hover:text-brand-bronze transition-colors">Contact</Link>
        </div>

        {/* Right: Capsule Viewing Button & Menu Control */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link
            to="/contact.html"
            className="bg-black/35 hover:bg-brand-light hover:text-brand-dark border border-white/10 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[2px] font-bold text-brand-light transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            data-cursor="BOOK"
          >
            <Calendar size={12} className="text-brand-bronze" />
            <span className="hidden sm:inline">Book a Viewing</span>
          </Link>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-light p-2.5 rounded-full transition-colors duration-300 shadow-lg flex items-center justify-center"
            data-cursor="MENU"
          >
            <Menu size={14} />
          </button>
        </div>
      </header>



      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-luxury-dark/95 z-[200] flex flex-col justify-between p-8 md:p-16 overflow-y-auto animate-fade-in">
          {/* Close Header */}
          <div className="flex justify-between items-center w-full">
            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
              className="flex items-center"
            >
              <img 
                src="/logo-light.png" 
                alt="Bhawana Enterprises Logo" 
                className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity" 
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-sans text-xs tracking-widest uppercase"
              data-cursor="CLOSE"
            >
              <X size={16} />
              <span>Close</span>
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 my-auto py-12">
            {/* Left Column: Main Links */}
            <div className="flex flex-col gap-6 md:gap-8 items-start justify-center">
              <button
                onClick={() => handleLinkClick('/')}
                className="text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('/about.html')}
                className="text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
              >
                Our Story
              </button>
              
              {/* Dropdown Controller for Services */}
              <div className="w-full">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-4 text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
                >
                  Services
                  <ChevronDown
                    className={`transition-transform duration-300 text-luxury-gold w-8 h-8 md:w-12 md:h-12 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {/* Services Collapsible Container */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    servicesOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 border-l border-luxury-gold/30">
                      {services.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(service.path)}
                          className="text-sm md:text-base text-gray-400 hover:text-white transition-colors text-left py-1"
                        >
                          • {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleLinkClick('/gallery.html')}
                className="text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => handleLinkClick('/contact.html')}
                className="text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => handleLinkClick('/career.html')}
                className="text-4xl md:text-6xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
              >
                Careers
              </button>
            </div>

            {/* Right Column: Contact Details & Visual Info */}
            <div className="flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-16">
              <div>
                <h4 className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-2">Office Address</h4>
                <p className="text-white text-sm leading-relaxed font-sans max-w-sm">
                  REALTY CHAMBER (BHAWANA ENTERPRISES),<br />
                  Malviya Nagar, Jaipur, Rajasthan 302017
                </p>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-2">Direct Contact</h4>
                <a href="tel:+917599912345" className="block text-white hover:text-luxury-gold text-lg font-serif mb-1">
                  +91 75999 12345
                </a>
                <a href="mailto:sales@bhawanaenterprises.com" className="block text-gray-400 hover:text-white text-sm">
                  sales@bhawanaenterprises.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[4px] uppercase text-gray-500 mb-2">Consultancy Hours</h4>
                <p className="text-gray-400 text-sm">Mon – Sun, 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-white/5 w-full text-xs text-gray-500 font-sans">
            <div>
              © 2026 Bhawana Enterprises. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/share/18KeQZ9bLm/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/bhawana_enterprises" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/prakash-choudhary-08994529a/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.youtube.com/@Prakash_0089" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Navigation
