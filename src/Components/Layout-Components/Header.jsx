import {useState} from "react";
import {useTheme} from "../../App.jsx";

const Header = ({setCurrentPage}) => {
    const {theme, toggleTheme} = useTheme();
    const isDarkMode = theme === "dark";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ["Home", "About", "Contact", "FAQ"];
    const darkModeLogoSVG =
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"
             viewBox="0 0 512 512">
            <path fill="#22d3ee"
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm96 288l288 0c17.7 0 32-14.3 32-32l0-68.2c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1l0 84c0 17.7 14.3 32 32 32z"/>
        </svg>

    const lightModeLogoSVG =
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"
             viewBox="0 0 512 512">
            <path fill="#fca5a5"
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm96 288l288 0c17.7 0 32-14.3 32-32l0-68.2c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1l0 84c0 17.7 14.3 32 32 32z"/>
        </svg>

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
                    <Logo isDarkMode={isDarkMode} setCurrentPage={setCurrentPage}
                          modeLogo={isDarkMode ? darkModeLogoSVG : lightModeLogoSVG}/>
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
                        <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
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

const Logo = ({ isDarkMode, setCurrentPage, modeLogo }) => (
    <div
        onClick={() => setCurrentPage("home")}
        className={`text-2xl font-bold cursor-pointer flex items-center ${
            isDarkMode ? "text-white" : "text-gray-800"
        }`}
    >
        <div>{modeLogo}</div>
        <span className={`ml-8`}>Graphi<strong className={`text-3xl ${isDarkMode ? "text-cyan-400" : "text-red-300"}`}>X</strong></span>
    </div>
);


const NavItem = ({text, isDarkMode, setCurrentPage}) => (
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

const DarkModeToggle = ({isDarkMode, toggleTheme}) => (
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

const MobileMenu = ({navItems, isDarkMode, toggleTheme, setCurrentPage}) => (
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
                <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
            </div>
        </div>
    </div>
);

export default Header;
