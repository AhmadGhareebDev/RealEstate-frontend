import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -200',
      toggleClass: { targets: navRef.current, className: 'glass-nav' }
    });
  }, { scope: navRef });

  const navLinks = [
    { name: 'Collection', path: '/#introduction' },
    { name: 'Services', path: '/#services' },
    { name: 'Listings', path: '/listings' },
    { name: 'Voices', path: '/#testimonials' },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#') && isHome) {
      e.preventDefault();
      const id = path.split('#')[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex items-center px-8 md:px-16 py-6 transition-all duration-500">
      
      <div className="flex-1">
        <Link 
          to="/"
          onClick={(e) => { if (isHome) { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}}
          className="text-white font-display font-medium text-lg tracking-[0.4em] cursor-pointer w-fit"
        >
          GH
        </Link>
      </div>

      <div className="hidden lg:flex gap-12 flex-none">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={(e) => handleNavClick(e, link.path)}
            className={`text-on-surface/80 hover:text-white transition-all text-[0.7rem] font-bold tracking-[0.3em] relative group`}
          >
            {link.name.toUpperCase()}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-end gap-8">
        <button className="text-on-surface/60 hover:text-white transition-colors cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        
        <button className="text-on-surface/60 hover:text-white transition-colors text-[0.7rem] font-bold tracking-[0.2em] cursor-pointer">
          SIGN IN
        </button>

        <Link to="/listings" className="liquid-electric text-surface px-6 py-2.5 rounded-sm text-[0.7rem] font-bold tracking-[0.2em] hover:opacity-90 transition-all cursor-pointer">
          LIST PROPERTY
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
