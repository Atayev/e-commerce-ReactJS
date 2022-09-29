import React from 'react'
import './Ourproducts.css'
import '../index.css'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const OurProducts = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col><h1 className='text-center'>Our Products</h1></Col>
                </Row>
                <Row>
                    <Col className='text-center m-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore
                    </Col>
                </Row>
                

            </Container>
        </div>
    )
}

export default OurProducts;