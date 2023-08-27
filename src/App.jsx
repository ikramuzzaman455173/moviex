import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchDataFormApi } from './api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './Store/HomeSlice';
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
  console.log({ url: url?.total_pages });
  useEffect(() => {
    fetchApiConfig()
  }, [])
  const fetchApiConfig = () => {
    fetchDataFormApi("/configuration").then(result => {
      console.log(result);
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
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/expore/:mediaType" element={<Explore />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App