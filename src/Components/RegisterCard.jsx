import {useState} from "react";
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ref, set, get } from 'firebase/database';
import { database } from '../DB/firebase.js';

const RegisterCard = ({ onClose, isDarkMode }) => {
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setIsPassword(!isPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPassword(!isConfirmPassword);
    };

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields must be filled');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Invalid email address');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const usersRef = ref(database, 'users');
            const snapshot = await get(usersRef);
            const users = snapshot.val();

            if (users) {
                const userExists = Object.values(users).some(user => user.email === email);
                if (userExists) {
                    setError('User already exists');
                    return;
                }
            }

            // Save user data to Firebase Realtime Database
            const newUserRef = ref(database, 'users/' + Date.now());
            await set(newUserRef, {
                name,
                email,
                password
            });
            onClose();
        } catch (error) {
            console.error("Error registering user:", error);
            setError(error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`p-8 rounded-lg shadow-lg max-w-md w-full m-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}>
                <h2 className="text-2xl font-bold mb-4 text-black">Register</h2>
                {error && <p className="text-red-600 text-lg font-bold text-center mb-4">{error}</p>}
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold mb-4"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold mb-4"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative mb-4">
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10"
                        type={isPassword ? "password" : "text"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10"
                        type={isConfirmPassword ? "password" : "text"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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
                <button
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <button
                    className={`${isDarkMode ? "bg-gray-300" : "bg-gray-100"} mt-4 w-full text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300`}
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
};

export default RegisterCard;
