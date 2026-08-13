import React, { useEffect, useRef } from 'react'

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -100, y: -100 })
  const trail = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      
      // Instantly position the center dot using translate3d (GPU accelerated)
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
      dot.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
      dot.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Smooth trailing loop (runs on hardware-accelerated RAF)
    let animationFrameId = 0
    const updateTrail = () => {
      const dx = mouse.current.x - trail.current.x
      const dy = mouse.current.y - trail.current.y
      
      trail.current.x += dx * 0.15
      trail.current.y += dy * 0.15

      cursor.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`
      
      animationFrameId = requestAnimationFrame(updateTrail)
    }
    updateTrail()

    // Hover actions using event listeners (delegated or observed)
    const handleHoverStart = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const text = target.getAttribute('data-cursor') || 'VIEW'
      
      cursor.style.width = '90px'
      cursor.style.height = '90px'
      cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.15)'
      cursor.style.borderColor = '#d4af37'
      
      const badge = document.createElement('span')
      badge.className = 'text-[9px] font-bold text-luxury-gold tracking-[3px] uppercase mt-0.5 ml-0.5 select-none animate-fade-in'
      badge.textContent = text
      
      cursor.innerHTML = ''
      cursor.appendChild(badge)
      
      dot.style.width = '0px'
      dot.style.height = '0px'
    }

    const handleHoverEnd = () => {
      cursor.style.width = '28px'
      cursor.style.height = '28px'
      cursor.style.backgroundColor = 'transparent'
      cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)'
      cursor.innerHTML = ''
      
      dot.style.width = '4px'
      dot.style.height = '4px'
    }

    const selectElements = () => {
      const elements = document.querySelectorAll('[data-cursor]')
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    selectElements()
    const observer = new MutationObserver(selectElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      
      const elements = document.querySelectorAll('[data-cursor]')
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  return (
    <>
      {/* Lagging outer circle */}
      <div
        ref={cursorRef}
        className="fixed left-0 top-0 rounded-full border pointer-events-none transition-all duration-300 ease-out"
        style={{
          width: '28px',
          height: '28px',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform, width, height, background-color',
          margin: '-14px 0 0 -14px', // center alignment
        }}
      />

      {/* Immediate center dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full pointer-events-none transition-all duration-150 ease-out"
        style={{
          width: '4px',
          height: '4px',
          backgroundColor: '#ffffff',
          zIndex: 9999,
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform, width, height',
          margin: '-2px 0 0 -2px', // center alignment
        }}
      />
    </>
  )
}
export default CustomCursor
