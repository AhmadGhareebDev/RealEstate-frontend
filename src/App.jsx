import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import HeroSection from './sections/HeroSection'


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <div className='h-dvh relative bg-red-200'>
        
      </div>
    </main>
  )
}

export default App