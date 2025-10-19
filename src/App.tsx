import { Routes, Route, BrowserRouter } from "react-router";
import About from "./pages/About.tsx";
import Expertise from "./pages/Expertise.tsx";
import Experience from "./pages/Experience.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import Dashboard from "./admin/Dashboard.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { PostsProvider } from "./provider/PostsContext.tsx";
import NotFound from "./pages/NotFound.tsx";
import Home from "./pages/Home.tsx";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";

export const ThemeContext = createContext("dark");
const adminDashboard = import.meta.env.VITE_DASHBOARD_URL;

export default function App() {
  const [userTheme, setUserTheme] = useState(() => {
    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme === null) {
      return "dark";
    } else {
      return savedTheme;
    }
  });

  function darkMode() {
    document.documentElement.style.setProperty("--color", "#2e2b26");
    document.documentElement.style.setProperty("--silver", "#bbbbbb");
    document.documentElement.style.setProperty("--timberwolf", "#d6d6d5");
    document.documentElement.style.setProperty("--background-color", "#efebe0");
  }

  function lightMode() {
    document.documentElement.style.setProperty("--color", "#efebe0");
    document.documentElement.style.setProperty("--silver", "#efebe0");
    document.documentElement.style.setProperty("--timberwolf", "#2d2d2dff");
    document.documentElement.style.setProperty("--background-color", "#1d1d1dff");
  }

  if (userTheme === "dark") {
    darkMode();
  } else {
    lightMode();
  }

  function toggleTheme() {
    if (userTheme === "light") {
      setUserTheme("dark");
      darkMode();
    }
    if (userTheme === "dark") {
      setUserTheme("light");
      lightMode();
    }
  }

  useEffect(() => {
    localStorage.setItem("userTheme", userTheme);
  }, [userTheme]);

  return (
    <>
      <ThemeContext.Provider value={userTheme}>
        <PostsProvider>
          <BrowserRouter>
            <Nav />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path={adminDashboard} element={<Dashboard />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
            <div className="buttonThemeContainer">
              <button onClick={toggleTheme} className="buttonThemeToggle">
                {userTheme === "dark"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"}
              </button>
            </div>
          </BrowserRouter>
        </PostsProvider>
      </ThemeContext.Provider>
    </>
  );
}
