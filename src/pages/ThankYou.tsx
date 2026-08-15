import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const ThankYou: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white flex items-center justify-center px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-md text-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-luxury-gold/15 p-4 rounded-full border border-luxury-gold/20">
            <CheckCircle2 size={48} className="text-luxury-gold" />
          </div>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Thank You</h1>
        <p className="text-sm text-brand-stone mb-8 leading-relaxed">
          Your inquiry has been successfully received by our registry and sales desk. A senior property consultant or legal advisor will contact you within the next 24 business hours.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-white text-black hover:bg-luxury-gold hover:text-brand-light py-3.5 rounded-xl transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
          data-cursor="HOME"
        >
          <span>Return to Homepage</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
export default ThankYou
