import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Slider from './components/Slider';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
    </BrowserRouter>
  );
}

export default App;
