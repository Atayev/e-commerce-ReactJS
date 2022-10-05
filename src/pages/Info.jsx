import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useParams } from 'react-router-dom';
import { BsHeart, BsTrash} from 'react-icons/bs'
import { addToCart, addToWishList} from '../app/redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsPinterest } from 'react-icons/bs'
const Info = () => {
  const dispatch = useDispatch()
  const iconf= [<BsFacebook />, <BsTwitter />, <BsLinkedin/>, <BsYoutube/>, <BsPinterest/>]
  const [isActive,setActive] = useState(false)
  const addWishlist = () => {
    setActive(!isActive)
    dispatch(
        addToWishList(
            {
                wishList: {
                  id: currentProduct.id,
                  images: currentProduct.images,
                  name: currentProduct.name,
                  price: currentProduct.price,
                  category:currentProduct.category,
                  availability:currentProduct.availability
                }
            }
            
        )
        
    )
}
  const addTo = () => {
    dispatch(

        addToCart(
            {
                cart: {
                    id: currentProduct.id,
                    images: currentProduct.images,
                    name: currentProduct.name,
                    price: currentProduct.price,
                    category:currentProduct.category,
                    availability:currentProduct.availability
                }
            }
        )
      )
    toast.success('Product added to cart')
}
  const [info, setInfo] = useState({ });
  const [currentProduct, setCurrentProduct] =useState(null);
  const {id} =useParams();

  useEffect(() =>{
    const fetchData = async() =>{
      const response =await fetch('../data.json')
      const data = await response.json()
      setInfo(data?.products)
    }
    fetchData()
    
  }, []);

  useEffect ( () => {
   
    if (info instanceof Object) {
     Object.values(info).forEach(product =>{
      let array = product.find(furniture =>furniture.id===id)
       if(array){
        setCurrentProduct(array);
       }
      }) 
    }
    
  },[info] );



  return (
      <div className="">
          <div className="about">
              <p className='text-dark  text-center fs-1 pt-5'>{currentProduct?.name}</p> 
                <div className='text-center mb-5  py-3 d-flex justify-content-center '>
                  <Breadcrumb>
                    <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
                      <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'>PRODUCT</Link>{" / "}
                      <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'>{currentProduct?.name}</Link>
                  </Breadcrumb>
                </div>
                  </div>
                <div className="d-md-flex py-5 mx-5">
                <div className="">
                  <img src={currentProduct?.images} alt="" className="images-info mx-3"/>
                </div>
                <div className="">
                  <h4 className="pt-3">{currentProduct?.name}</h4>
                  <span className=""><b>price:</b> {currentProduct?.price}</span>{" $ "}
                <p className='text-dark fs-6 currentpr pt-3'> {currentProduct?.description}</p>
                <button className='bg-btn my-3' variant="light" onClick={()=>addTo()}><FaShoppingCart className='mr-5' />Add to cart</button>
                <div className='icn' onClick={() => addWishlist()}><BsHeart /></div>
            </div>
        </div>
    </div>
  )
}

export default Info;