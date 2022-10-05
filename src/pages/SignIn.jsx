import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const SignIn = () => {
  //const data = useSelector(state => state.signin)
  return (
    <div>
      <p className='text-dark  text-center fs-1 pt-5'>LOGIN</p>
      <div className='text-center mb-3  py-3 d-flex justify-content-center '>
        <Breadcrumb>
          <Link to='/home' className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
          <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'>SIGNIN</Link>
        </Breadcrumb>
      </div>
      <div className="box col-lg-6 my-5 text-center">
        <form>
          <div>
            <span className="label ">Email *</span>
            <input type="email" name="email" placeholder="customer@customer.com" className="label1" />
          </div>
          <div>
            <span className="label mt-3">Password *</span>
            <input type="password" name="password" placeholder="customer123" className="label1" />
          </div>
          <div>
            <button type="submit" className="button w-100 mt-3">Signin</button>
          </div>
          <div className="d-flex mt-3">
            <div className="account col-6">
              <Link to='/signup' className="create">Create a account</Link>
            </div>
            <div className="account col-6">
              <input type="submit" value='Forget Password?' className="forget" />
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignIn;