import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import {removeFromCart} from '../app/redux/cartSlice'
import {  CardGroup } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
const CartItem = ({id,images,name,price,category,availability}) => {
    const dispatch = useDispatch()
    const removeFrom = () => {
        dispatch(
            removeFromCart(
                {
                    cart: {
                        id: id,
                    }
                }
            )
        )
    }
  return (
            <div className='d-flex  my-2 carts'>
            <CardGroup className='card-gr mb-3 mx-2 py-2 ' id={id}>
                 <div className='imageCustom'>
                    <Card.Img className='pt-3' src={images} />
                </div>
                <Card.Body className="px-3">
                  <Card.Title className='m-2'>
                      <h6 className='fs-4'>{name}</h6>
                      <p>{category}</p>
                  </Card.Title>
                    
                    <Card.Text className='m-2'>
                      <h6>{price} $</h6>
                      
                    </Card.Text>
                    <Button
                        className='bg-btn my-3 px-3'
                        variant="dark"
                        onClick={() => removeFrom()}>
                        <FaTrashAlt className='pr-5' />
                        Remove from cart
                    </Button>
                </Card.Body>
            </CardGroup>
         
            </div>
        
  )
}

export default CartItem