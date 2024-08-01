import { useState, createContext, useContext, useEffect } from "react";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer";
import UploadPage from "./Components/UploadPage.jsx";
import ChartPage from "./Components/ChartPage.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import FAQ from "./Components/FAQ.jsx";
import CreatePage from "./Components/CreatePage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [fadeIn, setFadeIn] = useState(true);
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

  // To start from top when refreshing the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
