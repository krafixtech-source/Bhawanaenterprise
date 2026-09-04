import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, KeyRound, FileText, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react'

export const Rent: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-light font-sans relative z-40">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex items-center justify-center">
        <img
          src="/service-rent.png"
          alt="Jaipur Luxury Penthouse & Workspace Rental Leasing"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-20">
          <span className="text-[10px] tracking-[5px] text-brand-bronze font-bold uppercase block mb-3 font-mono">
            CONSULTANCY CATEGORY 06
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-wide text-brand-white leading-tight mb-4">
            Rent & Institutional Leasing
          </h1>
          <p className="text-brand-stone text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Secure high-grade corporate tenants, long-term commercial leases, and luxury residential tenancy agreements across Jaipur.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Metric Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 border-y border-brand-stone/10 py-10">
          <div className="text-center p-4">
            <KeyRound className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">300+</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">Active Leases Managed</span>
          </div>
          <div className="text-center p-4">
            <FileText className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">Locked</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">3–9 Year Lock-ins</span>
          </div>
          <div className="text-center p-4">
            <ShieldCheck className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">Vetted</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">Corporate Tenants</span>
          </div>
          <div className="text-center p-4">
            <CheckCircle2 className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">Escalation</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">15% Every 3 Years</span>
          </div>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[10px] tracking-[3px] text-brand-bronze font-bold uppercase font-mono">
              LEASING & TENANCY SOLUTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-white leading-snug">
              Institutional Grade Leasing & Tenancy Management
            </h2>
            <p className="text-xs md:text-sm text-brand-stone leading-relaxed">
              Renting commercial complexes, warehouses, or luxury flats in Jaipur demands structured tenancy parameters. We verify candidates, draft custom lease deeds, and manage handovers to protect property condition and revenue stream.
            </p>
            <p className="text-xs md:text-sm text-brand-stone leading-relaxed">
              For commercial developers, we structure long-term institutional leases with clear rent escalation clauses tailored to inflation and market growth indicators.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://wa.me/917599912345?text=Hello%20Bhawana%20Enterprises%2C%20I%20want%20to%20lease%20out%20my%20property%20or%20find%20a%20rental."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <MessageSquare size={16} /> WhatsApp Leasing Desk
              </a>
              <Link
                to="/contact.html"
                className="inline-flex items-center gap-2 border border-brand-stone/30 hover:border-brand-bronze text-brand-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              >
                Lease Property <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-brand-stone/20 shadow-2xl relative aspect-[4/3]">
              <img
                src="/service-rent.png"
                alt="Jaipur Luxury Penthouse Rental Layout"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-[9px] uppercase tracking-widest text-brand-bronze font-mono font-bold">Premium Tenancy</span>
                <span className="text-lg font-serif font-bold text-white">Luxury Penthouse & Office Workspace Leases</span>
              </div>
            </div>
          </div>
        </div>

        {/* Protocols Card Grid */}
        <div className="bg-brand-charcoal rounded-3xl p-8 md:p-12 border border-brand-stone/10 mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase font-mono block mb-2">LEASING CHECKLIST</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-white">Tenancy Management Matrix</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Vetted Corporate Tenant Screening",
                desc: "Rigorously screening background, financial credentials, and corporate identity for high-profile tenants."
              },
              {
                title: "Bulletproof Lease Agreements",
                desc: "Drafting registered lease deeds with lock-in terms, maintenance division, and clear security deposit clauses."
              },
              {
                title: "Commercial Rent Escalation Terms",
                desc: "Structuring long-term commercial lease agreements with scheduled 15% rent increases every 36 months."
              },
              {
                title: "Property Handover & Exit Inspection",
                desc: "Managing inventory logs, condition reports, security deposit releases, and seamless tenant handovers."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-brand-dark/60 border border-brand-stone/10 rounded-2xl p-6 hover:border-brand-bronze transition-colors">
                <span className="font-serif text-2xl font-bold text-brand-bronze block mb-2">0{idx + 1}</span>
                <h4 className="font-serif text-lg font-bold text-brand-white mb-2">{card.title}</h4>
                <p className="text-xs text-brand-stone leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
export default Rent
