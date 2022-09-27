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
      <About />
      {/* <Slider />
      <Slider2 />
<<<<<<< HEAD
      <StickyModal />
      <ProductCard/>
      <Footer/>
=======

      <OurProducts/>
      
      <StickyModal /> */}
      <Footer />
>>>>>>> 5b2b87fb9f10a77ed3d575d7d95bbdbc033e7cf4
    </BrowserRouter>
  );
}

export default App;
