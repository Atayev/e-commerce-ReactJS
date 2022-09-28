import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import './contact.css'
import '../index.css'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

const Contact = () => {
  return (
    <Container fluid className='mb-5'>
      <div className='breadcrump'>
        <h1>CONTACT</h1>
        <Breadcrumb>
          <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
          <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Contact </Link>
        </Breadcrumb>
      </div>
      <Container className='mt-4'>
        <iframe style={{ width: "100%" }} height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=quba&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </Container>

      <Container>
        <Row className='header-contain'>
          <Col xl={4} className='info'>
            <span className='mt-5 fs-3 text-start head'>Contact info</span>
            <span className='cont-info'><span className='fs-5'>Phone:</span><span className='text-dark h-7'>+994555555555</span></span>
            <span className='cont-info'><span className='fs-5'>Email:</span> <span className='text-dark fs-6'>bootstrap@mail.ru</span></span>
            <span className='cont-info'><span span className='fs-5'>Adress:</span><span className='text-dark fs-6'>Baku city</span></span>
          </Col>

          <Col className='inputs' xl={7}>
            <Row className='mt-5 fs-3 text-start head'>Get in Touch</Row>
            <form>
              <Row className='row1'>
                <Col>
                  <label for='name'>First name</label>
                  <input type='text' id='name' />
                </Col>
                <Col>
                  <label for='last'>Last name</label>
                  <input type='text' id='last' />
                </Col>
              </Row>

              <Row className='row2'>
                <Col>
                  <label for='subject'>Subject</label>
                  <input type='text' id='subject' />
                </Col>
              </Row>

              <Row className='row3'>
                <Col>
                  <label for='message'>Message</label>
                  <input type='text' id='message' />
                </Col>
              </Row>
              <Row className='row4'>
                <Col>
                  <button type='submit'>SEND MESSAGE</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact