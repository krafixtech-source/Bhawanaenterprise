import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export const Exchange: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Property Exchange
          </h1>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Smooth property-to-property swaps with balanced valuation models and absolute legal compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">Balanced Asset Swapping</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Swapping assets requires balanced valuation and deep tax advisory. We structure exchange agreements that allow clients to trade lands, flats, or commercial spaces transparently.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              We coordinate independent market audits to confirm the value of both properties, managing any differences in value and protecting capital gains where applicable.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">Exchange Checklist</h3>
            <div className="flex flex-col gap-4">
              {[
                "Comparative market analysis of both properties",
                "Structured exchange deal contract framing",
                "Tax implication advisory to handle capital gains",
                "Dual title transfer and registration coordination"
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
            Structure an Exchange
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Exchange
