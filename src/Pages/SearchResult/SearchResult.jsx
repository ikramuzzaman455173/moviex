import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFormApi } from '../../api'
import Spinner from '../../Components/Spinner/Spinner'
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper'
import MovieCard from '../../Components/MovieCard/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const SearchResult = () => {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = useParams()
  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFormApi(`/search/multi?query=${query}&page=${pageNum}`).then(result => {
      // console.log(result.);
      setData(result)
      setPageNum((prev) => prev + 1)
      setLoading(false)
    }).catch(error => {
      console.log(`Error:`, error.message);
    })
  }

  const fetchNextPageData = () => {
    fetchDataFormApi(`/search/multi?query=${query}&page=${pageNum}`).then(result => {
      // console.log(result.);
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...result?.results] })
      } else {
        setData(result)
      }
      setPageNum((prev) => prev + 1)
    }).catch(error => {
      console.log(`Error:`, error.message);
    })
  }


  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
  }, [query])

  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true} />}
      {!loading && <>
        <ContentWrapper>
          {!!data && <>
            {data.results.length > 0 ? <>
              <div className="pageTitle">
                {`Search ${data.total_results>1?"results":"result"} of "${query}"`}
              </div>
              {/* <MovieCard/> */}
              <InfiniteScroll next={fetchNextPageData} hasMore={pageNum<=data.total_pages} loader={<Spinner initial={true}/>} className='content' dataLength={data?.results?.length||[]}>
                {data?.results?.map((item, i) => {
                  if (item.media_type === "person") return
                  return(<MovieCard key={i} data={item} fromSearch={true} />)
                })}
              </InfiniteScroll>
            </> : <span className='resultNotFound'>Sorry We,Are Not Found Any Result's </span>}
          </>}
        </ContentWrapper>
      </>}
    </div>
  )
}

export default SearchResult