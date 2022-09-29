import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import StickyModal from './components/StickyModal';
import About from './pages/About'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist />} />
        
      </Routes>
      <StickyModal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
