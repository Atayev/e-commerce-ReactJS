import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartTotal,emptyCart } from '../app/redux/cartSlice';

const Subtotal = () => {

  const total = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const empty = () => {
    dispatch(
      emptyCart(
       { cart:[]}
      )
    )
  }
  return (
      <div className='subtotal my-2'>
          <p className='text-center fs-3'>Subtotal:</p>
          <div className='text-end' >
              <b>{ total.cart.length } items </b> 
              <strong>Grand total:{getCartTotal(total.cart)}$</strong>
              <button className='bg-btn m-3'> Proceed to checkout </button>
              <button className='bg-delete m-3' onClick={()=>empty()}>Delete All</button>
          </div>
    </div>
  )
}

export default Subtotal