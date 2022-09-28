import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import './ProductCard.css'
import '../index.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/redux/cartSlice'
import Product from '../pages/Product'
const ProductCard = ({}) => {
    const [product, setProduct] = useState();
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch()
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data = await response.json()

            setProduct(data?.products)
        }
        fetchData()
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <h1 className='text-center'>Our Products</h1>
            </Row>
            <Row>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</h6>
            </Row>

            <Row className='product-row justify-content-center align-items-center'>

                {product?.homefurniture.map((x) => (
                        <Product
                            id = {x?.id}
                            images={x?.images} 
                            name= {x?.name}
                            price={x?.price} 
                            category={x?.category}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default ProductCard