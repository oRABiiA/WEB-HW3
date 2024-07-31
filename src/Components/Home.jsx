import { useRef, useState } from "react";
import { useTheme } from "../App";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import lightHome from "../assets/Backgrounds/homeChartLight.jpg";
import darkHome from "../assets/Backgrounds/homeChartDark.jpg";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterCard from "./RegisterCard.jsx";
import { ref, get } from 'firebase/database';
import { database } from '../DB/firebase.js';

const Home = ({ setCurrentPage }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    const mainPageTheme = theme === "light" ? "lightHome" : "darkHome";
    const [isPassword, setIsPassword] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState(""); // Added for email input
    const [error, setError] = useState(""); // Added for error handling
    const inputRef = useRef(null);
    const [showRegister, setShowRegister] = useState(false);

    const toggleVisibility = () => {
        setIsPassword(!isPassword);
        inputRef.current.type = isPassword ? "text" : "password";
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const navigateToFacebook = () => {
        window.location.href = "https://www.facebook.com";
    };

    const navigateToTwitter = () => {
        window.location.href = "https://www.x.com";
    };

    const scrollToInput = () => {
        if (inputRef.current) {
            const targetPosition =
                inputRef.current.getBoundingClientRect().top + window.pageYOffset;

            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800; // duration in milliseconds
            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const progressPercentage = Math.min(progress / duration, 1);
                window.scrollTo(0, startPosition + distance * progressPercentage);
                if (progress < duration) {
                    requestAnimationFrame(smoothScroll);
                } else {
                    inputRef.current.focus();
                }
            };
            requestAnimationFrame(smoothScroll);
        }
    };

    const handleLogin = async () => {
        if (!email || !inputValue) {
            setError('All fields must be filled');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Invalid email address');
            return;
        }

        try {
            const usersRef = ref(database, 'users');
            const snapshot = await get(usersRef);
            const users = snapshot.val();

            if (users) {
                const user = Object.values(users).find(user => user.email === email);
                if (!user) {
                    setError('User does not exist');
                    return;
                }

                if (user.password !== inputValue) {
                    setError('Incorrect password');
                    return;
                }

                // User exists and password matches
                setError('');
                // Handle successful login, e.g., redirect to another page
                setCurrentPage("uploadPage", user.name);
            } else {
                setError('No users found');
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError('Error logging in: ' + error.message);
        }
    };

    return (
        <section>
            <div
                className={`bg-contain bg-center h-screen flex flex-col justify-end ${
                    mainPageTheme === "darkHome" ? "bg-customDark" : "bg-customBlue"
                }`}
                style={{
                    backgroundImage: `url(${
                        mainPageTheme === "lightHome" ? lightHome : darkHome
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    margin: "0 auto",
                }}
            ></div>
            <div className="absolute xs:bottom-10 top-48 w-full flex justify-center items-center">
                <div
                    onClick={scrollToInput}
                    className={`cursor-pointer w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2 ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-300"
                            : "bg-gray-400 border-gray-300"
                    }`}
                >
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 2.1,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-[#ffffff] mb-1"
                    />
                </div>
            </div>
            <div
                className={`mb-8 ${
                    mainPageTheme === "lightHome" ? "bg-customBlue" : "bg-customDark"
                }`}
                data-aos="fade-up"
            >
                <section
                    className={`bg-opacity-70 p-10 md:p-20 rounded-2xl w-full max-w-md mx-auto ${
                        isDarkMode ? "bg-gray-600" : "bg-gray-300"
                    }`}
                >
                    <div className="text-center md:text-left flex items-center justify-center md:justify-start">
                        <label className="mr-2 text-black font-bold">Sign in with</label>
                        <button
                            type="button"
                            className="mx-1 h-9 w-9 rounded-full bg-blue-500 border-blue-500 hover:bg-neutral-500 text-white shadow-[0_4px_9px_-4px_#e5e5e5] transition-colors duration-1000"
                            onClick={navigateToFacebook}
                        >
                            <BiLogoFacebook
                                size={24}
                                className="flex justify-center items-center w-full"
                            />
                        </button>
                        <button
                            type="button"
                            className="mx-1 h-9 w-9 rounded-full bg-black border-black text-white hover:bg-neutral-500 uppercase leading-normal shadow-[0_4px_9px_-4px_#e5e5e5] transition-colors duration-1000"
                            onClick={navigateToTwitter}
                        >
                            <RiTwitterXFill
                                size={20}
                                className="flex justify-center items-center w-full"
                            />
                        </button>
                    </div>
                    <div
                        className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
                        <p className="mx-4 mb-0 text-center font-bold text-black">Or</p>
                    </div>
                    {error && <p className="text-red-600 text-lg font-bold text-center mb-4">{error}</p>}
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className="relative mt-4">
                        <input
                            ref={inputRef}
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10 transition-all duration-300"
                            type={isPassword ? "password" : "text"}
                            placeholder="Password"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={toggleVisibility}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            aria-label="Toggle password visibility"
                        >
                            {isPassword ? (
                                <FaEyeSlash size={20} color="black" />
                            ) : (
                                <FaEye size={20} color="black" />
                            )}
                        </button>
                    </div>
                    <div className="mt-4 flex justify-between font-bold text-sm">
                        <label className="flex text-black hover:text-slate-400 cursor-pointer">
                            <input className="ml-0.5 mr-1 font-bold" type="checkbox" />
                            <span className="ml-1 mb-2">Remember Me</span>
                        </label>
                        <a
                            className="text-black font-bold hover:text-slate-400 hover:underline-offset-4"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="text-center">
                        <button
                            className={`mt-4 px-4 py-2 font-bold uppercase rounded text-xs tracking-wider transition-colors duration-1000 ${
                                isDarkMode
                                    ? "bg-blue-700 text-black hover:bg-blue-500"
                                    : "bg-blue-600 text-white hover:bg-blue-400"
                            }`}
                            type="button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 font-bold text-sm text-black text-center md:text-left">
                        Don&apos;t have an account?{" "}
                        <a
                            className="text-red-600 hover:text-red-500"
                            href="#"
                            onClick={() => setShowRegister(true)}
                        >
                            Register
                        </a>
                    </div>
                </section>
            </div>
            {showRegister && (
                <RegisterCard
                    onClose={() => setShowRegister(false)}
                    isDarkMode={isDarkMode}
                />
            )}
        </section>
    );
};

Home.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

export default Home;
