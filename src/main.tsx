import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Expertise from "./pages/Expertise.tsx";
import Experience from "./pages/Experience.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import Dashboard from "./admin/Dashboard.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { PostsProvider } from "./provider/PostsContext.tsx";
import NotFound from "./pages/NotFound.tsx";

const adminDashboard = import.meta.env.VITE_DASHBOARD_URL;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={adminDashboard} element={<Dashboard />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  </StrictMode>
);
