import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import CartProduct from '../components/CartProduct'

const Cart = () => {
  const data = useSelector(state => state.cart)
  console.log(data.cart)
  return (
    <div className='cart'>
      <div className='cartTitle'>
      <p className='text-dark  text-center fs-1 pt-5'>Cart</p>
      <div className='text-center mb-3  py-3 d-flex justify-content-center '>
        <Breadcrumb>
          <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> About </Link>
          </Breadcrumb>
      </div>
      </div>
      
      <div className='d-flex'>
        {data?.cart.map((element) => (
          <CartProduct
            id={element?.id}
            category={element?.category}
            name={element?.name}
            images={element?.images}
            price={element?.price}
          />
        ))}
        
      </div>
    </div>
  )
}

export default Cart