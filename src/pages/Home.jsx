import React from 'react'
import LatestNews from '../components/LatestNews'
import Slider from '../components/Slider'
import Slider2 from '../components/Slider2'
import AllProducts from '../components/AllProducts'


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Slider2 />
      <AllProducts />
      <LatestNews/>
    </div>
  )
}

export default Home