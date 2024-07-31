import {useTheme} from "../App.jsx";

const Footer = () => {
    const navigateTo = (url) => {
        window.location.href = url;
    };

    const {theme, toggleTheme} = useTheme();
    const isDarkMode = theme === "dark";

    return (
        <footer className={`bg-opacity-75 text-center transition-colors duration-500 ease-in-out ${
            isDarkMode
                ? "bg-gray-600 font-bold"
                : "bg-gray-200 font-bold"
        }`}>
            < div className=" container px-6 pt-6 mx-auto">
                <div className="mb-6 flex justify-center w-full">
                    <div>
                        <a
                            type="button"
                            className="mx-5 m-1 h-9 w-9 rounded-full border-2 bg-blue-500 border-blue-500 text-white uppercase leading-normal  transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 flex items-center justify-center cursor-pointer"
                            onClick={() => {
                                navigateTo("https://www.facebook.com");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a
                            type="button"
                            className="mx-5 m-1 h-9 w-9 rounded-full border-2 bg-black border-black text-white uppercase leading-normal transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 flex items-center justify-center cursor-pointer"
                            onClick={() => {
                                navigateTo("https://www.x.com");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a
                            type="button"
                            className="mx-5 m-1 h-9 w-9 rounded-full border-2 bg-blue-400 border-blue-400 text-white uppercase leading-normal transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 flex items-center justify-center cursor-pointer"
                            onClick={() => {
                                navigateTo("https://www.telegram.org");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a
                            type="button"
                            className="mx-5 m-1 h-9 w-9 rounded-full
                                      bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400
                                      text-white uppercase leading-normal transition duration-150
                                      ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 flex
                                      items-center justify-center cursor-pointer"
                            onClick={() => {
                                navigateTo("https://www.instagram.com");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`text-lg p-4 text-center bg-black bg-opacity-30 ${
                isDarkMode
                    ? "text-white"
                    : "text-black"
            }`}>
                © 2024 Copyright: Interactive Infographics
            </div>
        </footer>
    )
        ;
};

export default Footer;
