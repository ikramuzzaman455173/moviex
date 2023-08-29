import {useState} from 'react'
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/SwitchTab/SwitchTab'
import useFetch from '../../../Hooks/UseFetch'
import Carousel from '../../../Components/Carousel/Carousel'

const UpComing = () => {
  const [endpoint, setEndpoint] = useState("movie")
  const {data,loading} = useFetch(`/${endpoint}/upcoming`)
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Up Coming</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default UpComing
