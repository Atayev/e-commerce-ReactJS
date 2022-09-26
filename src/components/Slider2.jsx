import React from 'react'
import './slider2.css'
import '../index.css'
import { Link } from 'react-router-dom'
import bedroom from '../assets/img/bedroom.png'
import chair from '../assets/img/chair.png'
import dinning from '../assets/img/dinning.png'
import lounge from '../assets/img/lounge.png'

const Slider2 = () => {
  const objects = {
    "Bedroom": bedroom,
    "Living": chair,
    "Dinning": dinning,
    "Lounge": lounge,
    "Office":chair
  }
  const obj = Object.entries(objects)
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        {
          obj.map((it) => (
            <Link to='/categories' className='circle-product col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
              <img src={it[1]} alt='ddc' />
              <span className='p-3'>{ it[0] }</span>
            </Link>

            )
          )
        }
        
      </div>
    </div>
  )
}

export default Slider2