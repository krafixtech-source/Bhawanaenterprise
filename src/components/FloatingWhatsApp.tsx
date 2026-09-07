import React, { useState, useEffect } from 'react'

export const FloatingWhatsApp: React.FC = () => {
  const [isLight, setIsLight] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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

  const whatsappUrl =
    "https://wa.me/917599912345?text=Welcome%20to%20Bhawana%20Enterprises.%20Your%20trusted%20partner%20for%20premium%20%26%20private%20real%20estate%20deals.%0A%0A*Residential%20%26%20Commercial%20Properties*%0A*Agricultural%2C%20Industrial%20%26%20Land%20Deals*%0A*Farmhouses%20%26%20Off-Market%20Opportunities*%0A*Joint%20Ventures%20%26%20Investment%20Deals*%0A%0AConfidential.%20Professional.%20Result-Oriented.%0A%0APlease%20share%20your%20requirement%3A%0AProperty%20type%2C%20location%2C%20budget%2C%20purpose."

  return (
    <div 
      className="fixed bottom-24 right-8 z-[90] flex items-center group pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip text label (appears on hover) */}
      <div 
        className={`mr-3 px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        } ${
          isLight
            ? 'bg-stone-900 text-white shadow-md'
            : 'bg-stone-800 text-stone-100 border border-stone-700 shadow-lg'
        }`}
      >
        Chat on WhatsApp
      </div>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center p-3.5 rounded-full transition-all duration-300 hover:scale-105 ${
          isLight
            ? 'bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59]'
            : 'bg-[#075E54] text-white shadow-md hover:bg-[#097266] border border-emerald-600/30'
        }`}
        data-cursor="CHAT"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Official SVG Logo Icon */}
        <svg 
          className="w-6 h-6 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.176-1.338c1.45.79 3.097 1.206 4.836 1.206 5.508 0 9.99-4.478 9.99-9.984 0-5.506-4.482-9.984-9.99-9.984zm0 18.286c-1.524 0-3.017-.403-4.326-1.166l-.31-.18-3.218.832.859-3.136-.198-.316c-.841-1.341-1.285-2.895-1.285-4.49 0-4.577 3.723-8.3 8.3-8.3 4.576 0 8.3 3.723 8.3 8.3 0 4.576-3.724 8.3-8.3 8.3z"/>
          <path d="M16.57 14.364c-.253-.126-1.492-.736-1.723-.82-.23-.083-.398-.126-.566.126-.168.252-.65 1.723-.797 1.891-.147.168-.294.189-.547.063-.253-.126-1.07-.394-2.037-1.257-.754-.672-1.263-1.502-1.411-1.754-.147-.252-.016-.388.11-.514.113-.113.253-.294.379-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.566-1.365-.776-1.87-.205-.494-.415-.426-.566-.434-.147-.008-.315-.008-.483-.008-.168 0-.441.063-.672.315-.23.252-.882.862-.882 2.102 0 1.239.903 2.437 1.029 2.605.126.168 1.777 2.713 4.305 3.805.601.26 1.07.415 1.436.531.604.192 1.154.165 1.589.1.485-.072 1.492-.609 1.702-1.197.21-.588.21-1.092.147-1.197-.063-.105-.23-.168-.483-.294z"/>
        </svg>
      </a>
    </div>
  )
}

export default FloatingWhatsApp
