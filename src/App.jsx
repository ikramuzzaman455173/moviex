import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchDataFormApi } from './api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './Store/HomeSlice';
import HomePage from './Pages/HomePage/HomePage';
import Details from './Pages/Details/Details';
import SearchResult from './Pages/SearchResult/SearchResult';
import Explore from './Pages/Explore/Explore';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
const App = () => {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)
  // console.log({ url: url?.total_pages });
  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])
  const fetchApiConfig = () => {
    fetchDataFormApi("/configuration").then(result => {
      // console.log(result);
      const url = {
        backdrop: result.images.secure_base_url + "original",
        poster: result.images.secure_base_url + "original",
        profile: result.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    }).catch(error => {
      console.log(`Error:`, error.message);
    })
  }

  const genresCall =async () => {
    let promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}
    endpoints.forEach((url) => {
      return promises.push(fetchDataFormApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data?.map(({ genres }) => {
      return genres?.map(item=>(allGenres[item.id]=item))
    })
    // console.log({ allGenres });
    dispatch(getGenres(allGenres))
  }

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
