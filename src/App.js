import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Slider from './components/Slider';
import LatestNews from './components/LatestNews';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <LatestNews/>
    </BrowserRouter>
  );
}

export default App;
