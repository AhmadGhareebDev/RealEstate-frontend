import React from 'react';
import AuthInputField from './AuthInputField';

const ClientRegisterForm = ({ onComplete }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* ProgressBar for 1 Step */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[0.6rem] font-bold tracking-widest text-primary">
          <span>STEP 1 OF 1</span>
          <span>BASICS</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full">
          <div className="h-full bg-primary w-full rounded-full" />
        </div>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
        <div className="grid grid-cols-2 gap-4">
          <AuthInputField label="Username" placeholder="alex_gh" required />
          <AuthInputField label="Phone" type="tel" placeholder="+44 7900" required />
        </div>
        <AuthInputField label="Email Address" type="email" placeholder="alex@estate.com" required />
        <div className="flex flex-col gap-2">
          <AuthInputField label="Password" type="password" placeholder="••••••••" required />
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 3 ? 'bg-primary' : 'bg-white/5'}`} />)}
          </div>
        </div>
        <AuthInputField label="Location" placeholder="London, Mayfair" required />
        
        <div className="flex flex-col gap-2">
          <label className="label-sm text-on-surface/40">PROFILE IMAGE</label>
          <div className="border border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center gap-2 hover:border-primary/40 cursor-pointer transition-colors group">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-on-surface/20 group-hover:text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
             <span className="text-[0.6rem] font-bold text-on-surface/40 tracking-widest uppercase">UPLOAD DOSSIER PORTRAIT</span>
          </div>
        </div>

        <button className="primary-gradient-cta w-full flex items-center justify-center gap-3 mt-6">
          INITIATE ACCOUNT
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>

        <div className="flex items-start gap-3 select-none cursor-pointer mt-4 text-[0.6rem] text-on-surface/30 font-bold leading-relaxed tracking-wider">
          <input type="checkbox" className="mt-1 accent-primary" />
          <span>BY CONTINUING, YOU AGREE TO OUR <span className="text-primary hover:underline uppercase">TERMS OF EXCELLENCE</span> AND THE <span className="text-primary hover:underline uppercase">PRIVACY PROTOCOL</span>.</span>
        </div>
      </form>
    </div>
  );
};

export default ClientRegisterForm;
