import React, { useState } from 'react';
import AuthInputField from './AuthInputField';

const AgentRegisterForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const submitForm = (e) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Progress Indicator */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[0.6rem] font-bold tracking-widest text-primary">
          <span>STEP {step} OF 2</span>
          <span>{step === 1 ? 'ACCOUNT' : 'LICENSURE'}</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full">
          <div 
            className="h-full bg-primary transition-all duration-500 rounded-full" 
            style={{ width: step === 1 ? '50%' : '100%' }} 
          />
        </div>
      </div>

      <form className="flex flex-col gap-6" onSubmit={step === 1 ? nextStep : submitForm}>
        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <AuthInputField label="Username" placeholder="curator_alex" required />
              <AuthInputField label="Phone" type="tel" placeholder="+44 7900" required />
            </div>
            <AuthInputField label="Email Address" type="email" placeholder="alex@estate.com" required />
            <div className="flex flex-col gap-2">
              <AuthInputField label="Password" type="password" placeholder="••••••••" required />
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-white/5'}`} />)}
              </div>
            </div>
            <AuthInputField label="Location" placeholder="London, Mayfair" required />
            
            <div className="flex flex-col gap-2">
              <label className="label-sm text-on-surface/40 uppercase">PROFILE IMAGE</label>
              <div className="border border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center gap-2 hover:border-primary/40 cursor-pointer transition-colors group">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-on-surface/20 group-hover:text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                 <span className="text-[0.6rem] font-bold text-on-surface/40 tracking-widest uppercase">UPLOAD CURATOR PORTRAIT</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <AuthInputField label="License Number" placeholder="LC-8921-X" required />
            <AuthInputField label="License State" placeholder="California" required />
            <AuthInputField label="Brokerage" placeholder="Sotheby's International" required />
          </>
        )}

        <div className="flex gap-4 mt-6">
          {step === 2 && (
            <button 
              type="button"
              onClick={() => setStep(1)} 
              className="flex-1 text-[0.7rem] font-bold text-on-surface/40 hover:text-white tracking-widest py-4 border border-white/5 rounded-sm hover:bg-white/5 transition-all"
            >BACK</button>
          )}
          <button type="submit" className="primary-gradient-cta flex-1 flex items-center justify-center gap-3">
            {step === 1 ? 'CONTINUE' : 'INITIATE ACCOUNT'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentRegisterForm;
