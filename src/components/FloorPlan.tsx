import React from 'react'

interface FloorPlanProps {
  darkMode: boolean
  variant?: number
}

export const FloorPlan: React.FC<FloorPlanProps> = ({ darkMode, variant = 0 }) => {
  const strokeColor = darkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(0, 0, 0, 0.75)'
  const accentColor = '#d4af37' // luxury gold

  // Render different layouts based on variant
  if (variant === 0) {
    // Variant 0: House Type A (Elite Line) - Grand Layout
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full opacity-90 transition-all duration-700"
      >
        {/* Outer Plot Boundary - dashed line */}
        <rect
          x="10"
          y="10"
          width="380"
          height="280"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Main Building Slab */}
        <rect
          x="40"
          y="40"
          width="320"
          height="220"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        />

        {/* Room divisions */}
        <line x1="40" y1="150" x2="200" y2="150" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="200" y1="40" x2="200" y2="260" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="200" y1="120" x2="360" y2="120" stroke={strokeColor} strokeWidth="1.5" />
        
        {/* Spa Pool / Gold Accent Deck */}
        <rect
          x="230"
          y="150"
          width="100"
          height="80"
          fill={darkMode ? 'rgba(212, 175, 55, 0.04)' : 'rgba(212, 175, 55, 0.12)'}
          stroke={accentColor}
          strokeWidth="1.5"
        />

        {/* Columns / Pillars */}
        <circle cx="50" cy="50" r="3" fill={accentColor} />
        <circle cx="50" cy="250" r="3" fill={accentColor} />
        <circle cx="350" cy="50" r="3" fill={accentColor} />
        <circle cx="350" cy="250" r="3" fill={accentColor} />

        {/* Labels */}
        <text x="50" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">GRAND SUITE</text>
        <text x="50" y="85" fill={accentColor} fontSize="7" fontFamily="monospace">14.5 x 8.0 M</text>

        <text x="50" y="180" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">RECEPTION HALL</text>
        <text x="50" y="195" fill={accentColor} fontSize="7" fontFamily="monospace">15.0 x 9.5 M</text>

        <text x="215" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">CHEF KITCHEN</text>
        
        <text x="245" y="195" fill={accentColor} fontSize="9" fontFamily="monospace" letterSpacing="2" fontWeight="bold">SPA RESORT</text>

        {/* Compass / Orientation Guide */}
        <g transform="translate(330, 80)">
          <circle cx="0" cy="0" r="12" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke={strokeColor} strokeWidth="1" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke={strokeColor} strokeWidth="1" />
          <polygon points="0,-12 -3,-4 3,-4" fill={accentColor} />
          <text x="-2.5" y="18" fill={strokeColor} fontSize="6" fontFamily="sans-serif">N</text>
        </g>
      </svg>
    )
  } else if (variant === 1) {
    // Variant 1: House Type B (Signature Line) - Courtyard Layout
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full opacity-90 transition-all duration-700"
      >
        {/* Outer Plot Boundary */}
        <rect
          x="10"
          y="10"
          width="380"
          height="280"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Main Building Slab */}
        <rect
          x="40"
          y="40"
          width="320"
          height="220"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        />

        {/* Interior Walls */}
        <line x1="140" y1="40" x2="140" y2="260" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="140" y1="160" x2="360" y2="160" stroke={strokeColor} strokeWidth="1.5" />
        
        {/* Courtyard pool */}
        <rect
          x="60"
          y="70"
          width="60"
          height="120"
          fill={darkMode ? 'rgba(212, 175, 55, 0.04)' : 'rgba(212, 175, 55, 0.12)'}
          stroke={accentColor}
          strokeWidth="1.5"
        />

        {/* Pillars */}
        <circle cx="50" cy="50" r="3" fill={accentColor} />
        <circle cx="50" cy="250" r="3" fill={accentColor} />
        <circle cx="350" cy="50" r="3" fill={accentColor} />
        <circle cx="350" cy="250" r="3" fill={accentColor} />

        {/* Labels */}
        <text x="65" y="130" fill={accentColor} fontSize="8" fontFamily="monospace" letterSpacing="1" fontWeight="bold">COURTYARD</text>
        <text x="65" y="145" fill={accentColor} fontSize="7" fontFamily="monospace">POOL DECK</text>

        <text x="160" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">PENTHOUSE SUITE</text>
        <text x="160" y="85" fill={accentColor} fontSize="7" fontFamily="monospace">12.0 x 7.5 M</text>

        <text x="160" y="195" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">GALLERY LOUNGE</text>
        <text x="160" y="210" fill={accentColor} fontSize="7" fontFamily="monospace">13.0 x 8.0 M</text>

        {/* Compass / Orientation Guide */}
        <g transform="translate(330, 110)">
          <circle cx="0" cy="0" r="12" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke={strokeColor} strokeWidth="1" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke={strokeColor} strokeWidth="1" />
          <polygon points="0,-12 -3,-4 3,-4" fill={accentColor} />
          <text x="-2.5" y="18" fill={strokeColor} fontSize="6" fontFamily="sans-serif">N</text>
        </g>
      </svg>
    )
  } else {
    // Variant 2: House Type C (Comfort Line) - Standard Layout
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full opacity-90 transition-all duration-700"
      >
        {/* Outer Plot Boundary */}
        <rect
          x="10"
          y="10"
          width="380"
          height="280"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Main Building Slab */}
        <rect
          x="40"
          y="40"
          width="320"
          height="220"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        />

        {/* Interior Walls */}
        <line x1="40" y1="130" x2="160" y2="130" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="160" y1="40" x2="160" y2="130" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="160" y1="150" x2="160" y2="260" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="280" y1="40" x2="280" y2="160" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="160" y1="160" x2="360" y2="160" stroke={strokeColor} strokeWidth="1.5" />

        {/* Swimming Pool Deck */}
        <rect
          x="200"
          y="180"
          width="130"
          height="60"
          fill={darkMode ? 'rgba(212, 175, 55, 0.04)' : 'rgba(212, 175, 55, 0.12)'}
          stroke={accentColor}
          strokeWidth="1.5"
        />

        {/* Pillars */}
        <circle cx="50" cy="50" r="3" fill={accentColor} />
        <circle cx="50" cy="250" r="3" fill={accentColor} />
        <circle cx="350" cy="50" r="3" fill={accentColor} />
        <circle cx="350" cy="250" r="3" fill={accentColor} />

        {/* Labels */}
        <text x="50" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">MASTER SUITE</text>
        <text x="50" y="85" fill={accentColor} fontSize="7" fontFamily="monospace">11.5 x 6.2 M</text>

        <text x="180" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">ENTRANCE FOYER</text>
        
        <text x="50" y="180" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">LIVING AREA</text>
        <text x="50" y="195" fill={accentColor} fontSize="7" fontFamily="monospace">14.0 x 8.5 M</text>

        <text x="215" y="215" fill={accentColor} fontSize="9" fontFamily="monospace" letterSpacing="2" fontWeight="bold">INFINITY POOL</text>
        
        <text x="290" y="70" fill={strokeColor} fontSize="8" fontFamily="monospace" letterSpacing="1">KITCHEN</text>
        
        {/* Compass / Orientation Guide */}
        <g transform="translate(330, 100)">
          <circle cx="0" cy="0" r="15" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="0" y1="-15" x2="0" y2="15" stroke={strokeColor} strokeWidth="1" />
          <line x1="-15" y1="0" x2="15" y2="0" stroke={strokeColor} strokeWidth="1" />
          <polygon points="0,-15 -4,-5 4,-5" fill={accentColor} />
          <text x="-3" y="22" fill={strokeColor} fontSize="6" fontFamily="sans-serif">N</text>
        </g>
      </svg>
    )
  }
}
