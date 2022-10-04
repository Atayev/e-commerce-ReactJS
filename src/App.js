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
<<<<<<< HEAD
import Signup from './pages/Signup';
import Search from './components/Search';
import { ToastContainer,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import Info from './pages/Info';


>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b


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
<<<<<<< HEAD
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />} />
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
=======
        <Route path='/info/:id' element={<Info/>} />

        
      </Routes>
      <StickyModal />
      <Footer />
      <SignIn/>
>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b
    </BrowserRouter>
  );
}

export default App;
