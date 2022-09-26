import React from 'react'
import './slider2.css'
import '../index.css'
import { Link } from 'react-router-dom'
import bedroom from '../assets/img/bedroom.png'
import chair from '../assets/img/chair.png'
import dinning from '../assets/img/dinning.png'
import lounge from '../assets/img/lounge.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from 'react-bootstrap'
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
   
    <Swiper className="mySwiper"
    spaceBetween={50}
    slidesPerView={3}
     >
        {
        obj.map((it) => (
          <SwiperSlide className='col-2 m-auto d-flex justify-content-center flex-column text-decoration-none roundedImage'>
                <img src={it[1]} alt='ddc' className='' />
                <span className='p-3'>{it[0]}</span>
            </SwiperSlide>)
          )
        }
      </Swiper>
    )
  }
  
        // {/* {
        //   obj.map((it) => (
        //     <Link to='/categories' className='col-2 p-5 d-flex justify-content-center align-items-center flex-column text-decoration-none'>
        //       <img src={it[1]} alt='ddc' />
        //       <span className='p-3'>{it[0]}</span>
        //     </Link>

        //   )
        //   )
        // } */}
      

export default Slider2