import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export const Residential: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Residential Land & Properties
          </h1>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Discover prime residential plots, luxury flats, and custom villas in Jaipur's most prestigious gated communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">Luxury Gated Living</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              We connect homeowners and investors directly to JDA-approved residential plots and luxury properties in Jaipur. Whether you are looking for a multistory apartment penthouse, a custom villa plot, or a family townhouse, our index features verified options.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Our legal advisors guide buyers through registry approvals, bank loan eligibility files, security protocols, and location potential forecasts.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">Residential Index</h3>
            <div className="flex flex-col gap-4">
              {[
                "Luxury flats & penthouses in central Jaipur",
                "JDA-approved residential plots in high-growth sectors",
                "Premium gated community villas with modern amenities",
                "Comprehensive registry checks & clear documentation support"
              ].map((bullet, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 size={16} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            to="/contact.html"
            className="inline-flex items-center gap-3 bg-white text-black hover:bg-luxury-gold hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
            data-cursor="CONTACT"
          >
            Find Residential Deals
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Residential
