import React from 'react';
// import data from '../../public/data.json';
import { useEffect,useState } from 'react';
import './slider.css';




const Slider = () => {

  const [slider, setSlider] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('../data.json')
      const data =  await response.json()
console.log(data.slider[0]);
      setSlider(data?.slider) 
    }
    fetchData()
  },[])

  console.log(slider);


  
  return (
    <div className="slider">
      <div className="pt-5 bg-slider carousel slide" data-ride="carousel" id="carousel-example-generic">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li> 
            </ol>
              { 
                slider?.map((item,key) => (
                  <React.Fragment key={key}>
                    <div className="my-5 carousel-inner">
                      <div className="px-5 carousel-item active d-flex">
                        <div className="col col-md-6 col-sm-6 mt-5">
                          <span className=' px-5 mx-3 fs-5'>{item?.title}</span>
                          <h1 className=' px-5 mx-3 fw-bold fs-1 my-3'>{item?.name}</h1>
                          <p className=' px-5 mx-3 my-3'>{item?.description}</p>
                          <button className='my-3 bg-btn py-3 px-5 mx-5'>SHOP NOW</button>
                        </div>
                        <div className="col col-md-6 chair mt-5 col-sm-6">
                          <img src={item?.link} alt={item?.name} className="chairsl"/>
                        </div>
                      </div>
                      <div className="px-5 carousel-item d-flex">
                        <div className="col col-md-6 col-sm-6 mt-5">
                          <span className=' px-5 mx-3 fs-5'>{item?.title}</span>
                          <h1 className=' px-5 mx-3 fw-bold fs-1 my-3'>{item?.name}</h1>
                          <p className=' px-5 mx-3 my-3'>{item?.description}</p>
                          <button className='my-3 bg-btn py-3 px-5 mx-5'>SHOP NOW</button>
                        </div>
                        <div className="col col-md-6 chair mt-5 col-sm-6">
                          
                        </div>
                      </div>
                      </div> 
                  </React.Fragment>
                        ))
                      }
        </div>  
        <a className="carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
           </a>
  </div>        
             
  ) 
}

export default Slider;