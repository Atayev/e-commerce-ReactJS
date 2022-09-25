import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Slider2 from './components/Slider2';
import StickyModal from './components/StickyModal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider2 />
      <StickyModal />
    </BrowserRouter>
  );
}

export default App;
