import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import './style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {

    //   }
    // ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)