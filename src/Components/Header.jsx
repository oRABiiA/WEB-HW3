import { useState } from "react";
import { useTheme } from "../App";

const Header = ({ setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Contact", "FAQ"];

  return (
    <header
      className={`py-4 transition-colors duration-500 ease-in-out ${
        isDarkMode
          ? "bg-gray-600 text-black font-bold"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} />
          <nav className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-32 font-bold">
            {navItems.map((item) => (
              <NavItem
                key={item}
                text={item}
                isDarkMode={isDarkMode}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu
          navItems={navItems}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          setCurrentPage={setCurrentPage}
        />
      )}
    </header>
  );
};

const Logo = ({ isDarkMode, setCurrentPage }) => (
  <div
    onClick={() => setCurrentPage("home")}
    className={`text-2xl font-bold cursor-pointer ${
      isDarkMode ? "text-white" : "text-gray-800"
    } [text-shadow:_0_0_2px_rgba(${
      isDarkMode ? "255,255,255" : "0,0,0"
    },0.1),_0_0_8px_rgba(${isDarkMode ? "255,255,255" : "0,0,0"},0.1)]`}
  >
    Interactive Infographics
  </div>
);

const NavItem = ({ text, isDarkMode, setCurrentPage }) => (
  <a
    href="#"
    onClick={() => {
      switch (text) {
        case "Home":
          setCurrentPage("home");
          break;
        case "About":
          setCurrentPage("about");
          break;
        case "Contact":
          setCurrentPage("contact");
          break;
        case "FAQ":
          setCurrentPage("faq");
          break;
        default:
          console.log("default");
      }
    }}
    className={`text-lg mx-4 transition-transform duration-300 ${
      isDarkMode
        ? "text-white hover:text-gray-800 hover:translate-y-[-1px]"
        : "text-black hover:text-gray-500 hover:translate-y-[-1px]"
    }`}
  >
    {text}
  </a>
);

const DarkModeToggle = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`ml-10 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 sm:ml-4 ${
      isDarkMode
        ? "bg-gray-800 ml-4 hover:bg-gray-700"
        : "bg-gray-200 ml-4 hover:bg-gray-300"
    }`}
  >
    <span className="text-2xl">{isDarkMode ? "🌙" : "☀️"}</span>
  </button>
);

const MobileMenu = ({ navItems, isDarkMode, toggleTheme, setCurrentPage }) => (
  <div
    className={`font-bold ${
      isDarkMode ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-800"
    } md:hidden py-4`}
  >
    <div className="container mx-auto px-4">
      {navItems.map((item) => (
        <NavItem
          key={item}
          text={item}
          isDarkMode={isDarkMode}
          setCurrentPage={setCurrentPage}
        />
      ))}
      <div className="mt-4">
        <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </div>
  </div>
);

export default Header;
