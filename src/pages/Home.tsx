import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus, Minus, MessageSquare, CheckCircle, Moon, Sun, Key, MapPin, Home as HomeIcon } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FloorPlan } from '../components/FloorPlan'

gsap.registerPlugin(ScrollTrigger)

export const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredBuilder, setHoveredBuilder] = useState<number | null>(null)
  const [currentHouseIndex, setCurrentHouseIndex] = useState(0)

  const houses = [
    {
      name: 'House Type C',
      line: 'Comfort Line',
      completion: 'Q4 2024',
      plotSize: '0.12 HA',
      houseArea: '450 M²',
      floorPlanVariant: 2,
    },
    {
      name: 'House Type B',
      line: 'Signature Line',
      completion: 'Q1 2025',
      plotSize: '0.15 HA',
      houseArea: '480 M²',
      floorPlanVariant: 1,
    },
    {
      name: 'House Type A',
      line: 'Elite Line',
      completion: 'Q2 2025',
      plotSize: '0.18 HA',
      houseArea: '520 M²',
      floorPlanVariant: 0,
    }
  ]

  const handleNextHouse = () => {
    setCurrentHouseIndex((prev) => (prev + 1) % houses.length)
  }

  const handlePrevHouse = () => {
    setCurrentHouseIndex((prev) => (prev - 1 + houses.length) % houses.length)
  }

  // Mouse coordinate refs for parallax
  const heroMouse = useRef({ x: 0, y: 0 })

  // DOM node refs for direct GPU-accelerated translation
  const heroBgRef = useRef<HTMLDivElement>(null)
  const heroFgRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const heroUiRef = useRef<HTMLDivElement>(null)
  const storyImgRef = useRef<HTMLDivElement>(null)
  const serviceCursorImgRef = useRef<HTMLDivElement>(null)

  // Section Refs for GSAP ScrollTriggers
  const heroContainerRef = useRef<HTMLDivElement>(null)
  const heroImageContainerRef = useRef<HTMLDivElement>(null)
  const heroOverlayRef = useRef<HTMLDivElement>(null)
  const splitPanelRef = useRef<HTMLDivElement>(null)
  const sectionTransitionRef = useRef<HTMLDivElement>(null)
  const transitionImgRef = useRef<HTMLImageElement>(null)
  const transitionProgressRef = useRef<HTMLDivElement>(null)
  
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const aboutLeftImgRef = useRef<HTMLDivElement>(null)
  const aboutRightImgRef = useRef<HTMLDivElement>(null)
  const aboutCounterRef = useRef<HTMLSpanElement>(null)

  const processSectionRef = useRef<HTMLDivElement>(null)
  const investmentSectionRef = useRef<HTMLDivElement>(null)
  const investmentImgRef = useRef<HTMLImageElement>(null)

  // 1. Mousemove Parallax Handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) - 0.5
      const ny = (e.clientY / window.innerHeight) - 0.5

      heroMouse.current.x = nx
      heroMouse.current.y = ny

      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translate3d(${nx * 2}px, ${ny * 2}px, 0) scale(1.02)`
      }
      if (heroFgRef.current) {
        heroFgRef.current.style.transform = `translate3d(${nx * 4}px, ${ny * 4}px, 0) scale(1.02)`
      }
      if (heroTitleRef.current) {
        heroTitleRef.current.style.transform = `translate3d(${nx * 8}px, ${ny * 8}px, 0)`
      }
      if (heroUiRef.current) {
        heroUiRef.current.style.transform = `translate3d(${nx * 10}px, ${ny * 10}px, 0)`
      }

      // Section 05 Story Image Tilt
      if (storyImgRef.current) {
        const rect = storyImgRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          storyImgRef.current.style.transform = `translate3d(${-nx * 12}px, ${-ny * 12}px, 0) scale(1.03)`
        }
      }

      // Section 07 Services follow cursor
      if (serviceCursorImgRef.current && hoveredService !== null) {
        serviceCursorImgRef.current.style.transform = `translate3d(${e.clientX - 100}px, ${e.clientY - 120}px, 0)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hoveredService])

  // 2. GSAP ScrollTrigger Timelines
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 01 Hero Cinematic Unpin & Zoom
      gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })
      .to(heroOverlayRef.current, { opacity: 0, y: -40, duration: 0.5 })
      .to(heroImageContainerRef.current, {
        scale: 1.12,
        borderRadius: '0px',
        width: '100vw',
        height: '100vh',
        duration: 1,
      }, 0)
      .to(splitPanelRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.8,
      }, 0)

      // Section 03 Cinematic Transition Viewport Zoom
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionTransitionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
      .fromTo(transitionImgRef.current, { scale: 1.0 }, { scale: 1.15, ease: 'none' })
      .fromTo(transitionProgressRef.current, { width: '0%' }, { width: '100%', ease: 'none' }, 0)

      // Section 04 About us entrance
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 80%',
        }
      })
      .fromTo(aboutLeftImgRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
      .fromTo(aboutRightImgRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, 0)
      
      // About Counter Animation
      if (aboutCounterRef.current) {
        gsap.fromTo(aboutCounterRef.current,
          { textContent: '0' },
          {
            textContent: '20',
            duration: 2.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: 'top 75%',
            },
            snap: { textContent: 1 },
          }
        )
      }

      // Section 14 Investment land parcels zoom
      gsap.timeline({
        scrollTrigger: {
          trigger: investmentSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
      .fromTo(investmentImgRef.current, { scale: 1.0 }, { scale: 1.16, ease: 'none' })

      // Reusable Bottom-to-Top Image Reveals
      gsap.utils.toArray('.reveal-bottom-to-top').forEach((element: any) => {
        gsap.fromTo(element,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })

    })

    return () => ctx.revert()
  }, [])


  // Content Data
  const services = [
    { num: '01', name: 'RESIDENTIAL', desc: 'Find flats, villas, and premium residential land plots in Jaipur.', img: '/hero-day.png', link: '/residential-property.html' },
    { num: '02', name: 'COMMERCIAL', desc: 'Secure retail fronts, office buildings, hotels, and business locations.', img: '/hero-night.png', link: '/commercial-property.html' },
    { num: '03', name: 'INDUSTRIAL', desc: 'RIICO-approved industrial warehousing and production units.', img: '/transition-aerial.png', link: '/industrial-property.html' },
    { num: '04', name: 'AGRICULTURAL', desc: 'Fertile cultivation farmland and JDA conversion plots.', img: '/land-parcels.png', link: '/agricultural-property.html' },
    { num: '05', name: 'JOINT VENTURE', desc: 'Profit-sharing alliances between landowners and top builders.', img: '/hero-day.png', link: '/joint-venture.html' },
    { num: '06', name: 'FARMHOUSE', desc: 'Luxury villa retreats surrounded by natural Jaipur scenery.', img: '/transition-aerial.png', link: '/purchase.html' },
    { num: '07', name: 'RENT & LEASE', desc: 'Structured tenant placements and rental collections.', img: '/hero-night.png', link: '/rent.html' },
    { num: '08', name: 'PROPERTY EXCHANGE', desc: 'Smooth asset-to-asset trades with balanced evaluations.', img: '/land-parcels.png', link: '/exchange.html' }
  ]

  const faqData = [
    { q: "What types of properties do you offer?", a: "We consult on a comprehensive catalog of real estate properties across Jaipur, including residential plots, luxury flats, high-end villas, commercial office spaces, shops, hotels, hospitals, industrial plots, warehouses, and fertile agricultural land." },
    { q: "Do you handle sale, purchase, and rental?", a: "Yes. Bhawana Enterprises provides end-to-end consultancy for buying a property, selling a property, renting/leasing residential or commercial spaces, and handling balanced property-to-property exchanges." },
    { q: "Are you a broker or consultant?", a: "We act as strategic real estate consultants. Beyond matching buyers and sellers, we manage negotiation, project planning, risk mitigation, joint venture coordination, and complete legal documentation to close deals securely." },
    { q: "Do you assist with joint ventures?", a: "Absolutely. We specialize in structured joint ventures between developers and landowners, as well as high-value industrial, agricultural, and off-market commercial acquisitions." },
    { q: "How do you charge?", a: "Our consultancy fee is transaction-specific, structured transparently and agreed upon prior to engagement. There are no hidden fees or surprise costs at closing." }
  ]

  const featuredProperties = [
    { name: "SERENITY CONDO SUITE", type: "APARTMENT", specs: "4 BED · 4 BATH · 350 SQ FT", desc: "Jaipur upscale modern apartment flat concept.", img: '/hero-day.png', link: '/purchase.html' },
    { name: "LUXURY GRAND HOTEL", type: "COMMERCIAL", specs: "40+ ROOMS · RESTAURANT", desc: "Premium commercial resort model in Jaipur.", img: '/hero-night.png', link: '/commercial-property.html' },
    { name: "INDUSTRIAL WAREHOUSE", type: "INDUSTRIAL", specs: "LOADING DOCK · 5000 SQ FT", desc: "Logistic storage layout structure.", img: '/transition-aerial.png', link: '/industrial-property.html' },
    { name: "PREMIUM AGRICULTURAL LAND", type: "AGRICULTURAL", specs: "FERTILE SOIL · 1 BIGHA+", desc: "Fertile agricultural fields in Rajasthan.", img: '/land-parcels.png', link: '/agricultural-property.html' },
    { name: "LUXURY FARMHOUSE RETREAT", type: "RESIDENTIAL", specs: "3 BEDROOMS · GARDEN", desc: "Private green getaway property.", img: '/hero-day.png', link: '/purchase.html' }
  ]

  const builders = [
    { name: "SUN CITY", projects: ["Sun City Sector 1", "Sun City Heights", "Sun City Arcade"] },
    { name: "ASHIANA HOUSING", projects: ["Ashiana Greenwood", "Ashiana Umang", "Ashiana Mangalam"] },
    { name: "MAHIMA GROUP", projects: ["MAHIMA SANSAAR", "VALENZA", "MAHIMA SHUBH NILAYA"] },
    { name: "TRIMURTY", projects: ["DIVINITY", "GREATER JAGATPURA", "ARABELLA"] }
  ]

  return (
    <div className="w-full bg-brand-dark text-brand-light font-sans selection:bg-brand-bronze selection:text-brand-dark">
      
      {/* Floating WhatsApp CTA - Shifted to bottom-24 to avoid Day/Night toggle overlap */}
      <a
        href="https://wa.me/917599912345?text=Welcome%20to%20Bhawana%20Enterprises.%20Your%20trusted%20partner%20for%20premium%20%26%20private%20real%20estate%20deals.%0A%0A*Residential%20%26%20Commercial%20Properties*%0A*Agricultural%2C%20Industrial%20%26%20Land%20Deals*%0A*Farmhouses%20%26%20Off-Market%20Opportunities*%0A*Joint%20Ventures%20%26%20Investment%20Deals*%0A%0AConfidential.%20Professional.%20Result-Oriented.%0A%0APlease%20share%20your%20requirement%3A%0AProperty%20type%2C%20location%2C%20budget%2C%20purpose."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-8 z-[90] flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 pointer-events-auto"
        data-cursor="CHAT"
      >
        <MessageSquare size={22} />
      </a>

      {/* SECTION 01 — CINEMATIC HERO */}
      <div 
        ref={heroContainerRef} 
        className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-dark"
      >
        {/* Cinematic Image Container (Visible in the top viewport section on desktop) */}
        <div 
          ref={heroImageContainerRef}
          className="relative lg:absolute top-0 left-0 w-full h-[65vh] lg:h-[calc(100vh-260px)] overflow-hidden z-10 transition-all duration-[1200ms] ease-out"
        >
          {/* Layer 1: Background Images (z-10) */}
          <div 
            ref={heroBgRef}
            className="absolute w-full h-full overflow-hidden transition-all duration-[1200ms] ease-out z-10 will-change-transform"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-[1.03]"
              style={{ 
                backgroundImage: `url('/hero-day.png')`,
                opacity: darkMode ? 0 : 1,
              }}
            />
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-[1.03]"
              style={{ 
                backgroundImage: `url('/hero-night.png')`,
                opacity: darkMode ? 1 : 0,
              }}
            />
            <div className="absolute inset-0 bg-brand-dark/30 pointer-events-none transition-opacity duration-1000" />
          </div>

          {/* Layer 2: Giant Display Typography (z-20) */}
          <div 
            ref={heroTitleRef} 
            className="absolute top-[12vh] w-full flex justify-center pointer-events-none select-none z-20 will-change-transform"
          >
            <h1 className="text-brand-white text-center font-display text-[15vw] md:text-[18vw] leading-none font-extrabold uppercase tracking-[-0.03em] select-none opacity-95">
              BHAWANA
            </h1>
          </div>

          {/* Layer 3: Foreground Overlap Building Mask (z-30) - Clipped to perfectly match the flat roofline silhouette of the Jaipur villa */}
          <div 
            ref={heroFgRef}
            className="absolute w-full h-full overflow-hidden transition-all duration-[1200ms] ease-out z-30 pointer-events-none will-change-transform"
            style={{ clipPath: 'polygon(0% 46%, 100% 46%, 100% 100%, 0% 100%)' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-[1.03]"
              style={{ 
                backgroundImage: `url('/hero-day.png')`,
                opacity: darkMode ? 0 : 1,
              }}
            />
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-[1.03]"
              style={{ 
                backgroundImage: `url('/hero-night.png')`,
                opacity: darkMode ? 1 : 0,
              }}
            />
            <div className="absolute inset-0 bg-brand-dark/30 pointer-events-none transition-opacity duration-1000" />
          </div>

          {/* Layer 4: Hero Description and Day/Night Switcher overlays (z-40) */}
          <div 
            ref={heroOverlayRef}
            className="absolute inset-0 z-40 flex flex-col justify-end p-6 md:p-12 pb-20 lg:pb-24 pointer-events-none"
          >
            <div className="w-full flex justify-between items-end">
              {/* Description Text (bottom-left) */}
              <div className="max-w-xl text-left pointer-events-auto">
                <p className="text-brand-white font-sans text-xs md:text-sm leading-relaxed tracking-wide drop-shadow-md">
                  A vision that transcends property and space, where unmatched craftsmanship inspires elegance and innovation to enrich lives.
                </p>
              </div>
              
              {/* SECTION 02 — DAY / NIGHT EXPERIENTIAL SWITCH (bottom-right) */}
              <div className="pointer-events-auto flex items-center bg-black/45 border border-white/10 p-1.5 rounded-full backdrop-blur-md gap-1">
                <button
                  onClick={() => setDarkMode(true)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
                  title="Night Mode"
                  data-cursor="TOGGLE"
                >
                  <Moon size={14} />
                </button>
                <button
                  onClick={() => setDarkMode(false)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${!darkMode ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
                  title="Day Mode"
                  data-cursor="TOGGLE"
                >
                  <Sun size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Split Bottom Panel (visible inside the first screen at the bottom) */}
        <div
          ref={splitPanelRef}
          className={`relative lg:absolute bottom-0 left-0 w-full min-h-[35vh] lg:h-[260px] z-20 border-t ${darkMode ? 'border-white/5 bg-[#101110]' : 'border-brand-stone/10 bg-brand-dark'} flex flex-col justify-end transition-colors duration-1000`}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative h-full">
            {/* Left blueprint panel */}
            <div className={`lg:col-span-5 p-6 flex flex-col justify-center h-full transition-colors duration-1000 ${darkMode ? 'bg-[#f5f5f7]' : 'bg-black'}`}>
              <div className="h-[140px] flex items-center justify-center bg-transparent p-2">
                <FloorPlan darkMode={!darkMode} variant={houses[currentHouseIndex].floorPlanVariant} />
              </div>
            </div>

            {/* Right statistics matrix */}
            <div className={`lg:col-span-7 p-6 md:p-8 flex flex-col justify-between h-full transition-colors duration-1000 ${darkMode ? 'bg-[#101110] text-brand-light' : 'bg-[#f5f5f7] text-brand-dark'}`}>
              {/* Stats matrix columns */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-left">
                  <span className={`flex items-center gap-1 text-[9px] md:text-[11px] uppercase tracking-[1.5px] font-bold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Key size={10} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                    Completion:
                  </span>
                  <span className={`font-display text-2xl md:text-3xl lg:text-4xl tracking-wide font-extrabold uppercase block ${darkMode ? 'text-white' : 'text-black'}`}>
                    {houses[currentHouseIndex].completion}
                  </span>
                </div>
                
                <div className="text-left">
                  <span className={`flex items-center gap-1 text-[9px] md:text-[11px] uppercase tracking-[1.5px] font-bold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <MapPin size={10} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                    Plot Size:
                  </span>
                  <span className={`font-display text-2xl md:text-3xl lg:text-4xl tracking-wide font-extrabold uppercase block ${darkMode ? 'text-white' : 'text-black'}`}>
                    {houses[currentHouseIndex].plotSize}
                  </span>
                </div>

                <div className="text-left">
                  <span className={`flex items-center gap-1 text-[9px] md:text-[11px] uppercase tracking-[1.5px] font-bold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <HomeIcon size={10} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                    House Area:
                  </span>
                  <span className={`font-display text-2xl md:text-3xl lg:text-4xl tracking-wide font-extrabold uppercase block ${darkMode ? 'text-white' : 'text-black'}`}>
                    {houses[currentHouseIndex].houseArea}
                  </span>
                </div>
              </div>

              {/* Controls and circular thumbnails */}
              <div className={`flex justify-between items-end border-t pt-4 mt-6 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                {/* Arrows (Big circles, with Next button highlighted in blue) */}
                <div className="flex gap-3 items-center">
                  <button 
                    onClick={handlePrevHouse}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all text-sm ${darkMode ? 'border-white/10 text-white hover:bg-white hover:text-black hover:border-white' : 'border-black/10 text-black hover:bg-black hover:text-white hover:border-black'}`}
                    title="Previous House Type"
                    data-cursor="PREV"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={handleNextHouse}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all text-sm font-bold ${darkMode ? 'border-[#0a84ff] text-[#0a84ff] hover:bg-[#0a84ff] hover:text-white' : 'border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white'}`}
                    title="Next House Type"
                    data-cursor="NEXT"
                  >
                    ›
                  </button>
                </div>

                {/* Thumbnail preview (Big circles) */}
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <span className={`block text-[10px] uppercase tracking-[1.5px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{houses[currentHouseIndex].name}</span>
                    <span className={`text-[9px] uppercase tracking-widest font-mono mt-0.5 block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>— {houses[currentHouseIndex].line}</span>
                  </div>
                  
                  {/* Overlapping circular images - big size */}
                  <div className="flex -space-x-4">
                    <div 
                      className={`w-12 h-12 rounded-full border-2 bg-cover bg-center shadow-md ${darkMode ? 'border-[#101110]' : 'border-[#f5f5f7]'}`}
                      style={{ 
                        backgroundImage: `url(${darkMode ? "'/hero-night.png'" : "'/hero-day.png'"})`,
                        filter: 'brightness(0.4) saturate(0.8)'
                      }}
                    />
                    <div 
                      className={`w-12 h-12 rounded-full border-2 bg-cover bg-center shadow-md ${darkMode ? 'border-[#101110]' : 'border-[#f5f5f7]'}`}
                      style={{ backgroundImage: `url(${darkMode ? "'/hero-night.png'" : "'/hero-day.png'"})` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Ticker Strip */}
      <div className="bg-brand-bronze text-brand-dark py-4 overflow-hidden select-none flex items-center border-y border-black/5 z-40 relative">
        <div className="animate-marquee whitespace-nowrap flex text-xs tracking-[4px] uppercase font-bold font-sans">
          <span>Welcome to Bhawana Enterprises – Your Trusted Property Partner in Jaipur | Buy • Sell • Invest in Plots, Flats & Villas | Best Deals Guaranteed &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>Welcome to Bhawana Enterprises – Your Trusted Property Partner in Jaipur | Buy • Sell • Invest in Plots, Flats & Villas | Best Deals Guaranteed &nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* Editorial About Us Section */}
      <section 
        ref={aboutSectionRef}
        className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-brand-dark relative z-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Heritage Image */}
          <div ref={aboutLeftImgRef} className="lg:col-span-3 flex flex-col gap-3 will-change-transform">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-brand-stone/10 shadow-2xl relative reveal-bottom-to-top">
              <img src="/heritage-jaipur.png" alt="Vintage heritage Jaipur streetscape" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark/15" />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone text-center font-mono">Heritage Foundations • Est. 2006</span>
          </div>

          {/* Central Counter Stats */}
          <div className="lg:col-span-6 text-center py-8">
            <span ref={aboutCounterRef} className="block text-8xl md:text-9xl font-serif font-extrabold text-brand-bronze">
              20
            </span>
            <h3 className="text-xs uppercase tracking-[6px] text-brand-stone font-bold mt-4 mb-8">
              YEARS OF CONSULTANCY EXCELLENCE
            </h3>
            
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide mb-6">
              About Bhawana Enterprises
            </h2>
            <p className="text-sm leading-relaxed text-brand-stone max-w-lg mx-auto">
              With over 20+ years of local execution, we specialize in residential, commercial, industrial, and agricultural property consultancy. We protect equity and optimize valuations.
            </p>
          </div>

          {/* Modern Image */}
          <div ref={aboutRightImgRef} className="lg:col-span-3 flex flex-col gap-3 will-change-transform">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-brand-stone/10 shadow-2xl relative reveal-bottom-to-top">
              <img src="/modern-jaipur.png" alt="Contemporary luxury Jaipur residential plots" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark/10" />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-brand-stone text-center font-mono">Contemporary Jaipur Acquisitions</span>
          </div>
        </div>
      </section>

      {/* SECTION 05 — OUR STORY */}
      <section className="py-28 px-6 md:px-12 bg-brand-charcoal border-y border-brand-stone/5 relative z-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story image tilting on mousemove */}
          <div 
            ref={storyImgRef} 
            className="rounded-3xl overflow-hidden aspect-square border border-brand-stone/10 shadow-2xl relative will-change-transform transition-all duration-300 ease-out reveal-bottom-to-top"
          >
            <img 
              src="/consultant-desk.png" 
              alt="Indian real estate consultant reviewing blueprint records" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/15" />
          </div>

          {/* Content details */}
          <div className="flex flex-col gap-6 justify-center">
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase">OUR HISTORY</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">
              Established in 2006
            </h2>
            <div className="h-0.5 bg-brand-bronze/30 w-24 rounded" />
            
            <p className="text-sm leading-relaxed text-brand-stone">
              Bhawana Enterprises has been providing end-to-end real estate consultancy backed by strong negotiation techniques and structured transaction deal management.
            </p>
            <p className="text-sm leading-relaxed text-brand-stone">
              From initial negotiation to final registry execution, we ensure every land plot, joint-venture partnership, and commercial asset closing is handled with clarity, confidence, and absolute legal accountability.
            </p>

            <div className="flex gap-8 mt-4 text-xs font-mono uppercase text-brand-bronze font-bold">
              <span>• BUY</span>
              <span>• SELL</span>
              <span>• INVEST</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 & 07 — WHAT WE DO / INTERACTIVE SERVICES */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto bg-brand-dark relative z-40">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">WHAT WE DO</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-wide">
            Consultancy Categories
          </h2>
          <p className="text-xs text-brand-stone mt-4">Hover over any category to preview our Jaipur real estate solutions.</p>
        </div>

        {/* Services interactive lists */}
        <div className="flex flex-col border-t border-brand-stone/10 relative">
          
          {/* Trailing service preview image (Level 1 CSS follow) */}
          {hoveredService !== null && (
            <div
              ref={serviceCursorImgRef}
              className="fixed pointer-events-none z-[100] w-[220px] h-[150px] rounded-xl overflow-hidden border border-brand-bronze shadow-2xl transition-all duration-300 ease-out will-change-transform hidden md:block"
              style={{
                backgroundImage: `url(${services[hoveredService].img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scale(1)',
              }}
            >
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
          )}

          {services.map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className="group py-8 border-b border-brand-stone/10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:pl-4 cursor-none"
              data-cursor="OPEN"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="font-mono text-xs text-brand-stone font-bold group-hover:text-brand-bronze transition-colors">
                  {service.num}
                </span>
                <h3 className="font-serif text-xl md:text-3xl font-bold tracking-wide text-brand-white group-hover:text-brand-bronze transition-colors">
                  {service.name}
                </h3>
              </div>

              <div className="flex flex-col md:items-end text-left md:text-right gap-1 max-w-sm md:max-w-md">
                <p className="text-xs text-brand-stone group-hover:text-brand-light transition-colors leading-relaxed">
                  {service.desc}
                </p>
                <span className="text-[9px] tracking-widest text-brand-bronze font-bold uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 08 — BUY / SELL / RENT PANELS */}
      <section className="py-24 px-6 md:px-12 bg-brand-charcoal relative z-40 border-y border-brand-stone/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            {
              action: "BUY",
              title: "BUY PROPERTY",
              desc: "Acquire pre-verified plots, luxury flats, and commercial properties.",
              link: "/purchase.html",
              img: "/hero-day.png"
            },
            {
              action: "SELL",
              title: "SELL PROPERTY",
              desc: "Maximize asset valuation through pre-qualified developer buyer pools.",
              link: "/sell.html",
              img: "/hero-night.png"
            },
            {
              action: "RENT",
              title: "RENT & LEASE",
              desc: "Secure long-term commercial tenants with institutional leases.",
              link: "/rent.html",
              img: "/transition-aerial.png"
            }
          ].map((panel, idx) => (
            <Link
              key={idx}
              to={panel.link}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-brand-stone/10 flex flex-col justify-between p-8 hover:border-brand-bronze transition-all duration-300 reveal-bottom-to-top"
              data-cursor="EXPLORE"
            >
              {/* Backing image layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${panel.img})` }}
              />
              <div className="absolute inset-0 bg-brand-dark/65 group-hover:bg-brand-dark/55 transition-colors duration-300" />

              <div className="relative z-10">
                <span className="text-[10px] tracking-[4px] font-bold text-brand-stone uppercase block mb-2">Direct Action</span>
                <div className="h-px bg-brand-stone/20 w-16" />
              </div>

              <div className="relative z-10 text-left mt-auto">
                <h3 className="font-serif text-3xl font-extrabold tracking-wide text-brand-white group-hover:text-brand-bronze transition-colors">
                  {panel.action}
                </h3>
                <h4 className="text-[10px] tracking-[2px] font-bold text-brand-stone uppercase mt-2 hidden group-hover:block transition-all">
                  {panel.title} →
                </h4>
                <p className="text-xs text-brand-stone leading-relaxed mt-3 max-w-xs group-hover:text-brand-light transition-colors">
                  {panel.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 09 & 10 — FEATURED PROPERTIES & BLUEPRINT OVERLAY */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative z-40 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">CURATED MATRIX</span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-wide">
                Featured Properties
              </h2>
            </div>
            <Link
              to="/gallery.html"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bronze hover:text-brand-white transition-colors font-bold mt-4 md:mt-0"
              data-cursor="GALLERY"
            >
              Open Gallery <ArrowRight size={14} />
            </Link>
          </div>

          {/* Horizontal scrolling visual properties list */}
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-thin">
            {featuredProperties.map((prop, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-full sm:w-[450px] rounded-3xl border border-brand-stone/10 bg-brand-charcoal overflow-hidden flex flex-col justify-between h-[520px] transition-all duration-300 hover:border-brand-bronze reveal-bottom-to-top"
              >
                {/* Image & Blueprint Container */}
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={prop.img}
                    alt={prop.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/40" />
                  
                  {/* Technical Blueprint Vector Line Art Overlay (Section 10) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-brand-dark/80 p-4 flex items-center justify-center">
                    <svg viewBox="0 0 200 150" className="w-full h-full opacity-85 stroke-brand-white stroke-[0.75] fill-none">
                      <rect x="10" y="10" width="180" height="130" strokeDasharray="3 3" />
                      <line x1="10" y1="75" x2="190" y2="75" />
                      <line x1="100" y1="10" x2="100" y2="140" />
                      <circle cx="100" cy="75" r="30" />
                      <rect x="30" y="30" width="50" height="35" />
                      <rect x="120" y="85" width="50" height="35" />
                      <text x="35" y="45" fill="#B18A57" fontSize="5" fontFamily="monospace">BEDROOM 01</text>
                      <text x="125" y="100" fill="#B18A57" fontSize="5" fontFamily="monospace">LOUNGE MATRIX</text>
                    </svg>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] bg-brand-bronze/10 text-brand-bronze border border-brand-bronze/25 rounded px-2.5 py-1 uppercase tracking-widest font-bold font-mono">
                        {prop.type}
                      </span>
                      <span className="text-xs text-brand-stone font-mono">{prop.specs}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-white mb-2">{prop.name}</h3>
                    <p className="text-xs text-brand-stone leading-relaxed mb-6 font-sans">{prop.desc}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-brand-stone/10 pt-4 mt-auto">
                    <span className="text-[9px] uppercase tracking-[2px] text-brand-stone font-mono">JAIPUR ZONE</span>
                    <Link
                      to={prop.link}
                      className="flex items-center gap-1 text-xs font-bold text-brand-bronze hover:text-brand-white transition-colors"
                      data-cursor="VIEW"
                    >
                      View Blueprint <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          <div className="text-right text-xs text-brand-stone font-mono mt-4">
            01 / 05 • Scroll horizontally
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHAT YOU GET (Interactive Text Reveal) */}
      <section className="py-28 px-6 md:px-12 bg-brand-charcoal relative z-40 border-y border-brand-stone/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">OUR PROMISE</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-16">What You Receive</h2>
          
          <div className="flex flex-col gap-12 text-left">
            {[
              {
                title: "JOINT VENTURE ACQUISITION",
                benefits: [
                  "Fair profit-sharing and area-allocation split models",
                  "Developer risk assessment & contract mitigation guidance",
                  "Detailed project planning milestone reviews",
                  "Structuring long-term generational wealth assets"
                ]
              },
              {
                title: "RENT & LEASE MANAGEMENT",
                benefits: [
                  "Clear, legally bulletproof lease agreements",
                  "Rigorous commercial tenant screening protocols",
                  "Rent collection structure and tax compliance checks",
                  "Complete property handover and exit inspections"
                ]
              },
              {
                title: "BALANCED PROPERTY EXCHANGE",
                benefits: [
                  "Comparative market analysis of both exchange properties",
                  "Structured exchange contracts matching land value splits",
                  "Tax implication advisory to optimize capital gains",
                  "Dual title transfer registration coordination"
                ]
              }
            ].map((section, sIdx) => (
              <div key={sIdx} className="border-b border-brand-stone/10 pb-8">
                <h3 className="font-serif text-lg font-bold text-brand-bronze tracking-wider mb-6">{section.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-brand-stone flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-brand-stone leading-relaxed font-sans">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — THE BHAVANA PROCESS (Sticky Scroll) */}
      <section 
        ref={processSectionRef}
        className="py-32 px-6 md:px-12 max-w-6xl mx-auto bg-brand-dark relative z-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky left panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 h-fit">
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">WORKFLOW</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-6">How We Work</h2>
            <p className="text-xs text-brand-stone leading-relaxed">
              Real estate consultancy is not merely matching lists. We follow a strict protocol to secure your investments.
            </p>
          </div>

          {/* Scrolling steps */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            {[
              { num: "01", step: "UNDERSTAND", desc: "We sit down to document your location parameters, zoning constraints, budget boundaries, and timeline constraints." },
              { num: "02", step: "IDENTIFY", desc: "We screen our off-market holdings and developer catalog to isolate appropriate residential, commercial, or industrial lots." },
              { num: "03", step: "EVALUATE", desc: "We coordinate site inspections, title reviews, and market valuations to confirm capital appreciation forecasts." },
              { num: "04", step: "NEGOTIATE", desc: "We negotiate transaction ratios, developer profit shares, and contract parameters directly to bypass broker chains." },
              { num: "05", step: "COORDINATE", desc: "We coordinate with registry desks, Jaipur Development Authority (JDA) offices, and legal verifications." },
              { num: "06", step: "CLOSE", desc: "We execute the final registry, transfer the title deed, and manage property handovers transparently." }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="border-b border-brand-stone/10 pb-8 flex items-start gap-8"
              >
                <span className="font-serif text-4xl font-extrabold text-brand-bronze leading-none">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-brand-stone font-bold mb-3">{step.step}</h3>
                  <p className="text-xs text-brand-stone leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — TOP PROJECTS (Authorized Partner Wall) */}
      <section className="py-24 px-6 md:px-12 bg-brand-charcoal relative z-40 border-y border-brand-stone/5">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-3">DEVELOPER PARTNERS</span>
          <h2 className="text-2xl md:text-3xl font-serif tracking-wider mb-16">Authorized Consultancy Network</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {builders.map((builder, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredBuilder(idx)}
                onMouseLeave={() => setHoveredBuilder(null)}
                className="p-6 rounded-2xl border border-brand-stone/10 hover:border-brand-bronze bg-brand-dark/50 transition-all duration-300 relative flex flex-col justify-between h-[160px]"
              >
                <span className="font-serif text-base font-extrabold tracking-[2px] block text-brand-white">{builder.name}</span>
                
                {/* List specific sub-projects on hover */}
                <div className="h-12 flex flex-col justify-center overflow-hidden">
                  {hoveredBuilder === idx ? (
                    <div className="animate-fade-in flex flex-col gap-0.5">
                      {builder.projects.slice(0, 2).map((proj, pIdx) => (
                        <span key={pIdx} className="text-[8px] uppercase tracking-widest text-brand-stone font-mono block">
                          {proj}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[8px] uppercase tracking-widest text-brand-stone opacity-50 block font-mono">
                      Hover to view projects
                    </span>
                  )}
                </div>

                <a
                  href={`https://wa.me/917599912345?text=I%20am%20interested%20in%20projects%20by%20${encodeURIComponent(builder.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] tracking-widest uppercase text-brand-bronze font-bold hover:text-brand-white block mt-3"
                  data-cursor="INQUIRE"
                >
                  WhatsApp Inquire →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — INVESTMENT / LAND SECTION */}
      <section 
        ref={investmentSectionRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between p-8 md:p-16"
      >
        <img
          ref={investmentImgRef}
          src="/land-parcels.png"
          alt="Jaipur strategic land parcels investment campaign"
          className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform reveal-bottom-to-top"
        />
        <div className="absolute inset-0 bg-brand-dark/70 z-10" />

        <div className="relative z-20 flex justify-between items-start w-full">
          <span className="text-[10px] tracking-[4px] text-brand-white uppercase font-bold">PORTFOLIO INVESTMENT</span>
          <span className="text-xs font-mono text-brand-stone">LAND ACQUISITIONS</span>
        </div>

        <div className="relative z-20 max-w-2xl mx-auto text-center my-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-white mb-8 leading-tight drop-shadow-2xl">
            THE RIGHT LAND IS MORE THAN AN ASSET.
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono uppercase tracking-[3px] text-brand-stone">
            <span>• AGRICULTURAL</span>
            <span>• INDUSTRIAL</span>
            <span>• COMMERCIAL</span>
            <span>• RESIDENTIAL</span>
          </div>
        </div>

        <div className="relative z-20 flex justify-between w-full text-xs font-mono text-brand-stone border-t border-brand-light/10 pt-4">
          <span>LOCATION</span>
          <span>POTENTIAL</span>
          <span>VALUE</span>
        </div>
      </section>

      {/* SECTION 15 — 20+ YEARS / TRUST */}
      <section className="py-24 px-6 md:px-12 bg-brand-dark relative z-40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-3">TRUST INDEX</span>
            <span className="block text-7xl font-serif font-extrabold text-brand-bronze mb-2">20+</span>
            <h3 className="text-xs uppercase tracking-[4px] text-brand-white font-bold mb-6">YEARS OF REAL ESTATE EXCELLENCE</h3>
            <p className="text-xs text-brand-stone leading-relaxed max-w-sm">
              Established in 2006, Bhawana Enterprises continues to serve as Jaipur's private property registry and land coordination consultant.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video border border-brand-stone/10 shadow-2xl reveal-bottom-to-top">
            <img src="/heritage-jaipur.png" alt="Jaipur real estate trust image" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 16 — TESTIMONIALS */}
      <section className="py-28 px-6 md:px-12 bg-brand-charcoal relative z-40 border-y border-brand-stone/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">CLIENT ENDORSEMENTS</span>
          <h2 className="text-3xl font-serif mb-16">Endorsements</h2>

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

      {/* SECTION 17 — FAQ */}
      <section className="py-28 px-6 md:px-12 max-w-4xl mx-auto bg-brand-dark relative z-40">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">RESOLVING AMBIGUITY</span>
          <h2 className="text-3xl md:text-4xl font-serif">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-brand-stone/10">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full py-5 flex justify-between items-center text-left font-serif text-lg hover:text-brand-bronze transition-colors"
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

      {/* SECTION 18 — CONTACT / JAIPUR */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center p-6 md:p-12 z-40">
        <img
          src="/jaipur-evening.png"
          alt="Jaipur evening city view background"
          className="absolute inset-0 w-full h-full object-cover z-0 reveal-bottom-to-top"
        />
        <div className="absolute inset-0 bg-brand-dark/80 z-10" />

        <div className="relative z-20 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-brand-charcoal/90 border border-brand-stone/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl">
          <div>
            <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3 font-mono">CONTACT</span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-white mb-6">
              LET'S FIND THE RIGHT DEAL.
            </h2>
            <div className="h-0.5 bg-brand-bronze/20 w-16" />
          </div>

          <div className="flex flex-col gap-6 text-xs text-brand-stone">
            <div>
              <h4 className="text-[9px] uppercase tracking-wider text-brand-white font-bold mb-1">Corporate Office</h4>
              <p className="font-sans leading-relaxed">
                REALTY CHAMBER (BHAWANA ENTERPRISES)<br />
                Malviya Nagar, Jaipur, Rajasthan 302017
              </p>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-wider text-brand-white font-bold mb-1">Communications Desk</h4>
              <a href="tel:+917599912345" className="block text-brand-bronze hover:text-brand-white font-serif text-sm font-bold mb-1">
                +91 75999 12345
              </a>
              <a href="mailto:sales@bhawanaenterprises.com" className="block hover:text-brand-white">
                sales@bhawanaenterprises.com
              </a>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-wider text-brand-white font-bold mb-1">Registry Hours</h4>
              <p>Mon – Sun, 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19 — MAP */}
      <section className="py-20 px-6 md:px-12 bg-brand-dark relative z-40 border-t border-brand-stone/5">
        <div className="max-w-5xl mx-auto bg-brand-charcoal border border-brand-stone/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div>
            <span className="text-[9px] tracking-[3px] text-brand-bronze uppercase font-mono">GEOLOCATION</span>
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
            className="bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-white px-8 py-3 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-300 shadow-lg"
            data-cursor="MAP"
          >
            OPEN IN GOOGLE MAPS →
          </a>
        </div>
      </section>

      {/* SECTION 20 — WHATSAPP CTA */}
      <section className="py-28 px-6 md:px-12 bg-brand-charcoal relative z-40 border-y border-brand-stone/5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">DIRECT CHAT</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-white mb-8 leading-tight">
            YOUR NEXT PROPERTY STARTS WITH ONE CONVERSATION.
          </h2>

          <a
            href="https://wa.me/917599912345?text=Welcome%20to%20Bhawana%20Enterprises.%20Your%20trusted%20partner%20for%20premium%20%26%20private%20real%20estate%20deals.%0A%0A*Residential%20%26%20Commercial%20Properties*%0A*Agricultural%2C%20Industrial%20%26%20Land%20Deals*%0A*Farmhouses%20%26%20Off-Market%20Opportunities*%0A*Joint%20Ventures%20%26%20Investment%20Deals*%0A%0AConfidential.%20Professional.%20Result-Oriented.%0A%0APlease%20share%20your%20requirement%3A%0AProperty%20type%2C%20location%2C%20budget%2C%20purpose."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-extrabold transition-colors duration-300 shadow-2xl"
            data-cursor="CHAT"
          >
            CHAT ON WHATSAPP →
          </a>
        </div>
      </section>

      {/* SECTION 21 — FINAL CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative z-40 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="font-serif text-4xl font-extrabold tracking-[8px] text-brand-white block mb-4">
            BHAWANA
            <span className="block text-xs tracking-[6px] text-brand-stone font-sans mt-2">ENTERPRISES</span>
          </span>
          <h3 className="font-serif text-lg text-brand-stone italic mb-8 mt-6">
            “The right deal is one message away.”
          </h3>
          <Link
            to="/contact.html"
            className="text-xs uppercase tracking-widest text-brand-bronze hover:text-brand-white transition-colors font-bold border-b border-brand-bronze pb-1"
            data-cursor="CONTACT"
          >
            CONTACT US →
          </Link>
        </div>
      </section>

    </div>
  )
}
export default Home
