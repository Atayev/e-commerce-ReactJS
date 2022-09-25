import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Slider2 from './components/Slider2';
import StickyModal from './components/StickyModal';
import OurProducts from './components/OurProducts';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider2 />
      <OurProducts/>
      <StickyModal />
    </BrowserRouter>
  );
}

export default App;
