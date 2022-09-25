import React from 'react'
import { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsPinterest } from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
const Footer = () => {
  const [menuNames,setMenuNames]=useState()
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
  console.log(menus)
  
  return (
    <div className='footer'>
      <Container>
        <div className="row">
        <div className='col-md-3 py-5  aboutUs text-white'>
          <h4 className='py-3'>About Us</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at laudantium eveniet exercitationem optio, soluta ab.</p>
          <div className='social text-white'>
            <ul className='d-flex'>
            {iconf.map((icon) => (
              <li className='listItem list-group-item px-2 py-1'><a href="/" className='text-decoration-none text-white'>{ icon }</a></li>)
            )}
            </ul>
          </div>
        </div>
        <div className='col-md-3 text-white py-5 information'>
          <h4 className='py-3'>Information</h4>
          <ul>
            {
                menus?.information.map((menu) => (
                <li className='list-group-item px-2 py-1'>{ menu }</li>
              ))
              }
          </ul>
        </div>
              
        <div className='col-md-3 py-5 text-white information'>
          <h4 className='py-3'>My Account</h4>
          <ul>
            {
                menus?.myaccount.map((menu) => (
                <li className='list-group-item px-2 py-1'>{ menu }</li>
              ))
              }
          </ul>
        </div>
          <div className='col-md-3 py-5 text-white newsletter'>
            <h4 className='py-3'>NewsLetter</h4>
            <input type="email" className='footerInput' placeholder='Enter a Email Adress' />
            <button className='bg-btn my-1 text-white'>
              <FaTelegramPlane  className='text-white me-2 mb-1'/>
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer