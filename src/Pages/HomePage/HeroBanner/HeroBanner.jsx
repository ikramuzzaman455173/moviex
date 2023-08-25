import {useState} from 'react'
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const navigate = useNavigate()
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput">
            <input type="text" onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} placeholder="search for a movie and tv's show's...." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner


