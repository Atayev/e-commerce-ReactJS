import React, { useEffect, useState } from 'react';
import './wishlist.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromList } from '../app/redux/cartSlice';
const Wishlist = () => { 
  const [table, setTable] = useState()
  const state = useSelector(state => state.cart)
  const dispatch= useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json')
      const data = await response.json()
      setTable(data?.tableHeads)
    }
    fetchData()
  }, [])
  const addTo = () => {
    dispatch(

        addToCart(
            {
                cart: {
                    id: state.wishList.id,
                    images: state.wishList.images,
                    name: state.wishList.name,
                    price: state.wishList.price,
                    category: state.wishList.category,
                    availability:state.wishList.availability
                }
            }
        )
      )
      console.log('added')
  }
  
  const removeFrom = () => {
    dispatch(
      removeFromList(
        {
            wishList: {
                id:state.wishList.id
            }
        }
    )
    )
  }
  return (
    <div className="wish">
      <p className='py-5 fs-1'>Wishlist</p>
      <div className='container'>
      <table className='m-auto'>
          <thead>
            <tr className='tableHead'>
              {table?.map((th) => (
                <th className='px-2'>
                  {th}
                </th>
                ))}
            </tr>
              {state?.wishList.map((wish) => (
            <tr>
                <td>
                 <img src={wish.images} alt="" />
                  </td>
                <td>
                 {wish.name}
                  </td>
                <td>
                 {wish.price}$
                  </td>
                  <td>
                    <button className='bg-btn' onClick={()=>addTo()}>Add to Cart</button>
                  </td>
                  <td>
                    <AiOutlineCloseCircle onClick={()=>removeFrom()}/>
                  </td>
                </tr>
                ))}
            </thead>
          </table>
      </div>
    </div>
  )
}

export default Wishlist