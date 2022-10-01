import React from 'react';
import { useEffect, useState } from 'react';
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
          <div className="row ">
           <div className=" col-sm-6 col-md-5 col-lg-6 "   >
              <Carousel.Caption className='d-flex justify-content-start align-items-top text-dark carousel-caption  slidertext mb-5' style={{width: '30rem',}} >
                <div className="text-left">
                <h3 className="title">{item?.title}</h3>
                <h1 className="name " >{item?.name}</h1>
                <p className="fs-5 textsize">{item?.description}</p>
                <Button variant="" className="bg-btn2 but-sl">Read More</Button>
                </div>
              </Carousel.Caption>
            </div>
            <div className="col-sm-4 col-md-5 col-lg-6 imageslider">
              <img
                classname="image"
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