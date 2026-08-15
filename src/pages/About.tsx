import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const About: React.FC = () => {
  const storyImgRef = useRef<HTMLDivElement>(null)
  
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const aboutLeftImgRef = useRef<HTMLDivElement>(null)
  const aboutRightImgRef = useRef<HTMLDivElement>(null)
  const aboutCounterRef = useRef<HTMLSpanElement>(null)
  const processSectionRef = useRef<HTMLDivElement>(null)

  // Mouse move handler for story image parallax tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) - 0.5
      const ny = (e.clientY / window.innerHeight) - 0.5

      if (storyImgRef.current) {
        const rect = storyImgRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          storyImgRef.current.style.transform = `translate3d(${-nx * 12}px, ${-ny * 12}px, 0) scale(1.03)`
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // About Section entrance
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

  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-light pt-32 pb-24 font-sans relative z-40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">WHO WE ARE</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide text-brand-white">
            Our Story
          </h1>
          <p className="text-brand-stone text-sm mt-4">
            Bhawana Enterprises • Realty Chamber
          </p>
        </div>

        {/* Editorial About Us Section (moved from Home) */}
        <section 
          ref={aboutSectionRef}
          className="py-12 bg-brand-dark relative z-40 mb-20"
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
              
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide mb-6 text-brand-white">
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

        {/* SECTION 05 — OUR STORY (moved from Home) */}
        <section className="py-20 bg-brand-charcoal rounded-3xl border border-brand-stone/10 p-8 md:p-12 mb-20 relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug text-brand-white">
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

        {/* SECTION 11 — WHAT YOU GET (moved from Home) */}
        <section className="py-20 bg-brand-charcoal rounded-3xl border border-brand-stone/10 p-8 md:p-12 mb-20 relative z-40">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] tracking-[4px] text-brand-stone font-bold uppercase block mb-4">OUR PROMISE</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-16 text-brand-white">What You Receive</h2>
            
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

        {/* SECTION 12 — THE BHAVANA PROCESS (moved from Home) */}
        <section 
          ref={processSectionRef}
          className="py-20 bg-brand-dark relative z-40 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky left panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 h-fit">
              <span className="text-[10px] tracking-[4px] text-brand-bronze font-bold uppercase block mb-3">WORKFLOW</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-6 text-brand-white">How We Work</h2>
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

        {/* Milestone Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-brand-stone/10 py-12 mb-20">
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-brand-bronze">2006</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60 text-brand-stone">Year Established</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-brand-bronze">100%</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60 text-brand-stone">Title Compliance</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif font-bold text-brand-bronze">Jaipur</span>
            <span className="text-[10px] tracking-[3px] uppercase opacity-60 text-brand-stone">Core Domain</span>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-6 text-brand-white">Ready to secure your next Jaipur property?</h3>
          <Link
            to="/contact.html"
            className="inline-flex items-center gap-3 bg-brand-white text-brand-dark hover:bg-brand-bronze hover:text-brand-light px-8 py-3.5 rounded-full transition-all duration-300 font-sans text-xs tracking-widest uppercase font-bold"
            data-cursor="CONTACT"
          >
            Connect with our Consultants
          </Link>
        </div>

      </div>
    </div>
  )
}
export default About
