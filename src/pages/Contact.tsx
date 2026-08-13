import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Request',
    message: '',
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit action here
    navigate('/thankyou.html')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Contact Us
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Consult Jaipur's trusted real estate advisors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="font-serif text-2xl font-semibold mb-2 text-luxury-gold">Office Directory</h2>
            
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Corporate Address</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    REALTY CHAMBER (BHAWANA ENTERPRISES),<br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4">
                <Phone className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Direct Call</h4>
                  <a href="tel:+917599912345" className="text-sm font-serif text-white hover:text-luxury-gold transition-colors block mb-1">
                    +91 75999 12345
                  </a>
                  <p className="text-[10px] text-gray-500 font-mono">Mobile / WhatsApp Available</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Electronic Support</h4>
                  <a href="mailto:sales@bhawanaenterprises.com" className="text-xs text-gray-400 hover:text-white transition-colors block mb-1">
                    sales@bhawanaenterprises.com
                  </a>
                  <a href="mailto:info@msmcoretech.com" className="text-xs text-gray-500 hover:text-white transition-colors block">
                    info@msmcoretech.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="text-luxury-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider mb-1">Consultancy Hours</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Monday – Sunday: 8:00 AM – 8:00 PM<br />
                    <span className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest mt-1 block">Registry Desk Open All Week</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold mb-2">Schedule a Consultation</h3>
              <p className="text-xs text-gray-400 mb-8">Please detail your property type, budget, and location preference. Our registry advisors will prepare relevant listings prior to call.</p>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 font-bold">Consultation Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  >
                    <option value="Consultation Request" className="bg-luxury-dark text-white">General Consultation Request</option>
                    <option value="Buy Property" className="bg-luxury-dark text-white">Purchase / Acquisition Deal</option>
                    <option value="Sell Property" className="bg-luxury-dark text-white">Sell / Valuation Listing</option>
                    <option value="Joint Venture" className="bg-luxury-dark text-white">Joint Venture Proposal</option>
                    <option value="Rent Lease" className="bg-luxury-dark text-white">Rental or Lease Arrangement</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 font-bold">Message Details</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify property type (Plot, Flat, Villa, Industrial), target budget, and specific location..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="sm:col-span-2 w-full bg-white text-black hover:bg-luxury-gold hover:text-white py-3.5 rounded-xl transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                  data-cursor="SUBMIT"
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-40">
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

      </div>
    </div>
  )
}
export default Contact
