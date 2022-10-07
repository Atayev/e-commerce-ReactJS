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
import Signup from './pages/Signup';
import Search from './components/Search';
import { ToastContainer,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Info from './pages/Info';
import Products from './pages/Products';
import Compare from './pages/Compare';
import ProductsModal from './pages/ProductsModal';

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
        <Route path='/compare' element={<Compare />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/info/:id' element={<Info />} />
        <Route path='/search' element={<Search />} />
        <Route path='/productsmodal/:id' element={<ProductsModal />} />
      </Routes>
      <StickyModal />
       <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </BrowserRouter>
  );
}

export default App;

