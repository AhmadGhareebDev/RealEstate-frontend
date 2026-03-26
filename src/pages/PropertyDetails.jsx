import React, { useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LISTINGS_DATA } from '../constants';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useMemo(() => LISTINGS_DATA.find(p => p.id === parseInt(id)), [id]);
  const containerRef = useRef();
  const [activeImg, setActiveImg] = useState(0);

  useGSAP(() => {
    gsap.from('.reveal-up', {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  if (!property) return (
    <div className="h-screen flex items-center justify-center bg-[#0e0e13] text-white">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-display uppercase tracking-widest">Asset Not Found</h2>
        <Link to="/listings" className="text-primary font-bold tracking-[0.2em] border-b border-primary pb-1">RETURN TO COLLECTION</Link>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-[#0e0e13] min-h-screen text-on-surface selection:bg-primary selection:text-surface">
      
      {/* 1. HERO GALLERY SECTION */}
      <section className="pt-24 xl:pt-32 px-4 md:px-8 xl:px-16 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Display */}
        <div className="lg:col-span-12 xl:col-span-9 reveal-up">
           <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-surface-container-low group">
              <img 
                src={property.gallery[activeImg]} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Property View" 
              />
              {/* Badge Overlays */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                 <span className="bg-primary text-surface text-[0.6rem] font-bold px-4 py-2 rounded-sm tracking-[0.3em] uppercase shadow-xl">
                   {property.status}
                 </span>
                 {property.badge && (
                   <span className="bg-white/10 backdrop-blur-xl text-white text-[0.6rem] font-bold px-4 py-2 rounded-sm tracking-[0.3em] uppercase border border-white/10">
                    {property.badge}
                   </span>
                 )}
              </div>
              {/* Counter */}
              <div className="absolute bottom-8 right-8 bg-surface/60 backdrop-blur-xl text-white text-[0.7rem] font-bold px-4 py-2 border border-white/10 tracking-widest">
                {activeImg + 1} OF {property.gallery.length}
              </div>
           </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-3 flex xl:flex-col gap-4 overflow-x-auto xl:overflow-y-auto no-scrollbar reveal-up">
          {property.gallery.map((img, i) => (
            <button 
              key={i}
              onClick={() => setActiveImg(i)}
              className={`relative flex-shrink-0 w-32 xl:w-full aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeImg === i ? 'border-primary opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
            >
               <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
            </button>
          ))}
        </div>
      </section>

      {/* 2. OVERVIEW & ACTIONS */}
      <section className="px-8 md:px-16 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Main Details */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          <div className="flex flex-col gap-10 reveal-up">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="label-md text-primary tracking-[0.4em]">{property.type.toUpperCase()} COLLECTION</span>
                <h1 className="text-white text-5xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight -ml-1">
                  {property.title}
                </h1>
              </div>
              <div className="flex items-center gap-6">
                 <p className="text-white/40 text-[0.85rem] font-medium tracking-[0.1em]">{property.fullAddress}</p>
              </div>
            </div>

            <p className="body-lg text-on-surface/80 max-w-2xl leading-relaxed text-lg font-light">
              {property.description}
            </p>

            <div className="grid grid-cols-3 gap-8 py-10 border-y border-white/5">
              {[
                { label: 'BEDROOMS', val: property.specs.beds, icon: 'bed' },
                { label: 'BATHROOMS', val: property.specs.baths, icon: 'bath' },
                { label: 'VOLUME', val: `${property.specs.size} SQ FT`, icon: 'area' },
              ].map(spec => (
                <div key={spec.label} className="flex flex-col gap-2">
                   <span className="text-[0.6rem] font-bold text-on-surface/30 tracking-[0.3em]">{spec.label}</span>
                   <span className="text-white text-xl font-display font-bold uppercase">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div className="flex flex-col gap-16 reveal-up">
             <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <div className="flex flex-col gap-4">
                   <span className="label-sm text-primary">AUDITED EXPERIENCES</span>
                   <h2 className="text-white text-3xl font-display font-medium uppercase tracking-tight">RESIDENTIAL FEEDBACK</h2>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2">
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} className={s <= Math.round(property.rating) ? 'text-primary' : 'text-white/10'} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        ))}
                      </div>
                      <span className="text-[0.65rem] font-bold text-on-surface/40 mt-1 uppercase tracking-widest">{property.reviews} REVIEWS LOGGED</span>
                   </div>
                   <div className="text-white text-5xl font-display font-bold">{property.rating}</div>
                </div>
             </div>

             <div className="flex flex-col gap-12">
                {property.reviewsList.map((review, i) => (
                  <div key={i} className="flex gap-8 group">
                    <img src={review.avatar} className="w-14 h-14 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Reviewer" />
                    <div className="flex flex-col gap-4 flex-1">
                       <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-1">
                            <span className="text-white font-bold text-sm tracking-widest uppercase">{review.reviewer}</span>
                            <span className="text-on-surface/40 text-[0.6rem] font-medium tracking-widest uppercase">{review.date}</span>
                          </div>
                          <div className="flex gap-1">
                             {[1,2,3,4,5].map(s => (
                               <svg key={s} className={s <= review.rating ? 'text-primary' : 'text-white/5'} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                             ))}
                          </div>
                       </div>
                       <p className="text-on-surface/60 text-base leading-relaxed font-light font-body italic italic-1">"{review.comment}"</p>
                    </div>
                  </div>
                ))}
             </div>

             {/* Review Submission Placeholder */}
             <div className="bg-surface-container-low p-10 rounded-xl border border-white/5 flex flex-col gap-8">
                <h4 className="text-white text-sm font-bold tracking-widest uppercase">WRITE A REVIEW</h4>
                <div className="flex gap-4 items-center">
                   <span className="text-[0.6rem] font-bold text-on-surface/40 uppercase tracking-widest">YOUR RATING:</span>
                   <div className="flex gap-2">
                     {[1,2,3,4,5].map(s => <button key={s} className="text-white/20 hover:text-primary transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></button>)}
                   </div>
                </div>
                <textarea 
                  placeholder="Share your experience with this architectural asset..."
                  className="bg-[#0e0e13] border border-white/10 rounded-lg p-6 min-h-[150px] text-sm text-on-surface focus:outline-none focus:border-primary/40 transition-all resize-none font-light"
                />
                <button className="primary-gradient-cta self-start flex items-center gap-3 px-10">
                  SUBMIT AUDIT
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
             </div>
          </div>
        </div>

        {/* Sidebar Sticky Actions */}
        <div className="lg:col-span-4 flex flex-col gap-10">
           <div className="sticky top-40 flex flex-col gap-8 reveal-up">
              
              {/* Pricing & Key Actions */}
              <div className="bg-[#131318] p-10 rounded-2xl border border-white/10 shadow-3xl flex flex-col gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="label-sm text-on-surface/40 tracking-[0.2em]">RESERVE VALUE</span>
                    <span className="text-white text-4xl font-display font-medium">{property.price}</span>
                 </div>
                 
                 <div className="flex flex-col gap-4">
                    <button className="liquid-electric text-surface py-5 rounded-sm font-bold tracking-[0.25em] text-[0.7rem] uppercase hover:opacity-90 shadow-2xl transition-all cursor-pointer">
                      SCHEDULE PRIVATE TOUR
                    </button>
                    <button className="border border-white/10 text-white py-5 rounded-sm font-bold tracking-[0.25em] text-[0.7rem] uppercase hover:bg-white/5 transition-all cursor-pointer">
                      INITIATE DOSSIER
                    </button>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                       <button className="flex items-center justify-center gap-2 border border-white/5 py-4 rounded-sm text-[0.6rem] font-bold tracking-widest text-on-surface/40 hover:text-primary transition-all cursor-pointer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.89-8.89 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                          FAVORITE
                       </button>
                       <button className="flex items-center justify-center gap-2 border border-white/5 py-4 rounded-sm text-[0.6rem] font-bold tracking-widest text-on-surface/40 hover:text-primary transition-all cursor-pointer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                          SHARE
                       </button>
                    </div>
                 </div>

                 <div className="flex flex-col gap-2 pt-4 border-t border-white/5 text-[0.6rem] font-bold tracking-[0.2em] text-on-surface/20">
                    <span>LISTING ID: GH-{property.id}-2024</span>
                    <span>UPDATED ON {property.updatedAt.toUpperCase()}</span>
                 </div>
              </div>

              {/* Lister Card */}
              <div className="bg-[#131318] p-10 rounded-2xl border border-white/10 shadow-3xl flex flex-col gap-8 overflow-hidden relative group">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-center gap-6 relative z-10">
                   <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 p-1">
                      <img src={property.owner.avatar} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Lister" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                         <span className="text-white font-bold text-base tracking-widest uppercase">{property.owner.name}</span>
                         {property.owner.verified && <svg className="text-primary" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"></path></svg>}
                      </div>
                      <span className="label-sm text-primary font-bold tracking-[0.3em]">{property.owner.type.toUpperCase()} CURATOR</span>
                   </div>
                </div>

                <div className="flex flex-col gap-6 pt-2 relative z-10">
                   {property.owner.brokerage && (
                      <div className="flex flex-col gap-1">
                        <span className="label-sm text-on-surface/20 text-[0.6rem] tracking-[0.2em] uppercase">ASSOCIATED BROKERAGE</span>
                        <span className="text-white text-xs font-bold tracking-widest uppercase">{property.owner.brokerage}</span>
                      </div>
                   )}
                   <div className="flex flex-col gap-3">
                      <a href={`tel:${property.owner.phone}`} className="flex items-center gap-4 text-on-surface/60 hover:text-white transition-colors group/link p-4 border border-white/5 rounded-lg hover:bg-white/5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span className="text-[0.7rem] font-bold tracking-widest">{property.owner.phone}</span>
                      </a>
                      <a href={`mailto:${property.owner.email}`} className="flex items-center gap-4 text-on-surface/60 hover:text-white transition-colors group/link p-4 border border-white/5 rounded-lg hover:bg-white/5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span className="text-[0.7rem] font-bold tracking-widest uppercase">{property.owner.email}</span>
                      </a>
                   </div>
                </div>

                <Link to="/auth" className="text-[0.6rem] font-bold text-primary/40 text-center hover:text-primary tracking-[0.3em] uppercase mt-2">
                  View Professional License
                </Link>
              </div>

           </div>
        </div>

      </section>

      <section className="bg-surface-container-low py-32 px-8 md:px-16 border-t border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
            <div className="flex flex-col gap-4">
               <span className="label-sm text-primary">REFINED SUGGESTIONS</span>
               <h2 className="text-white text-4xl font-display font-medium uppercase tracking-tight">SIMILAR ARCHITECTURAL ASSETS</h2>
            </div>
            <div className="text-on-surface/40 max-w-lg mx-auto body-lg font-light">
               Explore more properties within our surgical portfolio that share the same design language and value spectrum.
            </div>
            <Link to="/listings" className="primary-gradient-cta self-center px-12 mt-8">
               BACK TO COLLECTION
            </Link>
         </div>
      </section>

    </div>
  );
};

export default PropertyDetails;
