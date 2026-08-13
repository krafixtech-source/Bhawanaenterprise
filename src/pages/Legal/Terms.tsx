import React from 'react'

export const Terms: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
        <span className="text-[9px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">LEGAL PROTOCOLS</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="flex flex-col gap-6 text-xs text-gray-300 leading-relaxed">
          <p>Last updated: August 12, 2026</p>
          
          <h2 className="font-serif text-lg font-bold text-white mt-4">1. Scope of Service</h2>
          <p>
            Bhawana Enterprises (Realty Chamber) provides real estate consultancy services in Jaipur, India. We assist buyers, sellers, and developers in matching properties, coordinating site visits, conducting negotiations, and organizing documentation. We are not a direct property developer or primary constructor.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">2. Accuracy of Material</h2>
          <p>
            While we conduct preliminary legal analysis and inspect title deeds, property buyers are advised to perform independent verifications of JDA approvals, registry status, and structural compliance before final payment. We are not liable for developer delay or unforeseen zoning modifications by authorities.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">3. Consultancy Compensation</h2>
          <p>
            Consultancy fees, brokerage percentages, and joint-venture structure terms are transacted under separate, written, signed agreements. By engaging our services, you agree to compensate Bhawana Enterprises in accordance with the transaction terms agreed upon prior to deal execution.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">4. Intellectual Property</h2>
          <p>
            All layout structures, custom designs, SVG assets, and text content featured on this website are owned by Bhawana Enterprises or licensed from authors. Unauthorized copy, cloning, or distribution of code is prohibited.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">5. Dispute Jurisdiction</h2>
          <p>
            Any disputes arising from transactions, consultation, or use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Terms
