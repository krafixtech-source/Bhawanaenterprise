import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Handshake, PieChart, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react'

export const JointVenture: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-light font-sans relative z-40">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex items-center justify-center">
        <img
          src="/service-jv.png"
          alt="Joint Venture Development Blueprint Model"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-20">
          <span className="text-[10px] tracking-[5px] text-brand-bronze font-bold uppercase block mb-3 font-mono">
            CONSULTANCY CATEGORY 05
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-wide text-brand-white leading-tight mb-4">
            Joint Venture & Builder Alliances
          </h1>
          <p className="text-brand-stone text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Strategic profit-sharing development partnerships between land owners and top-tier builders in Jaipur to maximize land monetization.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Metric Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 border-y border-brand-stone/10 py-10">
          <div className="text-center p-4">
            <Handshake className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">50+</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">JV Projects Structured</span>
          </div>
          <div className="text-center p-4">
            <PieChart className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">Balanced</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">Area Ratio Splits</span>
          </div>
          <div className="text-center p-4">
            <ShieldCheck className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">100%</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">Equity Legal Protection</span>
          </div>
          <div className="text-center p-4">
            <CheckCircle2 className="mx-auto text-brand-bronze mb-2" size={28} />
            <span className="block font-serif text-2xl font-bold text-brand-white">Top 10</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono">Jaipur Developer Network</span>
          </div>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[10px] tracking-[3px] text-brand-bronze font-bold uppercase font-mono">
              LANDOWNER & BUILDER ALLIANCES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-white leading-snug">
              Maximize Asset Valuation with Structured Joint Ventures
            </h2>
            <p className="text-xs md:text-sm text-brand-stone leading-relaxed">
              Joint ventures allow landowners to monetize prime plots by partnering with top-tier construction developers. Bhawana Enterprises structures these JVs to protect the owner's equity while establishing clear developmental deadlines.
            </p>
            <p className="text-xs md:text-sm text-brand-stone leading-relaxed">
              We guide you through draft agreements, ratio splits (50:50 or 60:40 area allocation), power of attorney limitations, allocation mapping, and compliance with the Jaipur Development Authority (JDA).
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://wa.me/917599912345?text=Hello%20Bhawana%20Enterprises%2C%20I%20am%20interested%20in%20a%20Joint%20Venture%20Proposal%20for%20my%20land."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <MessageSquare size={16} /> WhatsApp Proposal
              </a>
              <Link
                to="/contact.html"
                className="inline-flex items-center gap-2 border border-brand-stone/30 hover:border-brand-bronze text-brand-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              >
                Propose JV Deal <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-brand-stone/20 shadow-2xl relative aspect-[4/3]">
              <img
                src="/service-jv.png"
                alt="Joint Venture Development Blueprint Model"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-[9px] uppercase tracking-widest text-brand-bronze font-mono font-bold">Development Partnership</span>
                <span className="text-lg font-serif font-bold text-white">Landowner & Developer Masterplan JV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Protocols Card Grid */}
        <div className="bg-brand-charcoal rounded-3xl p-8 md:p-12 border border-brand-stone/10 mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase font-mono block mb-2">JV DELIVERABLES</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-white">Joint Venture Structuring Matrix</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Fair Area-Allocation & Revenue Split",
                desc: "Calculating precise built-up area sharing ratios based on land appraisal value vs construction cost metrics."
              },
              {
                title: "Developer Track Record Audit",
                desc: "Rigorous vetting of builder financial stability, past project delivery timelines, and construction quality."
              },
              {
                title: "Power of Attorney (POA) Protection",
                desc: "Drafting bulletproof JV agreements with strict POA clauses ensuring the landowner retains core land ownership."
              },
              {
                title: "JDA & RERA Approval Coordination",
                desc: "Assisting joint ventures through JDA map approvals, RERA registrations, and environmental NOC clearances."
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
export default JointVenture
