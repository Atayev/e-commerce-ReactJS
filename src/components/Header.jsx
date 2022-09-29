import React from 'react'
import logo from '../assets/img/logo.png'
import { FaSistrix } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import User from '../pages/user'



const Header = () => {
  const reduxState = useSelector( state=>state.cart )
  const [nav, setNav] = useState()
  const [states, setStates] = useState([])
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('../data.json')
      const data =  await response.json()
      setNav(data?.menu)
      setStates(Object.entries(nav[0]))
    }
    fetchData()
  }, [nav, setStates])

  
  return (
    <div className='header'>
      <Container>
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
          
            <Link to='/cart' className='text-decoration-none text-dark'>
            <span className='cartIcon mx-2  px-2 fs-3'>
              <BsHandbag />   
            </span>
            <span className='text-dark'>{reduxState?.cart?.length}</span>
            </Link>
        </div>
      </div>
        </Container>
      <div className='nav'>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='nav text-white text-center'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="m-auto menuItem">
                      {
                        states?.map((item,key) => (
                          <Link key={key} to={`${item[0]}`} className='text-decoration-none px-1 mx-3'>{item[1]}</Link>
                        ))
                }
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
        </div>
    </div> 
  )
}

export default Header