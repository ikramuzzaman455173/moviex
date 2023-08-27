import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending/> 
      <div style={{height:1000}}></div>
    </div>
  )
}

export default HomePage
