import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './assets/main.css'

// pages
import MainPage from './index';
import Experience from './experience';

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "experience",
    element: <Experience />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
