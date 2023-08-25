import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import './style.scss'
import { Provider } from 'react-redux'
import store from './Store/Store'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // children: [
//     //   {

//     //   }
//     // ]
//   },

// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App/>
  </Provider>,

)

