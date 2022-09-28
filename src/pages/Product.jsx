import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';

const Product = ({ id, images, name, price, category }) => {

  const dispatch = useDispatch()


  const addTo = () => {
    dispatch(

        addToCart(
            {
              id: id,
              images: images,
              name: name,
              price: price,
              category:category
            }
        )
    )
}
  return (
                  <Col xl={3} className='card-prod'>
                        <CardGroup className='card-gr'>
                            <div className='img-product-1'><Card.Img variant="top" src={images} className='img-prod' />
                                <Button className='light-button' variant="light" onClick={()=>addTo()}><FaShoppingCart className='mr-5' /> Add to card</Button>{' '}
                            </div>
                            <Card.Body className='mt-4'>
                                <Card.Title className='hover-effect text-center'><p>{category}</p></Card.Title>
                                <Card.Title className='hover-effect text-center'><h6>{name}</h6></Card.Title>
                                <Card.Text>
                                    <h6 className='hover-effect text-center'>{price}</h6>
                                </Card.Text>
                            </Card.Body>
                        </CardGroup>
                        <div className='right-icons'>
                            <div className='icn'><BsArrowsFullscreen /></div>
                            <div className='icn'><BsFillBrightnessHighFill/></div>
                        </div>
                    </Col>
  )
}

export default Product