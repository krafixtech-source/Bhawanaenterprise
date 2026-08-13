import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export const Purchase: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Property Purchase
          </h1>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Acquire pre-verified flats, luxury villas, and prime plots in Jaipur with absolute title security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">Secure Strategic Acquisitions</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Finding the right plot or apartment in Jaipur can be complex without verified listings. We filter properties by JDA approvals, RERA compliance, title safety, and clear zoning registries.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              We guide you through property selection, private site walkthroughs, structural assessment coordination, registry files, and official deed transfers.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">Purchase Protocols</h3>
            <div className="flex flex-col gap-4">
              {[
                "Target property matching based on budget & location profile",
                "Full JDA/RERA compliance and history checks",
                "Direct negotiation with sellers to prevent broker bloating",
                "Complete registry and deed transfer legal management"
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
            Find a Property
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Purchase
