import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.hero-headline span', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo('.search-bar', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    gsap.to('.hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Modern Architecture"
          className="hero-bg w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-surface/40 via-transparent to-surface" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center gap-12 text-center">
        <h2 className="hero-headline flex flex-col gap-2">
          {['CURATED', 'ARCHITECTURE'].map((line, idx) => (
            <span key={idx} className="block text-white font-display font-bold text-5xl md:text-8xl tracking-tight leading-none uppercase opacity-0">
              {line}
            </span>
          ))}
        </h2>

        <div className="search-bar glass-card flex items-center gap-4 w-full max-w-2xl px-6 py-4 rounded-full group hover:bg-surface/60 transition-colors duration-300 opacity-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface/40 text-lg"
            placeholder="Address, city, or neighborhood"
          />

          <button className="primary-gradient-cta rounded-full! p-3! flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-surface">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="label-sm text-on-surface/40">SCROLL DISCOVER</span>
        <div className="w-px h-12 bg-linear-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;