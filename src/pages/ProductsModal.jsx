import Modal from 'react-bootstrap/Modal';
import { addToCart, addToWishList} from '../app/redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { BsHeart} from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'


function ProductsModal(props){
  const [info, setInfo] = useState({ });
  const [currentProduct, setCurrentProduct] =useState(null);
  const dispatch = useDispatch()
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
      let array = product.find(furniture =>furniture.id===props.productId)
       if(array){
        setCurrentProduct(array);
       }
      }) 
    }
    // eslint-disable-next-line
  },[info] );
    return(
      <Modal className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalheader">
        
        </Modal.Header>
    <Modal.Body>
    <div className="d-flex contain py-1 px-1 infomodal">
       
       <div className="col-6 px-5  colm1">
         <img src={currentProduct?.images} alt="" className="images-productmodal"/>
       </div>
       <div className="col-4 mx-5 colm2 mb-2">
        <h4 className="pt-3">{currentProduct?.name}</h4>
        <span className="">{currentProduct?.price}</span>{" $ "}
       <p className='text-dark fs-6 currentpr pt-3'>{currentProduct?.description}</p>
       <button className='bg-btn my-3' variant="light" onClick={()=>addTo()}><FaShoppingCart className='mr-5' />Add to cart</button>
       <div className="d-flex">
       <div className='icn' onClick={() => addWishlist()}><BsHeart className='pr-5 mb-1'/></div><div className="my-2 wishfs">Add to Wishlist</div>
       </div>
       </div>
       </div>
      </Modal.Body>
      
      
    </Modal>
    );
}



export default ProductsModal;