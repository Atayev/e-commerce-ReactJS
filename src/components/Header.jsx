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
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
  const reduxState = useSelector(state => state.cart)
  const [nav, setNav] = useState()
  const [states, setStates] = useState([])
  const [lgShow, setLgShow] = useState(false);
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
        <div className='d-flex justify-content-between py-5'>
          <div className='logo'>
            <img src={logo} alt="Furns - Furniture" />
          </div>
          <div className='icons'>
            <span  onClick={() => setLgShow(true)} className='searchIcon mx-2 px-2 fs-3'>
              <FaSistrix />
            </span>
            <span className='loginIcon mx-2 px-2 border-end border-start fs-3'>
              <FiUser />
            </span>

            <Link to='/cart' className='text-decoration-none text-dark'>
              
              
              <Link to='/cart'>
                <span className='cartIcon mx-2  px-2 fs-3'>
                  <BsHandbag />
                </span>
                <span className='text-dark'>{reduxState?.cart?.length}</span>
              </Link>
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
                  states?.map((item, key) => (
                    <Link key={key} to={`${item[0]}`} className='text-decoration-none px-1 mx-3'>{item[1]}</Link>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='myModal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Search
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your search keyword.."
              aria-label=""
              aria-describedby="basic-addon2"
              className='modalInput'
            />
            <Button className='modalButton' id="button-addon2">
              <Link className='modalLink' to='/search'><FaSistrix /></Link>
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Header