import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Slider2 from './components/Slider2';
import StickyModal from './components/StickyModal';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <Slider2 />
      <StickyModal />
      <ProductCard/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
