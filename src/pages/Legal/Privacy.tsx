import React from 'react'

export const Privacy: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
        <span className="text-[9px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">LEGAL PROTOCOLS</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="flex flex-col gap-6 text-xs text-gray-300 leading-relaxed">
          <p>Last updated: August 12, 2026</p>
          
          <h2 className="font-serif text-lg font-bold text-white mt-4">1. Information Collection</h2>
          <p>
            We collect personal information necessary to offer structured real estate consultancy services, including your name, telephone number, email address, property parameters, financial target brackets, and verification deeds when you fill out forms on this website or consult with our advisors directly.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">2. Utilization of Data</h2>
          <p>
            The collected information is solely utilized to process property acquisitions, valuation listings, registry procedures, coordinate with developer projects (e.g. Ashiana Housing, Mahima Group, etc.), and send required legal updates or newsletters. We do not sell or lease client details to third-party marketing companies.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">3. Document Confidentiality</h2>
          <p>
            Any legal records, JDA title histories, registry papers, and financial drafts shared with Bhawana Enterprises (Realty Chamber) are treated with the highest degree of confidentiality and are only disclosed to legal registry officials or strategic developers under client authorization.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">4. Cookies and Analytical Trackers</h2>
          <p>
            Our platform uses cookies and browser tracking to monitor visitor activity, optimize layout responsiveness, and improve search results. You can configure your browser to reject cookies, though some interactive elements might scale differently.
          </p>

          <h2 className="font-serif text-lg font-bold text-white mt-4">5. Contact Information</h2>
          <p>
            For any queries regarding this Privacy Policy or to request removal of your personal information from our databases, contact us at:
            <br />
            Email: sales@bhawanaenterprises.com
            <br />
            Address: REALTY CHAMBER (BHAWANA ENTERPRISES), Malviya Nagar, Jaipur, Rajasthan 302017
          </p>
        </div>
      </div>
    </div>
  )
}
export default Privacy
