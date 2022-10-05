import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Signup = () => {
  return (
    <div>
      <div className='container-fluid mainhead'>
        <p className='text-dark  text-center fs-1 pt-5'>CREATE ACCOUNT</p>
        <div className='text-center mb-3  py-3 d-flex justify-content-center '>
          <Breadcrumb>
            <Link to='/home' className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'>SIGNUP</Link>
          </Breadcrumb>
        </div>
      </div>

      <div className='container-fluid mb-5 mt-5 d-flex justify-content-center'>
        <div className='col-md-5 main-container'>
            <div className='row mx-4 mt-2'>
              <label htmlFor='name'>First name * </label>
              <input id='name' type='text' />
          </div>
            
            <div className='row mx-4 mt-2'>
              <label htmlFor='surname'>Last name * </label>
              <input  id='surname' type='text' />
            </div>

          <div className='mt-2 mx-4 row'>
            <label htmlFor='email'>Email*</label>
            <input id='email' type='text' />
          </div>

          <div className='mt-2 mx-4 row '>
            <label htmlFor='phone'>Phone*</label>
            <input id='phone' type='text'/>
          </div>

          <div className='mt-2 mx-4 row '>
            <label htmlFor='password'>Password*</label>
            <input id='password' type='text' />
          </div>

          <div className='mt-2 mx-4 row '>
            <label htmlFor='confirm'>Confirm Password*</label>
            <input id='password' type='text' />
          </div>

            <div className='mx-4 mt-4'>
            <input className='check' name='vehicle1' type="checkbox" id="vehicle1" value="" />
            <label htmlFor='vehicle1' className='ps-1'>I've read and accept the Privacy Policy</label>
            </div>

          <div className='mb-3 mt-4 mx-4'>
          <button className='bg-btn'>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup