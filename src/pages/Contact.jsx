import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './contact.css'

const Contact = () => {
  return (
    <Container fluid>

      <Container>
        <iframe style={{width:"100%"}} height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=quba&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </Container>

      <Container>
        <Row>
          <Col xl={4} className='info'>
              <span className='mt-5'><h3>Contact info</h3></span>
              <span className='d-flex align-items-center'><h5>Phone:</h5> <span>+994555555555</span></span>
              <span className='d-flex align-items-center'><h5>Email:</h5> <span>bootstrap@mail.ru</span></span>
              <span className='d-flex align-items-center'><h5>Adress:</h5><span>Baku city</span></span>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact