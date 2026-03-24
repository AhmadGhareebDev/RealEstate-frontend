import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import Introduction from './sections/Introduction'
import ServicesSection from './sections/ServicesSection'
import FeaturedProperty from './sections/FeaturedProperty'
import TestimonialsSection from './sections/TestimonialsSection'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary selection:text-surface">
      <Navbar />
      <HeroSection />
      <Introduction />
      <ServicesSection />
      <FeaturedProperty />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

export default App