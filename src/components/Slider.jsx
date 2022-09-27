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

      console.log(data.slider[0]);
      setSlider(data?.slider)

    }
    fetchData()
  }, [])

  console.log(slider);



  return (
    <Carousel className="py-5 bg-slider">
      {slider?.map((item, key) => (
        <Carousel.Item>
          <div className="row d-flex justify-content-between">
          
           <div className="col-5 mx-0 ">
              <Carousel.Caption className=' text-dark mr-5 carousel-caption  slidertext' style={{width: '30rem',}}>
                <div className="justify-content-start text-right m-auto mx-auto">
                <h3 className="title">{item?.title}</h3>
                <h1 className="name">{item?.name}</h1>
                <p className="fs-5">{item?.description}</p>
                <Button variant=" mt-3" className="bg-btn">Read More</Button>
                </div>

              </Carousel.Caption>
            </div>
            <div className="col-5 my-5 imageslider m-auto my-5">

              <img
                classname=""
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