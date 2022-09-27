import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import './ProductCard.css'
import '../index.css'

const ProductCard = () => {
    const [product, setProduct] = useState();
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data = await response.json()

            setProduct(data?.products)
        }
        fetchData()
    }, [])
    console.log(product)

    return (
        <Container fluid>
            <Row>
                <h1 className='text-center'>Our Products</h1>
            </Row>
            <Row>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</h6>
            </Row>

            <Row className='product-row justify-content-center align-items-center'>
                {product?.homefurniture.map((x) => (
                    <Col xl={3} className='card-prod'>
                        <CardGroup className='card-gr'>
                            <div className='img-product-1'><Card.Img variant="top" src={x.images} className='img-prod' />
                                <Button className='light-button' variant="light"><FaShoppingCart className='mr-5' /> Add to card</Button>{' '}
                            </div>
                            <Card.Body className='mt-4'>
                                <Card.Title className='hover-effect text-center'><h6>{x.name}</h6></Card.Title>
                                <Card.Text>
                                    <h6 className='hover-effect text-center'>{x.price}</h6>
                                </Card.Text>
                            </Card.Body>
                        </CardGroup>
                        <div onClick={toggleClass} className={`hearth fs-5 ${isActive ? "outline" : "filled"}` }></div>
                        <div className='right-icons'>
                            <div className='icn'><BsArrowsFullscreen /></div>
                            <div className='icn'><BsFillBrightnessHighFill/></div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductCard