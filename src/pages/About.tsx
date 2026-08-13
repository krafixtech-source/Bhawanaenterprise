import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ShieldCheck, FileSpreadsheet, Handshake } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">WHO WE ARE</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Established in 2006
          </h1>
          <p className="text-sm tracking-[2px] uppercase text-gray-400 mt-4">
            Bhawana Enterprises • Realty Chamber
          </p>
        </div>

        {/* History / Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-luxury-gold">
              End-to-End Real Estate Consultancy
            </h2>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Established in 2006, Bhawana Enterprises has been providing comprehensive real estate consultancy backed by strong negotiation tactics and structured deal management in Jaipur. From initial discussion to final closure, we ensure every land, residential, or commercial deal is handled with clarity, confidence, and complete accountability.
            </p>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Our long-standing position in the Rajasthan property ecosystem allows us to bypass public listing delays and connect buyers directly to prime, off-market opportunities. We do not just represent properties; we architect legal compliance, conduct thorough title searches, and manage balanced valuations to guarantee risk-free transactions.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-luxury-gold mb-6 uppercase tracking-wider">Our Core Commitments</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Rigorous Title Verification</h4>
                  <p className="text-xs text-gray-400">Zero legal risks. Every plot, flat, and land deed undergoes direct title analysis.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Handshake className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Empowered Negotiation</h4>
                  <p className="text-xs text-gray-400">Achieving balance. We represent your interest to obtain fair terms and values.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FileSpreadsheet className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Clear Documentation</h4>
                  <p className="text-xs text-gray-400">From joint-venture frameworks to deeds, everything is structured and registry-ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Checklist Banner */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Materials",
                desc: "Assisting only developers utilizing top-tier verified building materials."
              },
              {
                title: "Sustainable Designs",
                desc: "Consulting on modern properties that support ecological sustainability."
              },
              {
                title: "Prime Locations",
                desc: "Exclusive access to plots and villas in Jaipur's key growth sectors."
              },
              {
                title: "Transparent Valuation",
                desc: "Honest, broker-free negotiations based on accurate market assessments."
              }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <CheckCircle size={20} className="text-luxury-gold" />
                <h4 className="font-serif text-lg font-semibold">{value.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-white/10 py-12 mb-20">
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-luxury-gold">2006</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60">Year Established</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-luxury-gold">100%</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60">Title Compliance</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-luxury-gold">Jaipur</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60">Core Domain</span>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-6">Ready to secure your next Jaipur property?</h3>
          <Link
            to="/contact.html"
            className="inline-flex items-center gap-3 bg-white text-black hover:bg-luxury-gold hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
            data-cursor="CONTACT"
          >
            Connect with our Consultants
          </Link>
        </div>

      </div>
    </div>
  )
}
export default About
