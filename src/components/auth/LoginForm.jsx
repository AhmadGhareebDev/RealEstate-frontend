import React from 'react';
import AuthInputField from './AuthInputField';

const LoginForm = ({ onVerify }) => (
  <form className="flex flex-col gap-8">
    <AuthInputField label="Email Address" type="email" placeholder="curator@architect.com" required />
    <div className="flex flex-col gap-3">
      <AuthInputField label="Password" type="password" placeholder="••••••••" required />
      <button className="text-[0.6rem] font-bold text-primary/60 hover:text-primary tracking-widest uppercase self-end">Forgot Password?</button>
    </div>

    <div className="flex items-center gap-3 select-none cursor-pointer group">
      <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
        <input type="checkbox" className="opacity-0 absolute" />
        <div className="w-2.5 h-2.5 bg-primary rounded-sm hidden" />
      </div>
      <span className="text-[0.7rem] text-on-surface/40 font-bold tracking-widest uppercase">REMEMBER THIS DEVICE</span>
    </div>

    <button className="primary-gradient-cta w-full flex items-center justify-center gap-3">
      ENTER SYSTEM
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  </form>
);

export default LoginForm;
