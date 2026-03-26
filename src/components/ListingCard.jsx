import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListingCard = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/listings/${item.id}`);
  };

  return (
    <article 
      onClick={handleNavigate}
      className="listing-card group flex flex-col bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl cursor-pointer"
    >
      
      {/* TOP: Image with Overlays */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-primary text-surface text-[0.55rem] font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
            {item.status}
          </span>
          <span className="bg-white/10 backdrop-blur-md text-white text-[0.55rem] font-bold px-3 py-1 rounded-sm tracking-widest uppercase border border-white/10">
            {item.badge}
          </span>
        </div>

        {/* Favorite Overlay */}
        <button 
          onClick={(e) => { e.stopPropagation(); /* handle favorite logic here */ }}
          className="absolute top-4 right-4 bg-surface/40 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/60 hover:text-primary hover:scale-110 transition-all cursor-pointer z-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.89-8.89 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Owner Snippet Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-surface/40 backdrop-blur-xl p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <img src={item.owner.avatar} className="w-8 h-8 rounded-full border border-white/20" alt="Owner" />
            <div className="flex flex-col">
              <span className="text-[0.6rem] text-on-surface/40 font-bold uppercase tracking-widest">Listed by {item.owner.type}</span>
              <div className="flex items-center gap-1">
                <span className="text-white text-xs font-bold">{item.owner.name}</span>
                {item.owner.verified && (
                  <svg className="text-primary" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE: Info Section */}
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-xl font-display font-medium leading-tight group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
            <p className="text-on-surface/40 text-[0.65rem] font-bold tracking-widest uppercase">{item.location}</p>
          </div>
          <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
        </div>

        <div className="flex justify-between py-4 border-y border-white/5 text-[0.6rem] font-bold tracking-[0.2em] text-on-surface/60 uppercase">
          <span className="flex items-center gap-2">{item.specs.beds} Beds</span>
          <span className="flex items-center gap-2">{item.specs.baths} Baths</span>
          <span className="flex items-center gap-2">{item.specs.size} SQ FT</span>
        </div>

        {/* BOTTOM: Ratings & Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <svg className="text-primary" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-white text-xs font-bold">{item.rating}</span>
            <span className="text-on-surface/30 text-[0.65rem] font-medium">({item.reviews})</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
               onClick={handleNavigate}
               className="bg-primary text-surface text-[0.65rem] font-bold tracking-[0.2em] px-5 py-2.5 rounded-sm hover:opacity-90 transition-all cursor-pointer"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ListingCard;
