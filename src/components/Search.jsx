import { useSelector } from 'react-redux'
import Product from '../pages/Product'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
function Search() {
    const state = useSelector(state => state.cart)
    return (
        <>
            <div className='search about'>
            <p className='text-center fs-1 pt-5'>Search</p>
            <div className='text-center mb-3  pb-5 d-flex justify-content-center '>
                <Breadcrumb>
                    <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
                    <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Search </Link>
                </Breadcrumb>
            </div>
        </div>
            <Container fluid>
                <Row className='product-row justify-content-center align-items-center py-5'>
                    {
                        state.search ?
                            state.search.product?.map((prod, key) => (
                                <Product
                                    key={key}
                                    id={prod.id}
                                    name={prod.name}
                                    images={prod.images}
                                    price={prod.price}
                                    category={prod.category} />
                                    )) 
                        : (<p className='text-center fs-4'> No such item or product founded... </p>)
                }
                </Row>
            </Container>
        </>
           
  
  )
}

export default Search