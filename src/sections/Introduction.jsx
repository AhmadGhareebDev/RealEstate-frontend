import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Introduction = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from('.intro-content > *', {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="introduction" ref={containerRef} className="bg-surface pt-32 pb-16 px-8 md:px-16 flex flex-col overflow-hidden">
      <div className="intro-content grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto w-full">
        <div>
          <span className="label-md inline-block mb-3">THE COLLECTION</span>
          <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-display font-medium leading-tight">
            Discover <br className="hidden md:block" /> Modern Luxury
          </h2>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <p className="body-lg text-on-surface/80 max-w-lg leading-relaxed">
            Redefining the residential experience through a curated approach to architectural excellence. We specialize in high-end properties that marry sculptural form with functional luxury, creating environments that serve as personal sanctuaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
