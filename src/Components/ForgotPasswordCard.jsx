import { useState } from "react";
import { FaTimesCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ref, get, update } from "firebase/database";
import { database } from "../DB/firebase.js";

const ForgotPasswordCard = ({ onClose, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [showForgotPasswordCard, setShowForgotPasswordCard] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);
      const users = snapshot.val();

      if (users) {
        const user = Object.entries(users).find(
          ([_, userData]) => userData.email === email
        );
        if (user) {
          setStep(2);
        } else {
          setMessage("Email not found");
        }
      } else {
        setMessage("No users found");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setMessage("Error checking email: " + error.message);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword.length < 6 || newPassword.length > 18) {
      setMessage("Password must be between 6 and 18 characters");
      return;
    }

    try {
      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);
      const users = snapshot.val();

      if (users) {
        const [userId, userData] = Object.entries(users).find(
          ([_, userData]) => userData.email === email
        );
        await update(ref(database, `users/${userId}`), {
          ...userData,
          password: newPassword,
        });

        setShowForgotPasswordCard(false);

        setTimeout(() => {
          setShowSuccessCard(true);
        }, 300);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Error updating password: " + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SuccessCard = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg relative text-green-500 transition-opacity duration-300 ease-in-out ${
          isDarkMode ? "bg-gray-600 text-green-500" : "bg-gray-300"
        } ${showSuccessCard ? "opacity-100" : "opacity-0"}`}
      >
        <p className="font-bold text-center mb-4">
          Password Updated Successfully
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showForgotPasswordCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div
            className={`bg-white p-8 rounded-lg shadow-lg relative text-black transition-opacity duration-300 ease-in-out ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            } ${showForgotPasswordCard ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimesCircle size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            {message && (
              <p className="text-red-500 mb-4 font-bold">{message}</p>
            )}
            {step === 1 ? (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-4 border rounded"
                  required
                />
                <button
                  type="submit"
                  className={`w-full p-2 rounded ${
                    isDarkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white`}
                >
                  Submit
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordUpdate}>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button
                  type="submit"
                  className={`w-full p-2 rounded ${
                    isDarkMode
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  Update Password
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {showSuccessCard && <SuccessCard />}
    </>
  );
};

export default ForgotPasswordCard;
