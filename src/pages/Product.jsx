import React , {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch } from 'react-redux'
import { addToCart, addToCompare, addToWishList, removeFromCompare, removeFromList} from '../app/redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'
import { BsTrash, BsHeart, BsArrowsFullscreen } from 'react-icons/bs'
import {BiGitCompare} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify'


const Product = ({id,images, name, price, category,availability,description }) => {
    
    const dispatch = useDispatch()
    const [isActive, setActive] = useState(false)
    const [isActiveCompare, setActiveCompare] = useState(false)
    const addWishlist = () => {
        setActive(!isActive)
        dispatch(
            addToWishList(
                {
                    wishList: {
                        id: id,
                        images: images,
                        name: name,
                        price: price,
                        category: category,
                        availability:availability
                    }
                }
                
            )
        )
                toast.success('Product added to wishlist')
    }
    const addCompare = () => {
        setActiveCompare(!isActiveCompare)
        dispatch(
            addToCompare(
                {
                    compare: {
                        id: id,
                        images: images,
                        name: name,
                        price: price,
                        category: category,
                        availability: availability,
                        description:description
                    }
                }
            )
        )
                toast.success('Added to Compare List')
    }
    const removeCompare = () => {
        setActiveCompare(!isActiveCompare)
        dispatch(removeFromCompare({ compare: { id: id } }))
        
}
    const removeWishlist = () => {
        setActive(!isActive)
        dispatch(
            removeFromList({ wishList: { id:id } } ) )
    }
    const addTo = () => {
        setActive(!isActive)
    dispatch(
        addToCart(
            {
                cart: {
                    id: id,
                    images: images,
                    name: name,
                    price: price,
                    category: category,
                    availability:availability
                }
            }
        )
      )
      toast.info('Product added to cart')
}

    
    return (
        <Col xl={3} className='card-prod mx-2 my-2'>
            <CardGroup className='card-gr' >
                    <div className='img-product-1'>

                <NavLink to={`/info/${id}`}>
                        <Card.Img variant="top" src={images} className='img-prod' /> 
                </NavLink>
                        
                        <Button className='light-button' variant="light" onClick={() => addTo()}>
                            <FaShoppingCart className='mr-5' /> Add to cart</Button>{' '}
                </div>
                <Card.Body className='mt-3'>
                    <Card.Title className='hover-effect text-center'><p className='fs-6'>{category}</p></Card.Title>
                    <Card.Title className='hover-effect text-center'><h6 className='fw-bold'>{name}</h6></Card.Title>
                    <Card.Text>
                        <h6 className='hover-effect text-center'>{price} $</h6>
                    </Card.Text>
                </Card.Body>
            </CardGroup>
            
            <div className='icn' onClick={() =>!isActive ?  addWishlist() : removeWishlist()}>{!isActive ? <BsHeart /> : <BsTrash />  }</div>
            <div className='right-icons'>
                <div className='icn' onClick={()=>!isActiveCompare ? addCompare(): removeCompare()}>{!isActiveCompare ? <BiGitCompare /> : <BsTrash />}</div>
            </div>
            <div className='desc'>{ description }</div>
        </Col>
  )
}

export default Product