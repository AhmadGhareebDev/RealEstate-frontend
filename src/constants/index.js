export const TESTIMONIALS_CONTENT = {
  kicker: 'VOICES OF EXCELLENCE',
  titleLines: ['CURATED', 'EXPERIENCES'],
  testimonials: [
    {
      person: {
        name: 'Julian Vane',
        role: 'Architectural Collector',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      },
      quoteSummary: 'A surgical approach to luxury.',
      quoteDetail: 'GH doesn’t just list properties; they curate architectural legacies. Their off-market portfolio is the most significant I’ve encountered in decades of collecting.',
    },
    {
      person: {
        name: 'Elena Rossi',
        role: 'Interior Designer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      },
      quoteSummary: 'The gold standard for residential assets.',
      quoteDetail: 'Every interaction feels like a private gallery tour. They understand the nuance of form and light, making them the only advisory I trust with my most discerning clients.',
    },
    {
      person: {
        name: 'Marcus Thorne',
        role: 'Real Estate Investor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
      quoteSummary: 'Unparalleled market advisory.',
      quoteDetail: 'Their global network and deep understanding of architectural value transformed my portfolio. They bridge the gap between historical heritage and futuristic minimalism effortlessly.',
    },
  ],
};

const defaultOwner = {
  name: 'Aleksandra Ghareeb',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  verified: true,
  type: 'Owner'
};

const defaultAgent = {
  name: 'Xavier Vance',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  verified: true,
  type: 'Agent'
};

export const LISTINGS_DATA = [
  {
    id: 1,
    title: 'The Obsidian Pavilion',
    location: 'Cotswolds, UK',
    price: '$18,400,000',
    type: 'Estate',
    status: 'FOR SALE',
    badge: 'SHOWCASE',
    rating: 5.0,
    reviews: 12,
    specs: { beds: 8, baths: 12, size: '12,500' },
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 2,
    title: 'Monolith Sands',
    location: 'Joshua Tree, CA',
    price: '$7,200,000',
    type: 'Modernist',
    status: 'FOR SALE',
    badge: 'NEW',
    rating: 4.8,
    reviews: 8,
    specs: { beds: 3, baths: 4, size: '4,200' },
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
    owner: defaultAgent
  },
  {
    id: 3,
    title: 'Emerald Terraces',
    location: 'Lake Como, Italy',
    price: '$24,500,000',
    type: 'Classic',
    status: 'FOR SALE',
    badge: 'SHOWCASE',
    rating: 4.9,
    reviews: 15,
    specs: { beds: 12, baths: 15, size: '18,600' },
    img: 'https://images.unsplash.com/photo-1531971511610-976e08f5d1ba?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 4,
    title: 'Void House',
    location: 'Kyoto, Japan',
    price: '$12,800,000',
    type: 'Zen',
    status: 'FOR SALE',
    badge: 'PENDING',
    rating: 4.9,
    reviews: 21,
    specs: { beds: 5, baths: 6, size: '6,800' },
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    owner: { ...defaultAgent, name: 'Suki Sato' }
  },
  {
    id: 5,
    title: 'Solar Helix',
    location: 'Ibiza, Spain',
    price: '$9,100,000',
    type: 'Curvilinear',
    status: 'FOR RENT',
    badge: 'NEW',
    rating: 4.7,
    reviews: 6,
    specs: { beds: 4, baths: 5, size: '5,500' },
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 6,
    title: 'The Concrete Peak',
    location: 'St. Moritz, CH',
    price: '$32,000,000',
    type: 'Alpine Chalet',
    status: 'FOR SALE',
    badge: 'SHOWCASE',
    rating: 5.0,
    reviews: 4,
    specs: { beds: 9, baths: 11, size: '14,200' },
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    owner: defaultAgent
  },
  {
    id: 7,
    title: 'Lumina Loft',
    location: 'SoHo, NY',
    price: '$15,500,000',
    type: 'Penthouse',
    status: 'FOR SALE',
    badge: 'NEW',
    rating: 4.8,
    reviews: 10,
    specs: { beds: 4, baths: 3, size: '3,800' },
    img: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 8,
    title: 'Aqueous Villa',
    location: 'Malibu, CA',
    price: '$21,000,000',
    type: 'Oceanfront',
    status: 'FOR SALE',
    badge: 'SHOWCASE',
    rating: 4.9,
    reviews: 18,
    specs: { beds: 6, baths: 8, size: '9,200' },
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    owner: defaultAgent
  },
  {
    id: 9,
    title: 'Velvet Ridge',
    location: 'Aspen, CO',
    price: '$19,800,000',
    type: 'Lodge',
    status: 'FOR RENT',
    badge: 'NEW',
    rating: 4.7,
    reviews: 9,
    specs: { beds: 7, baths: 9, size: '11,000' },
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 10,
    title: 'Citadel Manor',
    location: 'Provence, FR',
    price: '$14,200,000',
    type: 'Heritage',
    status: 'FOR SALE',
    badge: 'NEW',
    rating: 5.0,
    reviews: 2,
    specs: { beds: 10, baths: 12, size: '15,000' },
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
    owner: defaultAgent
  },
  {
    id: 11,
    title: 'Neon Horizon',
    location: 'Tokyo, JP',
    price: '$8,900,000',
    type: 'Cyber-Minimalist',
    status: 'FOR SALE',
    badge: 'NEW',
    rating: 4.6,
    reviews: 14,
    specs: { beds: 3, baths: 3, size: '2,900' },
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    owner: defaultOwner
  },
  {
    id: 12,
    title: 'Gilded Gate',
    location: 'Bel Air, CA',
    price: '$45,000,000',
    type: 'Mega Mansion',
    status: 'FOR SALE',
    badge: 'SHOWCASE',
    rating: 5.0,
    reviews: 30,
    specs: { beds: 15, baths: 20, size: '25,000' },
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    owner: defaultAgent
  }
];
