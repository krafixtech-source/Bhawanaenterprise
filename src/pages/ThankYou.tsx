import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const ThankYou: React.FC = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light-mode'))
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-light flex items-center justify-center px-6 md:px-12 font-sans relative z-40">
      <div className={`max-w-md text-center rounded-3xl p-8 md:p-12 shadow-2xl transition-colors duration-500 border ${
        isLight 
          ? 'bg-[#EFECE6] border-stone-300/60 text-stone-900' 
          : 'bg-[#171917] border-white/10 text-white'
      }`}>
        <div className="flex justify-center mb-6">
          <div className={`p-4 rounded-full border ${
            isLight
              ? 'bg-amber-700/10 border-amber-700/20'
              : 'bg-luxury-gold/15 border-luxury-gold/20'
          }`}>
            <CheckCircle2 size={48} className={isLight ? 'text-amber-800' : 'text-luxury-gold'} />
          </div>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Thank You</h1>
        <p className={`text-sm mb-8 leading-relaxed ${isLight ? 'text-stone-700' : 'text-brand-stone'}`}>
          Your inquiry has been successfully received by our registry and sales desk. A senior property consultant or legal advisor will contact you within the next 24 business hours.
        </p>

        <Link
          to="/"
          className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold shadow-md hover:scale-[1.02] ${
            isLight
              ? 'bg-stone-900 text-white hover:bg-amber-800 hover:text-white'
              : 'bg-white text-stone-950 hover:bg-brand-bronze hover:text-white'
          }`}
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
