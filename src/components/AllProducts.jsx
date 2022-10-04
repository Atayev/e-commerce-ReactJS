import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Product from '../pages/Product'
const AllProducts = () => {
    const [products, setProducts] = useState();
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data = await response.json()
            setProducts((Object.values(data?.products))
                .filter((x) => Array.isArray(x))
                .flat()
            )
        }
        fetchData()
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <h1 className='text-center my-3'>Our Products</h1>
            </Row>
            <Row>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</h6>
            </Row>
            <Row className='product-row justify-content-center align-items-center'>
                {products?.map((x) => (
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

export default AllProducts