import React from 'react'
import {BiEdit} from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import {removeFromCart} from '../app/redux/cartSlice'
function CartProduct({ id, images, name, price, category, availabilitiy }) {

    const dispatch = useDispatch()
    const removeFrom = ()=> {
            dispatch(
                removeFromCart({
                    id: id,
                    category:category,
                    name: name,
                    image: images,
                    price: JSON.stringify(price),
                    }
                )
            )
    }
    return (
        
        <div className='cartProduct'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={images} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <BiEdit className='mx-2 fs-5'/>
                    <AiOutlineCloseCircle className='fs-5' onClick={()=>removeFrom()}/>
        </Card.Body>
        </Card> 
    </div>
  )
}

export default CartProduct