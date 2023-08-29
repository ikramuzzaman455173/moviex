import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'
import UpComing from './UpComing/UpComing'
import NowPlayIng from './NowPlaying/NowPlaying'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated />
      <NowPlayIng/>
      <UpComing/>
      {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default HomePage