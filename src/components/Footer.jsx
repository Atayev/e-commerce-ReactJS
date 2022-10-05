import React from 'react'
import { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsPinterest } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import paymentMethods from '../assets/img/paymentMethods.png'
const Footer = () => {

  const [menus,setMenus]=useState()
  const iconf= [<BsFacebook />, <BsTwitter />, <BsLinkedin/>, <BsYoutube/>, <BsPinterest/>]
  useEffect(() => {
    const fetchData =async() => {
      const response = await fetch('../data.json')
      const data = await response.json()
      
      setMenus(data?.footerMenus)
    }
    fetchData()
  }, [])
 
  
  return (
    <div className='footer'>
      <Container>
        <div className="row">
        <div className='col-md-3 py-md-5 aboutUs text-white'>
          <h4 className='pt-3 footerTitle text-uppercase'>About Us</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at laudantium eveniet exercitationem optio, soluta ab.</p>
          <div className='social text-white'>
            <ul className='d-flex'>
            {iconf.map((icon,key) => (
              <li key={key} className='listItem list-group-item px-2 py-1'><a href="/" className='text-decoration-none text-white'>{ icon }</a></li>)
            )}
            </ul>
          </div>
        </div>
        <div className='col-md-3 text-white py-md-5 information'>
          <h4 className='pt-3 footerTitle text-uppercase'>Information</h4>
          <ul>
            {
                menus?.information.map((menu,key) => (
                <li key={key} className='list-group-item px-2 py-1'>{ menu }</li>
              ))
              }
          </ul>
        </div>
              
        <div className='col-md-3 py-md-5 text-white information'>
          <h4 className='pt-3 footerTitle text-uppercase'>My Account</h4>
          <ul>
            {
                menus?.myaccount.map((menu,key) => (
               <Link to={'/wishlist'} key={key} className='text-decoration-none text-white'> <li className='list-group-item px-2 py-1'>{ menu }</li> </Link>
              ))
              }
          </ul>
        </div>
          <div className='col-md-3 py-md-5  text-white newsletter'>
            <h4 className='py-3 footerTitle'>News Letter</h4>
            <input type="email" className='footerInput' placeholder='Enter a Email Adress' />
            <button className='bg-btn my-3 text-white'>
              <FaTelegramPlane  className='text-white me-2 mb-1'/>
              Subscribe
            </button>
          </div>
        </div>
        
      </Container>
      <div className="secondFooter">
        <Container className='d-flex justify-content-between py-2'>
          <p className='text-white'>@2021 FUNS. Made with love by ...</p>
          <div className='paymentMethods'>
            <img src={paymentMethods} alt="" />
          </div>
          </Container>
      </div>
      
    </div>
  )
}

export default Footer