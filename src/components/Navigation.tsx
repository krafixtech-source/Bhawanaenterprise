import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Calendar } from 'lucide-react'

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [logoSrc, setLogoSrc] = useState('/logo-light.png')
  const navigate = useNavigate()

  useEffect(() => {
    const checkTheme = () => {
      if (document.documentElement.classList.contains('light-mode')) {
        setLogoSrc('/logo.png');
      } else {
        setLogoSrc('/logo-light.png');
      }
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

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
        {/* Left: Floating Capsule menu links (hidden on mobile) */}
        <div className="flex-1 flex justify-start pointer-events-none">
          <div className="hidden xl:flex pointer-events-auto bg-black/35 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md items-center gap-6 text-[10px] uppercase tracking-[2px] font-bold text-brand-light">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Browse Properties</Link>
            <Link to="/about.html" className="hover:text-brand-bronze transition-colors">Our Story</Link>
            <Link to="/contact.html" className="hover:text-brand-bronze transition-colors">Contact</Link>
          </div>
        </div>

        {/* Center: Brand logo */}
        <div className="flex-shrink-0 flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <img 
                src={logoSrc} 
                alt="Bhawana Enterprises Logo" 
                className="h-7 sm:h-8 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity" 
              />
            </Link>
          </div>
        </div>

        {/* Right: Capsule Viewing Button & Menu Control */}
        <div className="flex-1 flex justify-end items-center gap-3 pointer-events-none">
          <Link
            to="/contact.html"
            className="bg-black/35 hover:bg-brand-light hover:text-brand-dark border border-white/10 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[2px] font-bold text-brand-light transition-all duration-300 backdrop-blur-md flex items-center gap-2 pointer-events-auto"
            data-cursor="BOOK"
          >
            <Calendar size={12} className="text-brand-bronze" />
            <span className="hidden sm:inline">Book a Viewing</span>
          </Link>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-light p-2.5 rounded-full transition-colors duration-300 shadow-lg flex items-center justify-center pointer-events-auto"
            data-cursor="MENU"
          >
            <Menu size={14} />
          </button>
        </div>
      </header>



      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div data-lenis-prevent className="fixed inset-0 w-full h-full bg-brand-dark/98 backdrop-blur-2xl z-[200] flex flex-col justify-start md:justify-between p-6 md:p-16 overflow-y-auto animate-fade-in transition-colors duration-1000">
          {/* Subtle gold decoration glow */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-bronze/10 rounded-full blur-[150px] pointer-events-none" />
          
          {/* Close Header */}
          <div className="flex justify-between items-center w-full relative z-10">
            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
              className="flex items-center"
            >
              <img 
                src={logoSrc} 
                alt="Bhawana Enterprises Logo" 
                className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity" 
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-brand-stone hover:text-brand-light transition-colors font-sans text-xs tracking-widest uppercase cursor-none"
              data-cursor="CLOSE"
            >
              <X size={16} className="text-brand-bronze" />
              <span>Close</span>
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mt-8 mb-12 md:my-auto py-6 md:py-12 relative z-10">
            {/* Left Column: Main Links (numbered luxury listing) */}
            <div className="md:col-span-7 flex flex-col gap-3 md:gap-6 items-start justify-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Story', path: '/about.html' },
                { name: 'Services', path: null, isServices: true },
                { name: 'Gallery', path: '/gallery.html' },
                { name: 'Contact', path: '/contact.html' },
                { name: 'Careers', path: '/career.html' }
              ].map((link, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                if (link.isServices) {
                  return (
                    <div key={idx} className="w-full">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="group flex items-baseline text-left font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-white hover:text-brand-bronze transition-all duration-300 transform hover:translate-x-3 cursor-none"
                        data-cursor="SELECT"
                      >
                        <span className="font-mono text-xs md:text-sm text-brand-bronze/70 mr-4 tracking-widest group-hover:text-brand-light transition-colors">{num} //</span>
                        Services
                        <ChevronDown
                          className={`ml-4 transition-transform duration-300 text-brand-bronze w-6 h-6 md:w-8 md:h-8 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Services Collapsible Container */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          servicesOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6 border-l border-brand-bronze/30 py-2">
                            {services.map((service, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => handleLinkClick(service.path)}
                                className="text-sm text-brand-stone hover:text-brand-light hover:translate-x-1 transition-all text-left py-1 cursor-none"
                                data-cursor="OPEN"
                              >
                                • {service.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.path!)}
                    className="group flex items-baseline text-left font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-white hover:text-brand-bronze transition-all duration-300 transform hover:translate-x-3 cursor-none"
                    data-cursor="SELECT"
                  >
                    <span className="font-mono text-xs md:text-sm text-brand-bronze/70 mr-4 tracking-widest group-hover:text-brand-light transition-colors">{num} //</span>
                    {link.name}
                  </button>
                )
              })}
            </div>

            {/* Right Column: Contact Details & Visual Info */}
            <div className="md:col-span-5 flex flex-col justify-center gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-brand-stone/10 pt-8 md:pt-0 md:pl-16">
              <div className="group">
                <h4 className="text-[10px] tracking-[4px] uppercase text-brand-bronze font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze animate-pulse"></span>
                  Corporate Office
                </h4>
                <p className="text-brand-stone text-sm leading-relaxed font-sans max-w-sm group-hover:text-brand-light transition-colors">
                  REALTY CHAMBER (BHAWANA ENTERPRISES),<br />
                  Malviya Nagar, Jaipur, Rajasthan 302017
                </p>
              </div>
              
              <div className="group">
                <h4 className="text-[10px] tracking-[4px] uppercase text-brand-bronze font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze animate-pulse"></span>
                  Direct Contact
                </h4>
                <a href="tel:+917599912345" className="block text-brand-white hover:text-brand-bronze text-2xl font-serif mb-2 transition-colors cursor-none" data-cursor="CALL">
                  +91 75999 12345
                </a>
                <a href="mailto:sales@bhawanaenterprises.com" className="block text-brand-stone hover:text-brand-light text-sm transition-colors cursor-none" data-cursor="MAIL">
                  sales@bhawanaenterprises.com
                </a>
              </div>
              
              <div className="group">
                <h4 className="text-[10px] tracking-[4px] uppercase text-brand-bronze font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze animate-pulse"></span>
                  Consultancy Hours
                </h4>
                <p className="text-brand-stone text-sm group-hover:text-brand-light transition-colors">Mon – Sun, 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-brand-stone/5 w-full text-xs text-brand-stone font-sans">
            <div>
              © 2026 Bhawana Enterprises. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/share/18KeQZ9bLm/" target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">Facebook</a>
              <a href="https://www.instagram.com/bhawana_enterprises" target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/prakash-choudhary-08994529a/" target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">LinkedIn</a>
              <a href="https://www.youtube.com/@Prakash_0089" target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Navigation
