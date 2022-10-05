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
import SearchModal from './SearchModal'
import { useSelector } from 'react-redux';



const Header = () => {
  const reduxState = useSelector(state => state.cart)
  const [nav, setNav] = useState()
  const [states, setStates] = useState([])
  const [lgShow, setLgShow] = useState(false);
  const [visible, setVisible] = useState(false);
 
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
       <div className='nav'>
          <p className='text-white mx-5 py-2'> Welcome to our site! </p>
        </div>
      <Container>
       
      <div className='d-flex justify-content-between py-5'>
        <Link to='/home'>
          <div className='logo'>
          <img src={logo} alt="Furns - Furniture" />
            </div>
            </Link>
        <div className='icons'>
          <span onClick={() => setLgShow(true)}  className='searchIcon icn-1 mx-2 px-2 fs-3'>
            <FaSistrix />
          </span>
            <span onClick={() => setVisible(!visible)} className='loginIcon border-start border-end  mx-2 px-3  fs-3'>
              <FiUser className='icn-1 drop'/>
              <div className={`Drop ${!visible ? 'd-none' : 'd-block'}`}>
                <ul>
                  <li><Link className='indrop' to='/signin'>Sing in</Link></li>
                  <li><Link className='indrop' to='/cart'>Cart</Link></li>
                  <li><Link className='indrop' to='/wishlist'>Wishlist</Link></li>
                  <li><Link className='indrop' to='/compare'>Compare</Link></li>
                </ul>
              </div>
            </span>
            <Link to='/cart' className='text-decoration-none text-dark'>
              <span className='cartIcon mx-2 px-2 fs-3'>
                <BsHandbag className='icn-1' />
              </span>
              <span className='text-dark'>{reduxState?.cart?.length}</span>
            </Link>
          </div>
        </div>
      </Container>
      <div className='nav'>
        <Navbar collapseOnSelect expand="md" className='nav text-white text-center'>
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
      <SearchModal show={lgShow} showFunc={() => setLgShow(false)} />
    </div>
  )
}

export default Header