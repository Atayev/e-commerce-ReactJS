import React from 'react';
import { useEffect,useState } from 'react';
import './slider.css';


const Slider = () => {

  const [slider, setSlider] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('../data.json')
      const data =  await response.json()
      console.log(data.slider[0]);
      setSlider([data.slider[0]])
     
    }
    fetchData()
  },[])

   console.log(slider);
  
  return (
    <div className="slider">
      <div className="pt-5 bg-slider">
        <div className="row my-5">
          
            {
             slider?.map((item,key) => (
             
                  <div className="px-5 row" key={key}>
                    <div className="col col-md-6 mt-5">
                      <span className=' px-5 mx-3 fs-5'>{item.title}</span>
                      <h1 className=' px-5 mx-3 fw-bold fs-1 my-3'>{item.name}</h1>
                      <p className=' px-5 mx-3 my-3'>{item.description}</p>
                      <button className='bg-btn mx-5 px-5 my-5'>Shop Now</button>
                    </div>
                    <div className="col col-md-6 mt-5">
                    <img src={item.link} alt={item.name} className="chairsl mr-5"/>
                    </div>
                  </div>
              
                  ))
                      }
        </div>
      </div>
  </div> 
  ) 
}

export default Slider;