import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      navigate('/thankyou.html')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-luxury-dark text-white border-t border-white/5 pt-20 pb-8 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" onClick={handleLinkClick} className="block mb-6">
                <img 
                  src="/logo-light.png" 
                  alt="Bhawana Enterprises Logo" 
                  className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
                />
              </Link>
              <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed font-sans">
                Jaipur's trusted consultancy for buying, selling, and strategic real estate investments. From negotiation to successful deal execution, we closing premium opportunities transparently.
              </p>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="max-w-md">
              <h4 className="text-xs uppercase tracking-[3px] text-luxury-gold font-bold mb-3">Newsletter</h4>
              <p className="text-gray-400 text-xs mb-4">Subscribe for exclusive off-market listings, project updates, and market insights.</p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pr-12 text-sm text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors duration-300 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2 bg-luxury-gold hover:bg-white text-black hover:text-black w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                  data-cursor="SUBSCRIBE"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[3px] text-gray-400 font-bold mb-2">Quick Links</h4>
            <Link to="/" onClick={handleLinkClick} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Home</Link>
            <Link to="/about.html" onClick={handleLinkClick} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Our Story</Link>
            <Link to="/gallery.html" onClick={handleLinkClick} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Gallery</Link>
            <Link to="/contact.html" onClick={handleLinkClick} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Contact</Link>
            <Link to="/career.html" onClick={handleLinkClick} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Careers</Link>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 lg:col-start-9 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-[3px] text-gray-400 font-bold mb-2">Our Services</h4>
            <Link to="/sell.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Property Sell</Link>
            <Link to="/rent.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Property Rent & Lease</Link>
            <Link to="/purchase.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Property Purchase</Link>
            <Link to="/exchange.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Property Exchange</Link>
            <Link to="/joint-venture.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Joint Venture</Link>
            <Link to="/residential-property.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Residential Land</Link>
            <Link to="/industrial-property.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Industrial Land</Link>
            <Link to="/commercial-property.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Commercial Land</Link>
            <Link to="/agricultural-property.html" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors text-xs">• Agricultural Land</Link>
          </div>
        </div>

        {/* Big Footer Highlight */}
        <div className="border-t border-white/5 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-sans">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy.html" onClick={handleLinkClick} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms.html" onClick={handleLinkClick} className="hover:text-white transition-colors">Terms & Conditions</Link>
            <a href="mailto:info@msmcoretech.com" className="hover:text-white transition-colors">info@msmcoretech.com</a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-1">© 2026 Bhawana Enterprises. All rights reserved.</p>
            <p>
              Designed & Developed by{' '}
              <a href="https://www.realtychamber.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-luxury-gold transition-colors font-semibold">
                Realty Chamber
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
