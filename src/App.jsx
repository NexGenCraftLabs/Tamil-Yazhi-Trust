import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import HeroBanner from './components/HeroBanner';
import ImpactStats from './components/ImpactStats';
import OurPrograms from './components/OurPrograms';
import AboutUs from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function Home() {
  return (
    <>
      <HeroBanner />
      <ImpactStats />
      <OurPrograms />
    </>
  );
}

function App() {
  return (
    <Router>
      
      <HeaderNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<Events />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;