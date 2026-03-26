import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Auth from './pages/Auth';
import PropertyDetails from './pages/PropertyDetails';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="listings" element={<Listings />} />
          <Route path="listings/:id" element={<PropertyDetails />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;