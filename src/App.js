import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import StickyModal from './components/StickyModal';
import About from './pages/About'
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import OurProducts from './components/OurProducts';
import Contact from './pages/Contact';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <StickyModal />
      <Footer /> 

    </BrowserRouter>
  );
}

export default App;
