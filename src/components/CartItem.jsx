import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import {removeFromCart} from '../app/redux/cartSlice'
import {  CardGroup } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
import {toast} from 'react-toastify'

const CartItem = ({id,images,name,price,category,availability}) => {
    const dispatch = useDispatch()
    const removeFrom = () => {
        dispatch(
            removeFromCart(
                {
                    id: id,
                }
            )
      )
      toast.warning('Product successfully deleted from your cart')
    }
  return (

            <div className='d-md-flex  my-2 carts  my-2 carts'>
            <CardGroup className='px-3 py-2 py-2 ' id={id}>
                 <div className='imageCustom'>
                    <Card.Img className='pt-3mx-3' src={images} />
                </div>
                <Card.Body className="px-3">
                  <Card.Title className='m-2'>
                      <p>{category}</p>
                      <h6 className='fs-4'>{name}</h6>
                  </Card.Title>
                    <Card.Text className='m-2'>
                      <h6><b>Price:</b>{price} $</h6>
                    </Card.Text>
                    <Button
                        className='bg-btn my-3 px-3'
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