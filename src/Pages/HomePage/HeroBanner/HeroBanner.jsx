import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import useFetch from '../../../Hooks/UseFetch';
import { useSelector } from 'react-redux';
import Img from '../../../Components/LazyLoadImage/LazyLoadImage';
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper';
const HeroBanner = () => {
  const navigate = useNavigate()
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const { data, loading } = useFetch("/movie/upcoming")
  const {url} = useSelector(state=>state.home)
  // console.log({ data });
  {/* ====random background generate functionality add===== */ }
  useEffect(() => {
    const bg = url.backdrop+data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    // console.log({ bg });
    setBackground(bg)
    },[data])
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className="heroBanner">
    {!loading&&<div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput">
            <input type="text" onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} placeholder="search for a movie and tv's show's...." />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
