import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSistrix } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import {  useNavigate,Link } from 'react-router-dom'

function SearchModal({ show, showFunc }) {
    const [product,setProduct] = useState()
    const navigate = useNavigate()
    const ref = useRef()
    
      const search = () => {
      console.log(ref.current.value)
      navigate('/search')
      showFunc(true)
    } 
  return (
    <Modal
    size="lg"
    show={show}
    onHide={() => showFunc()}
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
          ref={ref}
                      
        />
        <Button className='modalButton' id="button-addon2">
          <Link className='modalLink' to='/search'><FaSistrix onClick={()=>search()}/></Link>
        </Button>
      </InputGroup>
    </Modal.Body>
  </Modal>
  )
}

export default SearchModal