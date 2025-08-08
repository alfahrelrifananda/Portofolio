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
const adminDashboard = import.meta.env.VITE_DASHBOARD_URL;
export const ThemeContext = createContext("dark");
export default function App() {
  const [userTheme, setUserTheme] = useState(() => {
    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme === null) {
      return "light";
    } else {
      return savedTheme;
    }
  });

  if (userTheme === "dark") {
    document.documentElement.style.setProperty("--color", "#2e2b26");
    document.documentElement.style.setProperty("--silver", "#bbbbbb");
    document.documentElement.style.setProperty("--timberwolf", "#d6d6d5");
    document.documentElement.style.setProperty("--background-color", "#efebe0");
  } else {
    document.documentElement.style.setProperty("--color", "#efebe0");
    document.documentElement.style.setProperty("--silver", "#efebe0");
    document.documentElement.style.setProperty("--timberwolf", "#000000");
    document.documentElement.style.setProperty("--background-color", "#2e2b26");
  }

  function toggleTheme() {
    if (userTheme === "light") {
      setUserTheme("dark");
      document.documentElement.style.setProperty("--color", "#2e2b26");
      document.documentElement.style.setProperty("--silver", "#bbbbbb");
      document.documentElement.style.setProperty("--timberwolf", "#d6d6d5");
      document.documentElement.style.setProperty(
        "--background-color",
        "#efebe0"
      );
    }
    if (userTheme === "dark") {
      setUserTheme("light");
      document.documentElement.style.setProperty("--color", "#efebe0");
      document.documentElement.style.setProperty("--silver", "#efebe0");
      document.documentElement.style.setProperty("--timberwolf", "#000000");
      document.documentElement.style.setProperty(
        "--background-color",
        "#2e2b26"
      );
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
          </BrowserRouter>
          <div className="buttonThemeContainer">
            <button onClick={toggleTheme} className="buttonThemeToggle">
              {userTheme === "dark"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
          </div>
        </PostsProvider>
      </ThemeContext.Provider>
    </>
  );
}
