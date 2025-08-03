import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Expertise from './pages/Expertise.tsx'
import Experience from './pages/Experience.tsx'
import Contact from './pages/Contact.tsx'
import Blog from './pages/Blog.tsx'
import Project from './pages/Project.tsx'
import Dashboard from './admin/Dashboard.tsx'

const adminDashboard = import.meta.env.VITE_DASHBOARD_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/expertise" element={<Expertise/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/project/*" element={<Project/>}/>
        <Route path="/blog/*" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path={adminDashboard} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
