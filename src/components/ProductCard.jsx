import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import './ProductCard.css'
import '../index.css'
import Product from '../pages/Product'
const ProductCard = () => {
    const [product, setProduct] = useState();
    

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

                {product?.officefurniture.map((x) => (
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