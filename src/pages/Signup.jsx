import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './singup.css'
import '../index.css'
import { InputGroup } from 'react-bootstrap'

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
        <div className='col-5 main-container'>
          <div className='mt-3 row row1 row3'>
            <div className='col'>
              <label for='name'>First name*</label>
              <input id='name' type='text' />
            </div>

            <div className='col '>
              <label for='surname'>Last name*</label>
              <input  id='surname' type='text' />
            </div>
          </div>

          <div className='mt-2 row row1'>
            <label for='email'>Email*</label>
            <input id='email' type='text' />
          </div>

          <div className='mt-2 row row1'>
            <label for='phone'>Phone*</label>
            <input id='phone' type='text'/>
          </div>

          <div className='mt-2 row row1'>
            <label for='password'>Password*</label>
            <input id='password' type='text' />
          </div>

          <div className='mt-2 row row1'>
            <label for='confirm'>Confirm Password*</label>
            <input id='confirm' type='text' />
          </div>

          <div className='mt-4 row d-flex'>
            <div>
            <input className='check mx-2' name='vehicle1' type="checkbox" id="vehicle1" value="" />
            <label for='vehicle1'>I've read and accept the Privacy Policy</label>
            </div>
          </div>

          <div className='mb-2 mt-4 row row1'>
          <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup