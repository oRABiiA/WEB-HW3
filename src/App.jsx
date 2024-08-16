import { useState, createContext, useContext, useEffect } from "react";
import Home from "./Components/Home-Components/Home.jsx";
import Footer from "./Components/Layout-Components/Footer.jsx";
import UploadPage from "./Components/UploadPage-Components/UploadPage.jsx";
import ChartPage from "./Components/ChartPage-Components/ChartPage.jsx";
import Header from "./Components/Layout-Components/Header.jsx";
import About from "./Components/Header-Components/About.jsx";
import Contact from "./Components/Header-Components/Contact.jsx";
import FAQ from "./Components/Header-Components/FAQ.jsx";
import CreatePage from "./Components/CreatePage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Create context for theme and data
export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

/**
 * 
 * The `App` component is the main application container that:
 * 
 * - Manages global state for theme, user data, and current page.
 * - Provides context for theme and data using `ThemeContext` and `DataContext`.
 * - Renders different page components (`Home`, `ChartPage`, `UploadPage`, `CreatePage`, `About`, `Contact`, `FAQ`) based on the `currentPage` state.
 * - Handles theme toggling and page transitions with animations and smooth scrolling.
 * - Initializes AOS for scroll animations and ensures the page scrolls to the top on refresh.
 * 
 * The component includes a `Header` and `Footer` for consistent layout across different pages.
 */

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [fadeIn, setFadeIn] = useState(true);
  const [user, setUser] = useState(null);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Initialize AOS (Animate On Scroll) library on component mount
  useEffect(() => {
    AOS.init({ duration: 2350 });
  }, []);

  useEffect(() => {
    // Check for user in local storage on app load
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Ensure the page starts at the top when refreshed or navigated away from
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Handle page changes with optional scrolling behavior
  const handlePageChange = (page, options = {}) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPage(page);
      setFadeIn(true);
      if (options.scrollToBottom) {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }, 50);
      } else {
        // for other pages to start from the top
        window.scrollTo(0, 0);
      }
    }, 300);
  };
  // Render the current page component based on `currentPage` state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={handlePageChange}
            user={user}
            setUser={setUser}
          />
        );
      case "chartPage":
        return <ChartPage data={data} setCurrentPage={handlePageChange} />;
      case "uploadPage":
        return <UploadPage setCurrentPage={handlePageChange} user={user} />;
      case "createPage":
        return <CreatePage setCurrentPage={handlePageChange} />;
      case "about":
        return <About setCurrentPage={handlePageChange} />;
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />;
      case "faq":
        return <FAQ />;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <DataContext.Provider value={{ data, setData }}>
        <div
          className={`flex flex-col min-h-screen transition-colors duration-500 ease-in-out ${
            theme === "light" ? "bg-customBlue" : "bg-customDark"
          }`}
        >
          <Header setCurrentPage={handlePageChange} />
          <div
            className={`flex-grow transition-opacity duration-300 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {renderPage()}
          </div>
          <Footer />
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
