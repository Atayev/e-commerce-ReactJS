import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import Product from './Product';
function Products() {
    const options = [
        {value:'', text:'Relevance'},
        {value:'price1', text:'Price (Low - High)'},
        {value:'price2', text:'Price (High - Low)'},
        {value:'name1', text:'Name (A - Z)'},
        {value:'name2', text:'Name (Z - A)'}
    ]
    // const options2 = [
    //     {value:'', text:'All'},
    //     {value:'home', text:'Home furniture'},
    //     {value:'office', text:'Office furniture'},
    //     {value:'hospital', text:'Hospital furniture'},
    // ]
    const [selected, setSelected] = useState(options[0].value)
    // const [selected2, setSelected2] = useState(options2[0].value)
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

    const handleSort = (sortProp) => {
        setSelected(sortProp)
        if (sortProp === 'price1') setProducts(products.sort((product1, product2) => product1.price - product2.price))
        else if (sortProp === 'price2') setProducts(products.sort((product1, product2) => product2.price - product1.price))
        else if (sortProp === 'name1') setProducts(products.sort((product1,product2)=>product1.name>product2.name ? 1 : -1))
        else if (sortProp === 'name2') setProducts(products.sort((product1, product2) => product1.name > product2.name ? -1 : 1))
        else setProducts(products)
    }

    // const handleSortByCategories = (sortProp2) => {
    //     setSelected2(sortProp2)
    //     if(sortProp2 === '') setProducts(products)
    //     if (sortProp2 === 'home') console.log(products.filter((product) => product.category === 'Home furniture'))
    //     if (sortProp2 === 'office') console.log(products.filter((product) => product.category === 'Office furniture'))
    //     if (sortProp2 === 'hospital') console.log(products.filter((product) => product.category === 'Hospital furniture'))
            
        
        
    // }
    
  return (
      <div className='products'>
            <div className='about text-center'>
                <p className='pt-5 fs-1'>Products</p>
                    <div className='pb-5 d-flex justify-content-center'>
                        <Breadcrumb >
                            <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
                            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Products </Link>
                        </Breadcrumb>
                    </div>
          </div>
          <Container fluid>
          <div className='infoSection my-5'>
                  <div className='headSection d-flex justify-content-between mx-5'>
                        <div>
                        <p className='mt-3'>Showing {products?.length} products</p>
                    </div>  
                    <div className='sort d-flex my-2'>
                    <p className='mx-2 mt-2'>Sort By:</p>
                        <div className=''>
                        <select value={selected} onChange={(e)=>handleSort(e.target.value)} className='selectSort'>
                                  {
                                      options.map((opt) => (
                                          <option value={opt.value}>{ opt.text }</option>
                                      ))
                                }
                              </select>
                              
                        </div>
                        {/* <p className='mx-2 mt-2'>Sort By Category:</p>
                        <div className=''>
                        <select value={selected2} onChange={(e)=>handleSortByCategories(e.target.value)} className='selectSort'>
                                  {
                                      options2.map((opt) => (
                                          <option value={opt.value}>{ opt.text }</option>
                                      ))
                                }
                              </select>
                        </div> */}
                  </div>
                 </div>
              </div>
              <div className='d-flex justify-content-center flex-wrap my-5'>
                    {products?.map((x) => (
                            <Product
                                id = {x?.id}
                                images={x?.images} 
                                name= {x?.name}
                                price={x?.price} 
                                category={x?.category}
                            />  
                    ))}
            </div>
          </Container>

      </div>
  )
}

export default Products
