import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { TESTIMONIALS_CONTENT } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const TestimonialsSection = () => {
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { kicker, titleLines, testimonials } = TESTIMONIALS_CONTENT;
  const cards = useMemo(() => testimonials ?? [], [testimonials]);

  useLayoutEffect(() => {
    if (isMobile || !rootRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray('[data-testimonial-card]');

      gsap.set(cardEls, { opacity: 0, y: 160, rotateX: 5, transformOrigin: '50% 100%' });
      gsap.set(cardEls[0], { opacity: 1, y: 0, rotateX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: () => `+=${Math.max(1, cardEls.length) * 150}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardEls.forEach((el, i) => {
        if (i === 0) return;

        const at = i;

        tl.to(
          el,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: 'none',
          },
          at
        );

        tl.to(
          cardEls[i - 1],
          {
            scale: 0.92,
            y: -40,
            opacity: 0.3,
            duration: 1,
            ease: 'none',
            filter: 'blur(4px)',
          },
          at
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [cards.length, isMobile]);

  return (
    <section id="testimonials" ref={rootRef} className="relative bg-surface py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 md:mb-24">
        <span className="label-md mb-4 block text-primary">{kicker}</span>
        <h2 className="text-white text-4xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight">
          {titleLines[0]} <br className="hidden md:block" /> {titleLines[1]}
        </h2>
      </div>
      
      <div 
        ref={pinRef} 
        className={`${isMobile ? 'flex flex-col gap-8 px-8' : 'relative h-screen flex items-center justify-center pt-20'}`}
      >
        <div className={`${isMobile ? 'flex flex-col gap-8 w-full' : 'relative w-full max-w-5xl h-[500px] px-8'}`}>
          {cards.map((t, idx) => (
            <article
              key={t.person?.name ?? idx}
              data-testimonial-card
              style={!isMobile ? { zIndex: idx + 1 } : {}}
              className={`${
                isMobile 
                ? 'relative bg-surface-container-low rounded-lg p-8 border border-white/5 flex flex-col gap-8'
                : 'absolute inset-x-8 top-0 bottom-0 bg-surface-container-low rounded-lg p-12 md:p-16 border border-white/5 shadow-3xl overflow-hidden flex flex-col justify-between'
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={t.person.avatar} alt={t.person.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-display font-bold uppercase tracking-tight">{t.person.name}</h4>
                    <p className="label-sm text-on-surface-variant/40">{t.person.role}</p>
                  </div>
                </div>

                <div className="text-primary/20">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56931 13 4.017 13H2.017V21H5.017Z" />
                  </svg>
                </div>
              </div>

              {!isMobile && <div className="h-px bg-white/5 w-full my-12" />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <p className="text-white text-2xl md:text-4xl font-display font-medium leading-tight tracking-tight italic">
                  "{t.quoteSummary}"
                </p>
                <p className="body-lg text-on-surface/60 font-body leading-relaxed">
                  {t.quoteDetail}
                </p>
              </div>
              
              {!isMobile && (
                <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
