import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Slider2 from './components/Slider2';
import StickyModal from './components/StickyModal';
import About from './pages/About'
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import OurProducts from './components/OurProducts';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <Slider2 />
      <StickyModal />
      <ProductCard/>
      <StickyModal /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
