import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

const Cart = () => {
  const data = useSelector(state => state.cart)
  console.log(data)
  const [table, setTable] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json')
      const data = await response.json()
      setTable(data?.cart?.tableHead)
      console.log(data?.cart)
    }
    fetchData()
  },[])

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
      
      <div className='my-5'>
        <table  className='m-auto cartTable'>
          <thead >
            <tr>
              {table?.map((th) => (
                <th className='px-5 '>{ th }</th>
              ))}
            </tr>
          </thead>
            {
            Array(data?.cart[0]).map((tr) => (
              <tr>
                <td><img src={ tr?.images } alt="" /></td>
                <td className='mx-2'>{ tr?.name }</td>
                <td className='mx-2 px-4'>{ tr?.price }</td>
                <td className='mx-2'>{ tr?.price }</td>
                <td className='mx-2'>{ tr?.price }</td>
                <td className='px-5 fs-5'>
                  <BiEdit className='mx-2'/>
                  <AiOutlineCloseCircle />
                </td>
                </tr>
              ))
            }
        </table>
      </div>
    </div>
  )
}

export default Cart