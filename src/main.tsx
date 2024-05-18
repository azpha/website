import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'

// pages
import MainPage from './index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
