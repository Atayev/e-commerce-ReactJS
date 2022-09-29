import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import './stickymodal.css'
import '../index.css'
import { useSelector } from 'react-redux/es/exports'; 
import { getCartTotal } from '../app/redux/cartSlice';
import {useNavigate} from 'react-router-dom'
const StickyModal = () => {
    const total = useSelector(state=>state.cart)
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/cart')} className='basket d-flex flex-column align-items-center justify-content-center'>
            <div className='basketlogo'><FiShoppingBag /></div>
            <div className='basket'>
                <FiShoppingBag />
                <div className='items'>
                    <span>{ total?.cart.length } items</span>
                </div>
                <div className='price'>
                    <span>{getCartTotal( total?.cart) } $</span>
                </div>
            </div>
        </div>
    )


}

export default StickyModal