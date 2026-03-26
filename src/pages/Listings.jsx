import React, { useRef, useState, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LISTINGS_DATA } from '../constants';
import ListingCard from '../components/ListingCard';

const Listings = () => {
  const containerRef = useRef();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = useMemo(() => {
    return LISTINGS_DATA.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'ALL' || item.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, filterStatus]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useGSAP(() => {
    gsap.fromTo('.listing-card', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, ease: 'power3.out' }
    );
  }, { dependencies: [currentPage, filterStatus, searchQuery], scope: containerRef });

  return (
    <section ref={containerRef} className="pt-32 pb-32 px-8 md:px-16 min-h-screen bg-[#0e0e13]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
        
        {/* 1. Header & ADVANCED Filter Bar */}
        <div className="flex flex-col gap-8 pb-8 border-b border-white/5">
          <div className="flex flex-col gap-2">
            <span className="label-sm text-primary tracking-[0.3em]">GH GLOBAL PORTFOLIO</span>
            <h1 className="text-white text-4xl md:text-6xl font-display font-medium tracking-tight">The Collection</h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-surface p-4 rounded-xl border border-white/5 shadow-2xl">
            {/* Left: Search */}
            <div className="flex items-center gap-3 bg-surface-container-low px-6 py-3 rounded-full border border-white/5 w-full lg:w-80 group focus-within:border-primary/40 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-on-surface/40 group-focus-within:text-primary transition-colors">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search location..." 
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/20 w-full font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Center: Toggle */}
            <div className="flex bg-surface-container-low p-1.5 rounded-full border border-white/5">
              {['ALL', 'FOR SALE', 'FOR RENT'].map(status => (
                <button 
                  key={status}
                  onClick={() => { setFilterStatus(status); setCurrentPage(1); }}
                  className={`px-8 py-2 rounded-full text-[0.65rem] font-bold tracking-[0.2em] transition-all cursor-pointer ${
                    filterStatus === status ? 'bg-primary text-surface' : 'text-on-surface/40 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Right: Dropdowns */}
            <div className="flex gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
               {['Price Range', 'Beds & Baths', 'Status: Active'].map(filter => (
                 <button key={filter} className="flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] text-white/60 whitespace-nowrap border border-white/10 px-5 py-3 rounded-full hover:border-primary transition-all cursor-pointer">
                    {filter.toUpperCase()}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </button>
               ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentItems.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

        {/* 3. Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12 py-8">
             <button 
               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
               className={`p-3 rounded-full border border-white/10 hover:border-primary transition-all cursor-pointer ${currentPage === 1 ? 'opacity-20 pointer-events-none' : 'text-white'}`}
             >
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
             </button>

             <div className="flex gap-2">
               {[...Array(totalPages)].map((_, i) => (
                 <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-[0.7rem] font-bold transition-all cursor-pointer border ${
                    currentPage === i + 1 
                    ? 'bg-primary border-primary text-surface' 
                    : 'bg-surface border-white/10 text-on-surface/40 hover:border-primary'
                  }`}
                 >
                   {i + 1}
                 </button>
               ))}
             </div>

             <button 
               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
               className={`p-3 rounded-full border border-white/10 hover:border-primary transition-all cursor-pointer ${currentPage === totalPages ? 'opacity-20 pointer-events-none' : 'text-white'}`}
             >
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
             </button>
          </div>
        )}

        {filteredData.length === 0 && (
          <div className="py-32 flex flex-col items-center gap-4 text-center">
            <h3 className="text-white text-2xl font-display uppercase tracking-widest">No Properties Found</h3>
            <p className="text-on-surface/40 body-lg max-w-xs">Adjust your filters to discover more architectural masterpieces.</p>
            <button onClick={() => { setSearchQuery(''); setFilterStatus('ALL'); }} className="text-primary font-bold tracking-[0.2em] text-[0.7rem] mt-4 border-b border-primary pb-1">RESET FILTERS</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Listings;
