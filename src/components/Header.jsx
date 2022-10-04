import React from 'react'
import logo from '../assets/img/logo.png'
import { FaSistrix } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import SearchModal from './SearchModal'
import '../index.css'
import Wishlist from './../pages/Wishlist';
=======
import { useSelector,useDispatch } from 'react-redux';
import User from '../pages/user'

>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b


const Header = () => {
  const reduxState = useSelector(state => state.cart)
  const [nav, setNav] = useState()
  const [states, setStates] = useState([])
<<<<<<< HEAD
  const [lgShow, setLgShow] = useState(false);
  const [visible, setVisible] = useState(false);
 
=======
  const [show, setShow] = useState(false);
>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json')
      const data = await response.json()
      setNav(data?.menu)
      setStates(Object.entries(nav[0]))
    }
    fetchData()
  }, [nav, setStates])



  return (
    <div className='header'>
      <Container>
<<<<<<< HEAD
        <div className='d-flex justify-content-around py-md-5'>
          <div className='logo my-4'>
            <img src={logo} alt="Furns - Furniture" />
          </div>
          <div className='icons ml-5 my-4'>
            <span onClick={() => setLgShow(true)} className='searchIcon mx-2 px-2  fs-3'>
              <FaSistrix className='icn-1' />
=======
      <div className='d-flex justify-content-between py-5'>
        <div className='logo'>
          <img src={logo} alt="Furns - Furniture" />
        </div>
        <div className='icons'>
          <span className='searchIcon mx-2 px-2 fs-3'>
            <FaSistrix />
          </span>
          
          <span className='loginIcon mx-2 px-2 border-end border-start fs-3' onClick={() => setShow(currentShow => !currentShow)}>
            <box-icon name='user' color="blue" size="md"/>
              { show ? <User/> : null }
            <FiUser />
          </span> 
          
            {/* <Link to='/cart' className='text-decoration-none text-dark'>
            <span className='cartIcon mx-2  px-2 fs-3'>
              <BsHandbag />   
>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b
            </span>
            <span onClick={() => setVisible(!visible)} className='loginIcon  mx-2 px-2 fs-3'>
              <FiUser className='icn-1 drop'/>
              <div className={`Drop ${visible ? 'd-none' : 'd-block'}`}>
                <ul>
                  <li><Link className='indrop' to='/signin'>Sing in</Link></li>
                  <li><Link className='indrop' to='/cart'>Cart</Link></li>
                  <li><Link className='indrop' to='/wishlist'>Wishlist</Link></li>
                  <li><Link className='indrop' to='/compare'>Compare</Link></li>
                </ul>
              </div>
            </span>
            </Link> */}
            <Link to='/cart' className='text-decoration-none text-dark'>
              <span className='cartIcon mx-2 px-2 fs-3'>
                <BsHandbag className='icn-1' />
              </span>
              <span className='text-dark'>{reduxState?.cart?.length}</span>
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </Container>
=======
        
        </Container>
>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b
      <div className='nav'>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='nav text-white text-center'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto menuItem">
                {
                  states?.map((item, key) => (
                    <Link key={key} to={`${item[0]}`} className='text-decoration-none px-1 mx-3'>{item[1]}</Link>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
<<<<<<< HEAD
      <SearchModal show={lgShow} showFunc={() => setLgShow(false)} />
=======
      {/* <SearchModal show={ lgShow } showFunc={()=>setLgShow(false)} /> */}
>>>>>>> d7f2e63440262edbf28a7b4fcaab82e7cbf8947b
    </div>
  )
}

export default Header