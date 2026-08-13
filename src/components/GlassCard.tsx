import React from 'react'

interface GlassCardProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  darkMode?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  darkMode = true,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 theme-transition shadow-2xl ${
        darkMode ? 'glass-panel text-white' : 'glass-panel-light text-black border-black/5'
      } ${className}`}
    >
      {title && (
        <div className="mb-4">
          {subtitle && (
            <span className={`text-[9px] font-bold tracking-[3px] uppercase block mb-1 ${darkMode ? 'text-luxury-gold' : 'text-amber-700'}`}>
              {subtitle}
            </span>
          )}
          <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-wide">
            {title}
          </h3>
        </div>
      )}
      <div className="text-sm font-sans leading-relaxed">
        {children}
      </div>
    </div>
  )
}
export default GlassCard
