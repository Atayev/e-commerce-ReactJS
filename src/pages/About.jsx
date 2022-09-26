import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div className='about'>
      <h1 className='text-dark text-center fs-1 pt-5'>About US</h1>
      <div className='text-center mb-3  py-3 d-flex justify-content-center '>
        <Breadcrumb>
          <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> About </Link>
          </Breadcrumb>
      </div>
      <div className='aboutSection'>
          <h2>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</h2>
        <div className='row'>
          <div className="col-6">
            <img src="" alt="" />
            <h3></h3>
            <p></p>
            </div>
            
        
        </div>   
      </div>
    </div>
  )
}

export default About