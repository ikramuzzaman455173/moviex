import {useState} from 'react'
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/SwitchTab/SwitchTab'
import useFetch from '../../../Hooks/UseFetch'
import Carousel from '../../../Components/Carousel/Carousel'

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day")
  const {data,loading} = useFetch(`/trending/all/${endpoint}`)
  const onTabChange = tab => {
    setEndpoint(tab==='Day'?"day":"week")
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day","Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending
