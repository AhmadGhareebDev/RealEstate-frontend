import React from 'react';

const services = [
  {
    title: 'Buy',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.25-2.25" />
      </svg>
    ),
    description: 'Our private off-market portfolio features the world’s most significant residential assets, curated for collectors of fine architecture.',
    link: 'Browse Listings',
  },
  {
    title: 'Rent',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    description: 'Immerse yourself in temporary sanctuaries across the globe, from obsidian desert pavilions to historical European estates.',
    link: 'Explore Retreats',
  },
  {
    title: 'Sell',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
    description: 'Position your architectural masterpiece before our global network of elite curators and high-net-worth connoisseurs.',
    link: 'Consult Advisory',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-surface py-24 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {services.map((service, idx) => (
          <div key={idx} className="service-card group flex flex-col gap-10 bg-surface-container-low p-10 rounded-lg transition-all hover:bg-surface-container-highest cursor-pointer border border-white/5 hover:border-primary/20 aspect-square justify-center">
            
            <div className="flex flex-col gap-8 flex-1 justify-center">
              <div className="text-primary opacity-40 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110 w-fit">
                {service.icon}
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-3xl font-display font-medium uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant/70 font-body text-sm leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>
            </div>
            
            <a 
              href={`#${service.title.toLowerCase()}`}
              className="tertiary-link w-fit flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.2em]"
            >
              {service.link}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
