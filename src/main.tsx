import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, HashRouter, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Expertise from './pages/Expertise.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/expertise" element={<Expertise/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
