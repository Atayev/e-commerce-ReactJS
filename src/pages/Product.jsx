import React , {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'
import { BsTrash,BsHeart,BsArrowsFullscreen } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';

const Product = ({ id, images, name, price, category,availability }) => {

    const dispatch = useDispatch()
    const [isActive,setActive] = useState(false)

  const addTo = () => {
    dispatch(

        addToCart(
            {
                cart: {
                    id: id,
                    images: images,
                    name: name,
                    price: price,
                    category: category,
                    availability:availability
                }
            }
        )
      )
      console.log('added')
}
    return (
        <Col xl={3} className='card-prod'>
            <CardGroup className='card-gr' id={id}>
                <div className='img-product-1'><Card.Img variant="top" src={images} className='img-prod' />
                    <Button className='light-button' variant="light" onClick={()=>addTo()}><FaShoppingCart className='mr-5' /> Add to cart</Button>{' '}
                </div>
                <Card.Body className='mt-3'>
                    <Card.Title className='hover-effect text-center'><p className='fs-6'>{category}</p></Card.Title>
                    <Card.Title className='hover-effect text-center'><h6 className='fw-bold'>{name}</h6></Card.Title>
                    <Card.Text>
                        <h6 className='hover-effect text-center'>{price} $</h6>
                    </Card.Text>
                </Card.Body>
            </CardGroup>
            <div className='icn' onClick={() => setActive(!isActive)}>{!isActive ? <BsHeart /> : <BsTrash />  }</div>
            <div className='right-icons'>
                <div className='icn1'><BsArrowsFullscreen /></div>
            </div>
        </Col>
  )
}

export default Product