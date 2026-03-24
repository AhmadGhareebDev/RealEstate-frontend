import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FeaturedProperty = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from('.property-info > *', {
      x: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
    });

    gsap.from('.main-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    gsap.from('.overlap-image', {
        x: -50,
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
        },
      });
  }, { scope: containerRef });

  return (
    <section id="featured" ref={containerRef} className="bg-surface-container-low py-48 px-8 md:px-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative flex justify-center items-center h-full">
          <div className="main-image relative w-[85%] aspect-12/11 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200@q=80" 
              alt="Victorian Mansion" 
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            />
          </div>

          <div className="overlap-image absolute -bottom-12 -left-8 w-[45%] aspect-square overflow-hidden rounded-sm border border-white/10 shadow-3xl bg-surface/80 z-20">
            <img 
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" 
              alt="Texture Detail" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-surface/20 hover:bg-transparent transition-colors" />
            <div className="absolute top-4 left-4 label-sm text-primary tracking-widest text-[0.6rem]">DETAIL STUDY</div>
          </div>
        </div>

        <div className="property-info flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="label-md text-primary font-bold">CURATOR'S CHOICE</span>
            <h2 className="text-white text-[3rem] md:text-[4.5rem] font-display font-medium leading-[0.9] -ml-1">
              The Obsidian <br /> Pavilion
            </h2>
          </div>

          <p className="body-lg text-on-surface/80 max-w-lg">
            A harmonious intersection of historical Victorian aesthetics and contemporary minimalist philosophy. Situated within a private botanical enclave, this estate offers an unparalleled living experience defined by monolithic volumes and light-filled galleries designed for the world's most significant private art collections.
          </p>

          <div className="flex gap-24 md:gap-32 py-4 border-y border-white/5">
            <div className="flex flex-col gap-1">
              <span className="label-sm text-on-surface/40">VALUE</span>
              <span className="text-white text-2xl font-display font-bold">$18,400,000</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="label-sm text-on-surface/40">VOLUME</span>
              <span className="text-white text-2xl font-display font-bold">12,500 SQ FT</span>
            </div>
          </div>

          <div className="flex items-center gap-8 mt-4">
            <button className="ghost-button flex items-center gap-3 group cursor-pointer">
              VIEW FULL DOSSIER
              <svg 
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
