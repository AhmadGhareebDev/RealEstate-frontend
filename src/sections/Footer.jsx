import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-32 px-8 md:px-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-12">
        
        <div className="flex flex-col gap-8 col-span-1 lg:col-span-1">
          <div className="text-white font-display font-medium text-2xl tracking-[0.2em] uppercase">
            GH
          </div>
          <p className="body-lg text-on-surface/60 max-w-xs transition-colors hover:text-on-surface">
            The world's premier destination for architectural masterpieces and rare residential assets. We curate space as fine art, bridging the gap between historical heritage and futuristic minimalism.
          </p>
        </div>

        <div>
          <h4 className="label-md text-white font-bold opacity-40">CONNECT</h4>
          <ul className="flex flex-col gap-4">
            {['Instagram', 'Linkedin', 'Journal'].map((social) => (
              <li key={social}>
                <a href={`#${social.toLowerCase()}`} className="text-on-surface hover:text-primary transition-all duration-300 font-medium tracking-wide">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-md text-white font-bold opacity-40">GLOBAL OFFICES</h4>
          <ul className="flex flex-col gap-4">
            {[
              { city: 'NEW YORK', addr: 'LOWER MANHATTAN' },
              { city: 'LONDON', addr: 'MAYFAIR' },
              { city: 'DUBAI', addr: 'DOWNTOWN' },
            ].map((office) => (
              <li key={office.city} className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm tracking-widest">{office.city}</span>
                <span className="text-on-surface/40 text-[0.75rem] font-medium tracking-wide">{office.addr}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-md text-white font-bold opacity-40">NEWSLETTER</h4>
          <div className="flex flex-col gap-6">
            <p className="text-on-surface/60 text-sm italic">SUBSCRIBE TO RECEIVE CURATED LISTINGS BEFORE THEY REACH THE PUBLIC MARKET.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-medium tracking-widest focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-on-surface/40">
        <div className="flex flex-col gap-2 items-center md:items-start uppercase">
          <span className="label-sm">© 2024 GH. ALL RIGHTS RESERVED.</span>
          <span className="text-[0.6rem] font-medium tracking-[0.4em] text-white/20 uppercase">Architectural Excellence Defined</span>
        </div>
        
        <div className="flex gap-8">
          {['Privacy', 'Terms', 'Accessibility'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="label-sm text-on-surface/40 hover:text-white transition-colors cursor-pointer">
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
