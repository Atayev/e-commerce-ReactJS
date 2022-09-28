import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer';

import Slider2 from './components/Slider2';
import RelatedProducts from './components/RelatedProducts';

import StickyModal from './components/StickyModal';
import About from './pages/About'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import OurProducts from './components/OurProducts';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
<<<<<<< HEAD
=======
        <Route path='/cart' element={<Cart />} />
>>>>>>> a886cae4b2dbb2fc3c20b3f6e2b0c9a81b5e11b0
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <StickyModal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
