import { useGSAP } from '@gsap/react';
import { HERO_CONTENT } from '../constants';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';


const HeroSection = () => {

  const heroRef = useRef()

  useGSAP(() => {


     const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        scrub: 1
      }
    })
    
    gsap.from('.animate' , {opacity : 0 , yPercent: 200 , ease: 'power2.inOut'})

    tl.to('.first-word',  { x: '-5vw', yPercent: -240, ease: 'none' }, 0)
    .to('.second-word', { x:  '32vw',  yPercent:  -360, ease: 'none' }, 0)
    .to('.third-word',  { x: '80vw',  yPercent: -480, ease: 'none' }, 0)
    .to('.brand' , {y: -200} , 0)
  } ,{scope: heroRef , dependencies: []})


  const {
    brand,
    consultationHref,
    consultationLabel,
    bg,
    headlineLines,
    description,
    cta,
  } = HERO_CONTENT;

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg.src} 
          alt={bg.alt} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Top Navigation / Brand */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <h1 className="brand animate text-white text-4xl md:text-6xl font-display tracking-tighter">
          {brand}
        </h1>
        <a href={consultationHref} className=" text-white flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <span className="uppercase text-sm font-medium tracking-widest underline decoration-white/30 underline-offset-8">{consultationLabel}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-4xl">
          <h2 className="animate text-white text-[80px] md:text-[140px] leading-[0.9] font-display mb-6 tracking-tighter">
            <span className='first-word inline-block'>{headlineLines[0]}</span>
            <span className='second-word inline-block'>{headlineLines[1]}</span>
            <span className='third-word inline-block'>{headlineLines[2]}</span>
           </h2>
        </div>
        
        <div className="flex flex-col gap-6 md:max-w-xs mb-4">
          <p className="animate text-white/80 text-lg leading-relaxed font-light">
            {description}
          </p>
          <button className="animate pill-button pill-button-white w-fit group">
            {cta.label}
            <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;