import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import StickyModal from './components/StickyModal';
import About from './pages/About'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';

import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import OurProducts from './components/OurProducts';
import Contact from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <StickyModal />
      <Contact/>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
