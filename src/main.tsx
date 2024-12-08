import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './assets/main.css'

// pages
import MainPage from './pages/index';
import PrivacyPage from './pages/privacy';
import MusicWidget from './pages/music';
import LinksPage from './pages/links';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/privacy',
    element: <PrivacyPage />
  },
  {
    path: '/music',
    element: <MusicWidget />
  },
  {
    path: '/links',
    element: <LinksPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
