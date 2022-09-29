import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux/es/exports'
import CartItem from '../components/CartItem'
import Subtotal from '../components/Subtotal'

const Cart = () => {
  const data = useSelector(state => state.cart)
  return (
    <div className='cart'>
      <div className='cartTitle'>
      <p className='text-dark  text-center fs-1 pt-5'>Cart</p>
      <div className='text-center mb-3  py-3 d-flex justify-content-center '>
        <Breadcrumb>
          <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Cart </Link>
          </Breadcrumb>
      </div>
      </div>
      
      <div className='mx-5'>
        {data?.cart.length > 0 ? (data?.cart.map((element) => (
          <CartItem
            id={element?.id}
            category={element?.category}
            name={element?.name}
            images={element?.images}
            price={element?.price}
          />
        ))) : (<p className='text-center fs-4'>There is nothing in your cart.</p>)
        
        } 
        <Subtotal />
      </div>
    </div>
  )
}

export default Cart