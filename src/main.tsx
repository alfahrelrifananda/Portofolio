import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, HashRouter, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Expertise from './pages/Expertise.tsx'
import Experience from './pages/Experience.tsx'
import Contact from './pages/Contact.tsx'
import Blog from './pages/Blog.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/expertise" element={<Expertise/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
