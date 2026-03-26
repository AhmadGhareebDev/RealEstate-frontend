import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import LoginForm from '../components/auth/LoginForm';
import ClientRegisterForm from '../components/auth/ClientRegisterForm';
import AgentRegisterForm from '../components/auth/AgentRegisterForm';
import VerifyCodeForm from '../components/auth/VerifyCodeForm';

const Auth = () => {
  const [mode, setMode] = useState('LOGIN'); // 'LOGIN' | 'REGISTER' | 'VERIFY'
  const [role, setRole] = useState('USER'); // 'USER' | 'AGENT'
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo('.auth-card', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, [mode, role]);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-8 flex items-center justify-center bg-[#0e0e13]">
      <div className="auth-card glass-card w-full max-w-[500px] p-10 md:p-12 rounded-2xl flex flex-col gap-10 shadow-2xl relative overflow-hidden">
        
        {/* Abstract Architectural Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        {/* Header Toggle */}
        <div className="flex flex-col gap-6 text-center relative z-10">
          <h2 className="text-white text-3xl font-display font-medium tracking-tight uppercase italic underline-offset-8 decoration-primary/50 decoration-1 underline">
            {mode === 'LOGIN' ? 'ACCESS VAULT' : mode === 'REGISTER' ? 'BECOME CURATOR' : 'SECURE PORTAL'}
          </h2>
          
          {mode !== 'VERIFY' && (
            <div className="flex bg-surface p-1.5 rounded-full border border-white/5 self-center">
              <button 
                onClick={() => setMode('LOGIN')}
                className={`px-8 py-2.5 rounded-full text-[0.65rem] font-bold tracking-[0.2em] transition-all cursor-pointer ${mode === 'LOGIN' ? 'bg-primary text-surface' : 'text-on-surface/40 hover:text-white'}`}
              >LOGIN</button>
              <button 
                onClick={() => setMode('REGISTER')}
                className={`px-8 py-2.5 rounded-full text-[0.65rem] font-bold tracking-[0.2em] transition-all cursor-pointer ${mode === 'REGISTER' ? 'bg-primary text-surface' : 'text-on-surface/40 hover:text-white'}`}
              >REGISTER</button>
            </div>
          )}
        </div>

        {/* Dynamic Form Controller */}
        <div className="relative z-10">
          {mode === 'LOGIN' && (
            <LoginForm onVerify={() => setMode('VERIFY')} />
          )}

          {mode === 'REGISTER' && (
            <div className="flex flex-col gap-8">
              {/* Role Picker (Step 0) */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setRole('USER')}
                  className={`p-6 rounded-xl border flex flex-col gap-3 transition-all cursor-pointer items-center text-center group ${role === 'USER' ? 'border-primary/40 bg-primary/5 shadow-lg' : 'border-white/5 hover:border-white/20 bg-surface'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={role === 'USER' ? 'text-primary' : 'text-on-surface/40'}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span className={`text-[0.65rem] font-bold tracking-widest uppercase transition-colors ${role === 'USER' ? 'text-white' : 'text-on-surface/40'}`}>CLIENT</span>
                </button>
                <button 
                  onClick={() => setRole('AGENT')}
                  className={`p-6 rounded-xl border flex flex-col gap-3 transition-all cursor-pointer items-center text-center group ${role === 'AGENT' ? 'border-primary/40 bg-primary/5 shadow-lg' : 'border-white/5 hover:border-white/20 bg-surface'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={role === 'AGENT' ? 'text-primary' : 'text-on-surface/40'}><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                  <span className={`text-[0.65rem] font-bold tracking-widest uppercase transition-colors ${role === 'AGENT' ? 'text-white' : 'text-on-surface/40'}`}>CURATOR</span>
                </button>
              </div>

              {role === 'USER' ? (
                <ClientRegisterForm onComplete={() => setMode('VERIFY')} />
              ) : (
                <AgentRegisterForm onComplete={() => setMode('VERIFY')} />
              )}
            </div>
          )}

          {mode === 'VERIFY' && (
            <VerifyCodeForm email="alex@estate.com" onComplete={() => console.log('Auth Complete')} />
          )}
        </div>

        {/* Branding Subtext */}
        <div className="text-center pt-4 relative z-10">
          <p className="text-[0.6rem] font-bold text-on-surface/20 tracking-[0.4em] uppercase">
            Architectural Access Protocol v1.0
          </p>
        </div>

      </div>
    </div>
  );
};

export default Auth;
