import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import './stickymodal.css'
import '../index.css'
import { useSelector } from 'react-redux/es/exports';

const StickyModal = () => {
    const data = useSelector(state=>state.cart)
    return (
        <div className='basket d-flex flex-column align-items-center justify-content-center'>
            <div className='basketlogo'><FiShoppingBag /></div>
            <div className='basket'>
                <FiShoppingBag />
                <div className='items'>
                    <span>{ data?.cart.length } items</span>
                </div>
                <div className='price'>
                    <span>$</span> <span>0</span>
                </div>
            </div>
        </div>
    )


}

export default StickyModal