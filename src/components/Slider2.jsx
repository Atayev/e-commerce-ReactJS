import React from 'react'
import './slider2.css'
import '../index.css'
import { Link } from 'react-router-dom'
import berdroom from '../assets/img/bedroom.png'
import chair from '../assets/img/chair.png'
import dinning from '../assets/img/dinning.png'
import lounge from '../assets/img/lounge.png'



const Slider2 = () => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
          <img src={berdroom} alt='ddc' />
          <span className='p-3'>Bedroom</span>
        </Link>

        <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
          <img src={chair} alt='ddc' />
          <span className='p-3'>Living</span>
        </Link>
        
        <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
          <img src={dinning} alt='ddc' />
          <span className='p-3'>Dining</span>
        </Link>

        <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
          <img src={lounge} alt='ddc' />
          <span className='p-3'>Lounge</span>
        </Link>

        <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
          <img src={chair} alt='ddc' />
          <span className='p-3'>Office</span>
        </Link>
      </div>
    </div>
  )
}

export default Slider2