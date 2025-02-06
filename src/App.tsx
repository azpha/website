import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/index';
import PrivacyPage from './pages/privacy';
import MusicWidget from './pages/music';
import LinksPage from './pages/links';
import NotFound from './pages/NotFound';

import './assets/main.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/music" element={<MusicWidget />} />
      <Route path="/links" element={<LinksPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}