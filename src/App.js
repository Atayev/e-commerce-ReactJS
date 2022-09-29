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
import SignIn from './pages/SignIn';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        
      </Routes>
      <StickyModal />
      <Footer />
      <SignIn/>
    </BrowserRouter>
  );
}

export default App;
