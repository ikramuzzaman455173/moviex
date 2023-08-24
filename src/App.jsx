import {useState,useEffect} from 'react'
import { fetchDataFormApi } from './api'
const App = () => {
  useEffect(() => {
      apiTesting()
    },[])
  const apiTesting = () => {
    fetchDataFormApi("/movie/popular").then(result => {
            console.log(result);
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
  }
  return (
    <>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Components 😃</div>
    </>
  )
}

export default App