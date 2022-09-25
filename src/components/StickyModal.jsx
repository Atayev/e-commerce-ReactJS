import React from 'react'
import './stickymodal.css'
import '../index.css'


const StickyModal = () => {
    return (
        <div className='basket d-flex flex-column align-items-center justify-content-center'>
            <div className='basketlogo'><i className="fa-solid fa-bag-shopping"></i></div>
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