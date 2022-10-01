import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Contact = () => {
  return (
    <div>
      <div className='breadcrump'>
      <h1>CONTACT</h1>
      <Breadcrumb>
        <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
        <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Contact </Link>
      </Breadcrumb>
      </div>
      <Container className='my-2'>
      <iframe title='iframe' style={{ width: "100%" }} height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=quba&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
      
        <div className='d-md-flex justify-content-center my-md-5 mx-1'>
          <div className='infoSection d-flex flex-column'>
            <p className='fs-3 text-center'>
              Contact Info
            </p>
            <p><span><b>Phone:</b>+994555555555</span></p>
            <p><span><b>Email:</b>bootstrap@mail.ru</span></p>
            <p><span><b>Adress:</b>Baku,Azerbaijan</span></p>
        </div>
        <div className='formSection text-center'></div>
          <Form className='contactForm mx-md-3'>
          <p className='  fs-3'>Get in touch</p>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name.." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name .." />
              </Form.Group>
              <Form.Group className='mb-2'>
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject here.." />
              </Form.Group>
              <FloatingLabel controlId="txt2" label="Message">
                <Form.Control
                  className='mb-2'
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>

              <Button className='bg-btn' type="submit">
                Send Message
              </Button>
          </Form>
          </div>
        </Container>
    </div>
    
  )
}

export default Contact