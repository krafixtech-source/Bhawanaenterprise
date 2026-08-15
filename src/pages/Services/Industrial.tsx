import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export const Industrial: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Industrial Land & Warehouses
          </h1>
          <p className="text-brand-stone text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Acquire strategically located industrial plots, manufacturing plants, and warehousing facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">Logistical & Production Hubs</h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Setting up manufacturing or logistics operations in Rajasthan requires appropriate industrial zoning and road connectivity. We consult on RIICO plots, warehouses, and factories located near major corridors.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              We handle the complex documentation required for industrial transfers, environmental clearances, layout approvals, and power line allocation coordination.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">Industrial Directory</h3>
            <div className="flex flex-col gap-4">
              {[
                "RIICO-approved industrial plots in Jaipur hubs",
                "High-capacity storage warehouses & distribution centers",
                "Manufacturing plants with established power/water connections",
                "Assistance with RIICO transfers, registries, and zoning codes"
              ].map((bullet, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 size={16} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-brand-light leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            to="/contact.html"
            className="inline-flex items-center gap-3 bg-white text-black hover:bg-luxury-gold hover:text-brand-light px-8 py-3.5 rounded-full transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
            data-cursor="CONTACT"
          >
            Find Industrial Deals
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Industrial
