import React from 'react'
import LatestNews from '../components/LatestNews'
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
      <LatestNews/>
    </div>
  )
}

export default Home