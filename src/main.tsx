import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, HashRouter, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Expertise from './pages/Expertise.tsx'
import Experience from './pages/Experience.tsx'
import Project from './pages/Project.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/expertise" element={<Expertise/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
