import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import CompareItem from '../components/CompareItem'
function Compare() {
  const { compare } = useSelector(state => state.cart)
  return (
    <div className='compare'>
      <div className='headSection'>
      <div className='about text-center'>
        <p className='pt-5 fs-1'>Compare</p>
        <div className='pb-5 d-flex justify-content-center'>
        <Breadcrumb >
              <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
              <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> Compare </Link>
          </Breadcrumb>
        </div>
      </div>
      </div>
      <Container>
      <div className='compareProduct d-flex justify-content-center'>
          {
            compare?.map((comp) => (
              <CompareItem
                id={comp.id}
                name={comp.name}
                price={comp.price}
                images={comp.images}
                category={comp.category}
                availability={comp.availability}
                description={comp.description}
              />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Compare