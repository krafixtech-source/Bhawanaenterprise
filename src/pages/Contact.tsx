import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, Plus, Minus } from 'lucide-react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Request',
    message: '',
  })
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/thankyou.html')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const faqData = [
    { q: "What types of properties do you offer?", a: "We consult on a comprehensive catalog of real estate properties across Jaipur, including residential plots, luxury flats, high-end villas, commercial office spaces, shops, hotels, hospitals, industrial plots, warehouses, and fertile agricultural land." },
    { q: "Do you handle sale, purchase, and rental?", a: "Yes. Bhawana Enterprises provides end-to-end consultancy for buying a property, selling a property, renting/leasing residential or commercial spaces, and handling balanced property-to-property exchanges." },
    { q: "Are you a broker or consultant?", a: "We act as strategic real estate consultants. Beyond matching buyers and sellers, we manage negotiation, project planning, risk mitigation, joint venture coordination, and complete legal documentation to close deals securely." },
    { q: "Do you assist with joint ventures?", a: "Absolutely. We specialize in structured joint ventures between developers and landowners, as well as high-value industrial, agricultural, and off-market commercial acquisitions." },
    { q: "How do you charge?", a: "Our consultancy fee is transaction-specific, structured transparently and agreed upon prior to engagement. There are no hidden fees or surprise costs at closing." }
  ]

  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-light pt-32 pb-24 font-sans relative z-40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide text-brand-white">
            Contact Us
          </h1>
          <p className="text-brand-stone text-sm mt-4">
            Consult Jaipur's trusted real estate advisors
          </p>
        </div>

        {/* Contact details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="font-serif text-2xl font-semibold mb-2 text-brand-white">Office Directory</h2>
            
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="text-brand-bronze flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1 text-brand-white">Corporate Address</h4>
                  <p className="text-xs text-brand-stone leading-relaxed">
                    REALTY CHAMBER (BHAWANA ENTERPRISES),<br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4">
                <Phone className="text-brand-bronze flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1 text-brand-white">Direct Call</h4>
                  <a href="tel:+917599912345" className="text-sm font-serif text-brand-bronze hover:text-brand-white transition-colors block mb-1">
                    +91 75999 12345
                  </a>
                  <p className="text-[10px] text-brand-stone font-mono">Mobile / WhatsApp Available</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-brand-bronze flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1 text-brand-white">Electronic Support</h4>
                  <a href="mailto:sales@bhawanaenterprises.com" className="text-xs text-brand-stone hover:text-brand-light transition-colors block mb-1">
                    sales@bhawanaenterprises.com
                  </a>
                  <a href="mailto:info@msmcoretech.com" className="text-xs text-brand-stone hover:text-brand-light transition-colors block">
                    info@msmcoretech.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="text-brand-bronze flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1 text-brand-white">Consultancy Hours</h4>
                  <p className="text-xs text-brand-stone leading-relaxed">
                    Monday – Sunday: 8:00 AM – 8:00 PM<br />
                    <span className="text-[10px] text-brand-bronze font-bold uppercase tracking-widest mt-1 block">Registry Desk Open All Week</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-charcoal border border-brand-stone/10 rounded-3xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold mb-2 text-brand-white font-serif">Schedule a Consultation</h3>
              <p className="text-xs text-brand-stone mb-8">Please detail your property type, budget, and location preference. Our registry advisors will prepare relevant listings prior to call.</p>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-dark/50 border border-brand-stone/10 rounded-xl px-4 py-3 text-xs text-brand-light focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-dark/50 border border-brand-stone/10 rounded-xl px-4 py-3 text-xs text-brand-light focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-dark/50 border border-brand-stone/10 rounded-xl px-4 py-3 text-xs text-brand-light focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Consultation Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-brand-dark/50 border border-brand-stone/10 rounded-xl px-4 py-3 text-xs text-brand-light focus:outline-none focus:border-brand-bronze"
                  >
                    <option value="Consultation Request" className="bg-brand-dark text-brand-light">General Consultation Request</option>
                    <option value="Buy Property" className="bg-brand-dark text-brand-light">Purchase / Acquisition Deal</option>
                    <option value="Sell Property" className="bg-brand-dark text-brand-light">Sell / Valuation Listing</option>
                    <option value="Joint Venture" className="bg-brand-dark text-brand-light">Joint Venture Proposal</option>
                    <option value="Rent Lease" className="bg-brand-dark text-brand-light">Rental or Lease Arrangement</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Message Details</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify property type (Plot, Flat, Villa, Industrial), target budget, and specific location..."
                    className="w-full bg-brand-dark/50 border border-brand-stone/10 rounded-xl px-4 py-3 text-xs text-brand-light focus:outline-none focus:border-brand-bronze resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="sm:col-span-2 w-full bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-light py-3.5 rounded-xl transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 cursor-none"
                  data-cursor="SUBMIT"
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SECTION 16 — TESTIMONIALS (moved from Home) */}
        <section className="py-20 bg-brand-charcoal rounded-3xl border border-brand-stone/10 p-8 md:p-12 mb-20 relative z-40">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">CLIENT ENDORSEMENTS</span>
            <h2 className="text-3xl font-serif mb-16 text-brand-white">Endorsements</h2>

            <div className="flex flex-col gap-12 text-left">
              {[
                { text: "Bhawana Enterprises handled our residential property sale with complete professionalism. Clear communication, accurate valuation, and rapid deal closure.", client: "Ramlal Narwani", role: "RESIDENTIAL PROPERTY SELLER · JAIPUR" },
                { text: "Transparent communication, strong follow-up, and timely coordination. They made purchasing our commercial space simple and zero-risk.", client: "Devendra Sharma", role: "COMMERCIAL PROPERTY BUYER · JAIPUR" },
                { text: "We consulted Bhawana Enterprises for a land transaction. Their local registry knowledge and negotiation capabilities saved us time and resources.", client: "Priyanka Mehta", role: "AGRICULTURAL TRANSACTION · JAIPUR" }
              ].map((test, idx) => (
                <div key={idx} className="border-l-2 border-brand-bronze/40 pl-6 py-2">
                  <p className="text-brand-light font-serif text-lg leading-relaxed mb-4">
                    “{test.text}”
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-widest text-brand-stone font-mono font-bold">{test.client}</span>
                    <span className="text-[8px] text-brand-stone/60 font-mono">— {test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 17 — FAQ (moved from Home) */}
        <section className="py-20 bg-brand-dark relative z-40 mb-20">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">RESOLVING AMBIGUITY</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-white">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {faqData.map((faq, idx) => (
              <div key={idx} className="border-b border-brand-stone/10">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 flex justify-between items-center text-left font-serif text-lg text-brand-white hover:text-brand-bronze transition-colors cursor-none"
                  data-cursor="SELECT"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <Minus size={14} className="text-brand-bronze" /> : <Plus size={14} className="text-brand-bronze" />}
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out grid ${
                    activeFaq === idx ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-brand-stone leading-relaxed font-sans pl-2 border-l border-brand-bronze/40">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 19 — MAP Geolocation panel (moved from Home) */}
        <section className="py-12 bg-brand-dark relative z-40 border-t border-brand-stone/5">
          <div className="max-w-5xl mx-auto bg-brand-charcoal border border-brand-stone/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
            <div>
              <span className="text-[9px] tracking-[3px] text-brand-bronze uppercase font-mono font-bold">GEOLOCATION</span>
              <h3 className="font-serif text-xl font-bold mt-1 text-brand-white">JAIPUR, MALVIYA NAGAR</h3>
              <div className="flex gap-6 mt-3 text-xs text-brand-stone font-mono">
                <span>LAT: 26.8474367</span>
                <span>LGT: 75.8129617</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/REALTY+CHAMBER+(BHAWANA+ENTERPRISES)/@26.8474367,75.8129617,17z"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-white px-8 py-3 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-300 shadow-lg cursor-none"
              data-cursor="MAP"
            >
              OPEN IN GOOGLE MAPS →
            </a>
          </div>
        </section>

        {/* Embedded Google Map */}
        <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-brand-stone/10 shadow-2xl relative z-40 mb-20">
          <iframe
            title="Office Geolocation Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.882414777595!2d75.81038677618037!3d26.847436676686956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db64f434ffffff%3A0xe9688d0bd419d854!2sREALTY%20CHAMBER%20(BHAWANA%20ENTERPRISES)!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* SECTION 20 — WHATSAPP CTA (moved from Home) */}
        <section className="py-20 bg-brand-charcoal rounded-3xl border border-brand-stone/10 p-8 md:p-12 mb-12 relative z-40 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">DIRECT CHAT</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-white mb-8 leading-tight">
              YOUR NEXT PROPERTY STARTS WITH ONE CONVERSATION.
            </h2>

            <a
              href="https://wa.me/917599912345?text=Welcome%20to%20Bhawana%20Enterprises.%20Your%20trusted%20partner%20for%20premium%20%26%20private%20real%20estate%20deals.%0A%0A*Residential%20%26%20Commercial%20Properties*%0A*Agricultural%2C%20Industrial%20%26%20Land%20Deals*%0A*Farmhouses%20%26%20Off-Market%20Opportunities*%0A*Joint%20Ventures%20%26%20Investment%20Deals*%0A%0AConfidential.%20Professional.%20Result-Oriented.%0A%0APlease%20share%20your%20requirement%3A%0AProperty%20type%2C%20location%2C%20budget%2C%20purpose."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-extrabold transition-colors duration-300 shadow-2xl cursor-none"
              data-cursor="CHAT"
            >
              CHAT ON WHATSAPP →
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
export default Contact
