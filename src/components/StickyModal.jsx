import React from 'react'
import './stickymodal.css'
import '../index.css'
import {FiShoppingBag} from 'react-icons/fi'

const StickyModal = () => {
    return (
        <div className='basket'>
                <FiShoppingBag />
            <div className='items'>
                <span>0</span> <span>items</span>
            </div>
            <div className='price'>
                <span>$</span> <span>0</span>
            </div>
        </div>
    )
}

export default StickyModal