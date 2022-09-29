import React from 'react';
import { useEffect, useState } from 'react';
import './slider.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    const [slider, setSlider] = useState()
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('../data.json')
        const data = await response.json()
        setSlider(data?.slider)
      }
    fetchData()
  }, [])
  return (
    <Carousel className="bg-slider mb-4">
      {slider?.map((item, key) => (
        <Carousel.Item>
          <div className="row d-flex justify-content-between">
           <div className="col-md-5 mx-0 ">
              <Carousel.Caption className='text-dark mr-5 carousel-caption slidertext' style={{width: '30rem',}}>
                <div className="justify-content-start text-right mb-5 pb-5">
                <h3 className="title">{item?.title}</h3>
                <h1 className="name">{item?.name}</h1>
                <p className="description">{item?.description}</p>
                <Button  className="bg-btn mt-3">Read More</Button>
                </div>
              </Carousel.Caption>
            </div>
            <div className="col-md-5 imageslider m-auto my-5" >
              <img
                src={item?.link}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

      ))}
    </Carousel>
  )
}

export default Slider;