import React from 'react';

const VerifyCodeForm = ({ email = "alex@estate.com", onComplete }) => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-3">
        <p className="text-[0.8rem] font-bold text-on-surface/40 tracking-[0.15em] uppercase">WE HAVE DISPATCHED A CODE TO</p>
        <p className="text-primary font-display font-medium text-lg italic">{email}</p>
      </div>

      <div className="flex justify-between gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <input 
            key={i} 
            type="text" 
            maxLength={1} 
            className="w-full aspect-square bg-surface-container-low border border-white/5 rounded-lg text-center text-xl font-display font-bold text-white focus:border-primary/40 focus:outline-none transition-all" 
          />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <button 
          onClick={onComplete}
          className="primary-gradient-cta w-full flex items-center justify-center gap-3"
        >
          VERIFY & ENTER
        </button>
        <div className="flex flex-col gap-2">
          <p className="text-[0.6rem] text-on-surface/30 font-bold tracking-widest uppercase">IF YOU DID NOT RECEIVE THE DISPATCH</p>
          <button className="text-[0.7rem] font-bold text-on-surface/40 hover:text-primary tracking-widest uppercase transition-colors">
            RESEND DISPATCH (45s)
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
