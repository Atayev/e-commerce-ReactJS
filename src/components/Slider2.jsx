import React from 'react'
import bedroom from '../assets/img/bedroom.png'
import chair from '../assets/img/chair.png'
import dinning from '../assets/img/dinning.png'
import lounge from '../assets/img/lounge.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay ,Pagination} from 'swiper'
import { Container } from 'react-bootstrap'
import 'swiper/css';


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
   <Container className='mb-5'>
      <Swiper
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        spaceBetween={40}
        slidesPerView={4}
        slidesPerGroup={4}
        loop={true}
        pagination={{
        el: '.swiper-pagination',
        clickable: true}}
      >
          {
          obj.map((it,key) => (
            <SwiperSlide key={key} className='col-4 m-3 d-flex justify-content-center flex-column text-decoration-none roundedImage'>
                  <img src={it[1]} alt='ddc' className='' />
                  <span className='p-3'>{it[0]}</span>
              </SwiperSlide>)
            )
          }
        </Swiper>  
   </Container>
    
      )
    }
    
       

export default Slider2