import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

// Layout & Pages
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Listings from './pages/Listings';

// Register GSAP Plugins globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="listings" element={<Listings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;