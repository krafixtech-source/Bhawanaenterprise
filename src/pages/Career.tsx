import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Send } from 'lucide-react'

export const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'consultant',
    cover: '',
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit actions here
    navigate('/thankyou.html')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const jobs = [
    {
      title: 'Senior Property Consultant',
      department: 'Sales & Strategic Acquisition',
      location: 'Malviya Nagar, Jaipur',
      type: 'Full-Time',
      desc: 'Requires 4+ years of real estate experience in the Jaipur market. Strong negotiation skills and deep understanding of residential & commercial land dynamics are essential.'
    },
    {
      title: 'Legal Counsel & Title Analyst',
      department: 'Legal Compliance & Registry',
      location: 'Jaipur Office',
      type: 'Full-Time / Consultant',
      desc: 'Expertise in Rajasthan land registry laws, JDA protocols, title verification, and drafting joint-venture frameworks between developers and landowners.'
    },
    {
      title: 'Relationship Executive',
      department: 'Client Relations & VIP Services',
      location: 'Malviya Nagar, Jaipur',
      type: 'Full-Time',
      desc: 'Managing inquiries, conducting private site tours for HNIs and builders, and coordinating with legal managers for smooth deal execution.'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">GROW WITH US</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Careers
          </h1>
          <p className="text-brand-stone text-sm mt-4">
            Join Jaipur's elite real estate consultancy network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job listings */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="font-serif text-2xl font-semibold mb-2 text-luxury-gold">Active Opportunities</h2>
            
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-luxury-gold/50 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">{job.title}</h3>
                    <span className="text-[10px] tracking-wider text-brand-stone uppercase block mt-1">{job.department}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[9px] bg-white/10 text-white rounded px-2.5 py-1 font-mono uppercase tracking-widest">{job.type}</span>
                  </div>
                </div>
                <p className="text-xs text-brand-stone leading-relaxed mb-4">{job.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-luxury-gold font-semibold">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Application form */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-32">
              <h3 className="font-serif text-xl font-bold mb-2">Apply Directly</h3>
              <p className="text-xs text-brand-stone mb-6">Complete the information below and our legal/recruitment advisor will call you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Target Position</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                  >
                    <option value="consultant" className="bg-luxury-dark text-white">Senior Property Consultant</option>
                    <option value="legal" className="bg-luxury-dark text-white">Legal Counsel & Title Advisor</option>
                    <option value="relationship" className="bg-luxury-dark text-white">Relationship Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-brand-stone mb-1.5 font-bold">Cover Letter Summary</label>
                  <textarea
                    rows={4}
                    value={formData.cover}
                    onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                    placeholder="Tell us briefly about your real estate experience in Rajasthan..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-luxury-gold hover:text-brand-light py-3 rounded-xl transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold mt-4 flex items-center justify-center gap-2"
                  data-cursor="SUBMIT"
                >
                  <Send size={12} />
                  <span>Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Career
