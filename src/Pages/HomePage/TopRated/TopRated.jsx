import {useState} from 'react'
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/SwitchTab/SwitchTab'
import useFetch from '../../../Hooks/UseFetch'
import Carousel from '../../../Components/Carousel/Carousel'

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie")
  const {data,loading} = useFetch(`/${endpoint}/top_rated`)
  const onTabChange = tab => {
    setEndpoint(tab==='Movies'?"movie":"tv")
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movies","Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default TopRated
