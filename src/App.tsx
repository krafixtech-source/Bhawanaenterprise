import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Sell } from './pages/Services/Sell'
import { Rent } from './pages/Services/Rent'
import { Purchase } from './pages/Services/Purchase'
import { Exchange } from './pages/Services/Exchange'
import { JointVenture } from './pages/Services/JointVenture'
import { Residential } from './pages/Services/Residential'
import { Industrial } from './pages/Services/Industrial'
import { Commercial } from './pages/Services/Commercial'
import { Agricultural } from './pages/Services/Agricultural'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { Career } from './pages/Career'
import { ThankYou } from './pages/ThankYou'
import { Privacy } from './pages/Legal/Privacy'
import { Terms } from './pages/Legal/Terms'

import './App.css'

// Scroll helper to reset scroll position on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AppContent: React.FC = () => {
  // Initialize Lenis smooth scroll and sync with GSAP
  useEffect(() => {
    // Register plugin to ensure ScrollTrigger matches the environment
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Update ScrollTrigger on scroll events
    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    // Bind Lenis animation loops directly to the GSAP ticker (zero lag)
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
    }
  }, [])


  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-luxury-gold selection:text-black">
      {/* Custom Trailing Mouse Cursor */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navigation />

      {/* Main Pages Frame */}
      <main className="relative w-full min-h-screen">
        <ScrollToTop />
        <Routes>
          {/* Home routes */}
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />

          {/* About Us routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />

          {/* Service items */}
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell.html" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/rent.html" element={<Rent />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase.html" element={<Purchase />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/exchange.html" element={<Exchange />} />
          <Route path="/joint-venture" element={<JointVenture />} />
          <Route path="/joint-venture.html" element={<JointVenture />} />
          
          {/* Land categories */}
          <Route path="/residential-property" element={<Residential />} />
          <Route path="/residential-property.html" element={<Residential />} />
          <Route path="/industrial-property" element={<Industrial />} />
          <Route path="/industrial-property.html" element={<Industrial />} />
          <Route path="/commercial-property" element={<Commercial />} />
          <Route path="/commercial-property.html" element={<Commercial />} />
          <Route path="/agricultural-property" element={<Agricultural />} />
          <Route path="/agricultural-property.html" element={<Agricultural />} />

          {/* Core pages */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career.html" element={<Career />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/thankyou.html" element={<ThankYou />} />

          {/* Legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy.html" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms.html" element={<Terms />} />
        </Routes>
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
