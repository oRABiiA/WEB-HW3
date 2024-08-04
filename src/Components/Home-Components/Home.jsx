import { useRef, useState, useEffect } from "react";
import { useTheme } from "../../App.jsx";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import lightHome from "../../assets/Backgrounds/homeChartLight.jpg";
import darkHome from "../../assets/Backgrounds/homeChartDark.jpg";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterCard from "./RegisterCard.jsx";
import { ref, get } from "firebase/database";
import { database } from "../../DB/firebase.js";
import ForgotPasswordCard from "./ForgotPasswordCard.jsx";
import SuccessMessageCard from "./SuccessMessageCard.jsx";

const Home = ({ setCurrentPage, user, setUser }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const mainPageTheme = theme === "light" ? "lightHome" : "darkHome";
  const [isPassword, setIsPassword] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const footerRef = useRef(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Retrieve user data from local storage if available
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [setUser]);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Function to toggle password visibility
  const toggleVisibility = () => {
    setIsPassword(!isPassword);
    inputRef.current.type = isPassword ? "text" : "password";
  };

  // Function to handle input value change for the password field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle input value change for the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to navigate to Facebook
  const navigateToFacebook = () => {
    window.location.href = "https://www.facebook.com";
  };

  // Function to navigate to Twitter
  const navigateToTwitter = () => {
    window.location.href = "https://www.x.com";
  };

  // Function to scroll to a target element on the page
  const scrollToTarget = () => {
    // Determine the target to scroll to based on the user state
    const targetRef = user
      ? footerRef
      : uploadButtonRef.current
      ? uploadButtonRef
      : inputRef;
    if (targetRef.current) {
      const targetPosition =
        targetRef.current.getBoundingClientRect().top + window.pageYOffset;

      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const smoothScroll = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * progressPercentage);
        if (progress < duration) {
          requestAnimationFrame(smoothScroll);
        } else {
          if (!user) {
            targetRef.current.focus();
          }
        }
      };
      requestAnimationFrame(smoothScroll);
    }
  };

  // Function to handle user login
  const handleLogin = async () => {
    if (!email || !inputValue) {
      setError("All fields must be filled");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);
      const users = snapshot.val();

      if (users) {
        const user = Object.values(users).find((user) => user.email === email);
        if (!user) {
          setError("User does not exist");
          return;
        }

        if (user.password !== inputValue) {
          setError("Incorrect password");
          return;
        }

        setError("");
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.name, email: user.email })
        );
        setUser({ name: user.name, email: user.email });
        setCurrentPage("uploadPage", { name: user.name });
      } else {
        setError("No users found");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in: " + error.message);
    }
  };

  // Function to handle successful registration
  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setShowSuccessMessage(true);
  };

  // Function to render the scrolling indicator
  const renderScroller = () => (
    <div className="absolute xs:bottom-10 top-48 w-full flex justify-center items-center">
      <div
        onClick={scrollToTarget}
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
  );

  const Footer = () => (
    <footer ref={footerRef} className=" text-center p-1 mt-1"></footer>
  );

  return (
    <section>
      {/* Background container with dynamic background based on theme */}
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
      {/* Render the scrolling indicator */}
      {renderScroller()}

      {/* Conditional rendering based on whether the user is logged in */}
      {user ? (
        <>
          {/* User logged in view */}
          <div className="mt-8 mb-20 text-center">
            {/* Button to navigate to the upload page */}
            <button
              ref={uploadButtonRef}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCurrentPage("uploadPage", { user: user })}
            >
              Go to Upload Page
            </button>

            {/* Logout button */}
            <button
              className="mt-4 text-red-500 hover:underline block mx-auto"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          {/* Render the footer */}
          <Footer />
        </>
      ) : (
        <div
          className={`mb-8 ${
            mainPageTheme === "lightHome" ? "bg-customBlue" : "bg-customDark"
          }`}
          data-aos="fade-up"
        >
          {/* Login section */}
          <section
            className={`bg-opacity-70 p-10 md:p-20 rounded-2xl w-full max-w-md mx-auto ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div className="text-center md:text-left flex items-center justify-center md:justify-start">
              <label className="mr-2 text-black font-bold">Sign in with</label>
              {/* Button to navigate to Facebook */}
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
              {/* Button to navigate to Twitter */}
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
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
              <p className="mx-4 mb-0 text-center font-bold text-black">Or</p>
            </div>
            {/* Error message display */}
            {error && (
              <p className="text-red-600 text-lg font-bold text-center mb-4">
                {error}
              </p>
            )}
            {/* Email input field */}
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="relative mt-4">
              {/* Password input field */}
              <input
                ref={inputRef}
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10 transition-all duration-300"
                type={isPassword ? "password" : "text"}
                placeholder="Password"
                value={inputValue}
                onChange={handleInputChange}
              />
              {/* Toggle password visibility button */}
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
            <div className="flex justify-between items-center mt-4">
              <button
                className={`bg-blue-600 hover:bg-blue-500 transition-colors duration-300 text-white font-bold py-2 px-4 rounded ${
                  isDarkMode ? "bg-gray-600" : "bg-blue-600"
                }`}
                onClick={handleLogin}
              >
                Log in
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-black font-bold py-2 px-4 rounded"
                onClick={() => setShowRegister(true)}
              >
                Register
              </button>
            </div>
            <button
              className="text-red-500 hover:underline text-sm mt-4"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </button>
          </section>
        </div>
      )}

      {/* Conditional rendering for modals */}
      {showRegister && (
        <RegisterCard
          onClose={() => setShowRegister(false)}
          isDarkMode={isDarkMode}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
      {showForgotPassword && (
        <ForgotPasswordCard onClose={() => setShowForgotPassword(false)} />
      )}
      {showSuccessMessage && (
        <SuccessMessageCard
          onClose={() => setShowSuccessMessage(false)}
          message="Registered Successfully"
        />
      )}
    </section>
  );
};

Home.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default Home;
