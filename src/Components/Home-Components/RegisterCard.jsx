import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ref, set, get } from "firebase/database";
import { database } from "../../DB/firebase.js";

/**
 * RegisterCard component allows users to register by providing their name, email, password, and confirmation password.
 * It includes input validation and error handling, and interacts with Firebase Realtime Database to store user data.
 */
const RegisterCard = ({ onClose, isDarkMode, onRegisterSuccess }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  /**
   * Toggles the visibility of the password field.
   */
  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword);
  };

  /**
   * Toggles the visibility of the confirmation password field.
   */
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };

  /**
   * Handles user registration, including input validation and interaction with Firebase Realtime Database.
   */
  const handleRegister = async () => {
    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields must be filled");
      return;
    }

    // Email validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Reference to users in Firebase
      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);
      const users = snapshot.val();

      // Check if user already exists
      if (users) {
        const userExists = Object.values(users).some(
          (user) => user.email === email
        );
        if (userExists) {
          setError("User already exists");
          return;
        }
      }

      // Save user data to Firebase Realtime Database
      const newUserRef = ref(database, "users/" + Date.now());
      await set(newUserRef, {
        name,
        email,
        password,
      });

      // Call the onRegisterSuccess function passed as prop
      onRegisterSuccess();
    } catch (error) {
      console.error("Error registering user:", error);
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`p-8 rounded-lg shadow-lg max-w-md w-full m-4 ${
          isDarkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Register</h2>
        {/* Display error message*/}
        {error && (
          <p className="text-red-600 text-lg font-bold text-center mb-4">
            {error}
          </p>
        )}
        {/* Name input field */}
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold mb-4"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Email input field */}
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold mb-4"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative mb-4">
          {/* Password input field */}
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10"
            type={isPassword ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle password visibility button */}
          <button
            onClick={togglePasswordVisibility}
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
        <div className="relative mb-4">
          {/* Confirm password input field */}
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10"
            type={isConfirmPassword ? "password" : "text"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Toggle confirm password visibility button */}
          <button
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            aria-label="Toggle confirm password visibility"
          >
            {isConfirmPassword ? (
              <FaEyeSlash size={20} color="black" />
            ) : (
              <FaEye size={20} color="black" />
            )}
          </button>
        </div>
        {/* Register button */}
        <button
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
          onClick={handleRegister}
        >
          Register
        </button>
        {/* Close button */}
        <button
          className={`${
            isDarkMode ? "bg-gray-300" : "bg-gray-100"
          } mt-4 w-full text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300`}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

RegisterCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterCard;
