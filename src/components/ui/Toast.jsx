import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Toast = ({ 
  type = 'INFO', // 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO'
  title = 'System Alert', 
  message = 'Notification message description goes here.',
  duration = 5000,
  onClose 
}) => {
  const toastRef = useRef(null);
  const progressRef = useRef(null);

  const icons = {
    SUCCESS: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    ERROR: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    ),
    WARNING: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    INFO: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )
  };

  const colors = {
    SUCCESS: 'text-primary border-primary/20 bg-primary/5',
    ERROR: 'text-red-400 border-red-400/20 bg-red-400/5',
    WARNING: 'text-orange-400 border-orange-400/20 bg-orange-400/5',
    INFO: 'text-sky-400 border-sky-400/20 bg-sky-400/5'
  };

  useGSAP(() => {
    // Arrival Animation
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });
    
    tl.fromTo(toastRef.current, 
      { x: 100, opacity: 0, filter: 'blur(10px)' },
      { x: 0, opacity: 1, filter: 'blur(0px)' }
    );

    // Progress Bar Animation
    gsap.fromTo(progressRef.current,
      { scaleX: 1 },
      { 
        scaleX: 0, 
        duration: duration / 1000, 
        ease: 'none',
        onComplete: () => handleClose()
      }
    );
  }, [duration]);

  const handleClose = () => {
    gsap.to(toastRef.current, {
      x: 50,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.5,
      ease: 'power3.in',
      onComplete: onClose
    });
  };

  return (
    <div 
      ref={toastRef}
      className={`relative group w-[380px] p-5 rounded-xl border backdrop-blur-xl shadow-2xl overflow-hidden glass-card ${colors[type]}`}
    >
      {/* Background Accent Gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${type === 'SUCCESS' ? 'bg-primary' : type === 'ERROR' ? 'bg-red-400' : type === 'WARNING' ? 'bg-orange-400' : 'bg-sky-400'}`} />

      <div className="flex gap-4 relative z-10">
        {/* Icon Container */}
        <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-current/10 bg-current/5 shadow-inner`}>
          {icons[type]}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-1">
          <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/90 font-display italic decoration-primary/30 decoration-1 underline underline-offset-4">
            {title}
          </h4>
          <p className="text-[0.75rem] text-on-surface-variant font-medium leading-relaxed">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="h-fit p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all text-[0.6rem] font-bold uppercase tracking-widest cursor-pointer"
        >
          DISMISS
        </button>
      </div>

      {/* Luxury Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div 
          ref={progressRef}
          className={`h-full origin-left bg-current`}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Toast;
