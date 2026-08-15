import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export const Sell: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Property Sell
          </h1>
          <p className="text-brand-stone text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Maximize your asset's valuation with strategic marketing and structured negotiation in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">Expert Listing & Closing</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Selling real estate in Rajasthan requires local regulatory insights and a robust buyer network. At Bhawana Enterprises, we manage the complete listing process—from comparative valuation audits to JDA clearance audits and eventual deal closure.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              We coordinate directly with VIP buyers, developers, and investment syndicates, allowing you to finalize transactions without public market discounts or unnecessary broker chains.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">What We Manage</h3>
            <div className="flex flex-col gap-4">
              {[
                "Comparative Market Analysis (CMA) for pricing accuracy",
                "Direct marketing to pre-verified developers & HNI buyers",
                "Zoning verification & registry document coordination",
                "Transaction structure to optimize tax implications"
              ].map((bullet, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 size={16} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-brand-light leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full text-center pt-8">
          <Link
            to="/contact.html"
            className="inline-flex items-center gap-3 bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-light px-8 py-3.5 rounded-full transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
            data-cursor="CONTACT"
          >
            Sell Your Property
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Sell
