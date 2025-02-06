import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './pages/index';
import PrivacyPage from './pages/privacy';
import MusicWidget from './pages/music';
import LinksPage from './pages/links';

import './assets/main.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

// import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom"
// import './assets/main.css'

// // pages
// import MainPage from './pages/index';
// import PrivacyPage from './pages/privacy';
// import MusicWidget from './pages/music';
// import LinksPage from './pages/links';

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <MainPage />
// //   },
// //   {
// //     path: '/privacy',
// //     element: <PrivacyPage />
// //   },
// //   {
// //     path: '/music',
// //     element: <MusicWidget />
// //   },
// //   {
// //     path: '/links',
// //     element: <LinksPage />
// //   }
// // ])

// // ReactDOM.createRoot(document.getElementById('root')!).render(
// //   <RouterProvider router={router} />
// // )
