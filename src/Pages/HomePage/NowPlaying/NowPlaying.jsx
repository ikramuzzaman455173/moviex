import {useState} from 'react'
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/SwitchTab/SwitchTab'
import useFetch from '../../../Hooks/UseFetch'
import Carousel from '../../../Components/Carousel/Carousel'

const NowPlayIng = () => {
  const [endpoint, setEndpoint] = useState("movie")
  const {data,loading} = useFetch(`/${endpoint}/now_playing`)
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Now Playing</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default NowPlayIng
