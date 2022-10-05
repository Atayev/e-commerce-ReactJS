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
import SignIn from './pages/SignIn';
import Info from './pages/Info';
import Signup from './pages/Signup';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/info/:id' element={<Info/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <StickyModal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
