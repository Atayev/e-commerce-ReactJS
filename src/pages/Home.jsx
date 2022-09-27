import React from 'react'
import OurProducts from '../components/OurProducts'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Slider2 from '../components/Slider2'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Slider2 />
      <ProductCard />
    </div>
  )
}

export default Home