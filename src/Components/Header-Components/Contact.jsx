import { useTheme } from "../../App.jsx";

const Contact = ({ setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <>
      <style>
        {`
          @keyframes fadeInFromTop {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-element {
            animation: fadeInFromTop 0.5s ease-out forwards;
          }
        `}
      </style>
      <div
        className={`contact-page p-8 transition-colors duration-500 ease-in-out ${
          isDarkMode
            ? "bg-customDark text-white"
            : "bg-customBlue text-gray-800"
        }`}
      >
        <h1
          className="text-3xl font-bold mb-6 opacity-0 fade-in-element"
          style={{ animationDelay: "0.1s" }}
        >
          Contact Us ☎️
        </h1>
        <p
          className="mb-8 opacity-0 fade-in-element"
          style={{ animationDelay: "0.2s" }}
        >
          We'd love to hear from you! Whether you have questions about our
          platform, need technical support, or want to provide feedback, please
          don't hesitate to contact us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <form
            className={`contact-form space-y-4 ${
              isDarkMode ? "bg-gray-600" : "bg-gray-200"
            } p-6 rounded-lg shadow-md opacity-0 fade-in-element`}
            style={{ animationDelay: "0.3s" }}
          >
            <input
              className={`w-full p-2 rounded ${
                isDarkMode ? "bg-slate-200 text-black" : "bg-white"
              }`}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className={`w-full p-2 rounded ${
                isDarkMode ? "bg-slate-200 text-black" : "bg-white"
              }`}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className={`w-full p-2 rounded ${
                isDarkMode ? "bg-slate-200 text-black" : "bg-white"
              }`}
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className={`w-full p-2 rounded ${
                isDarkMode ? "bg-slate-200 text-black" : "bg-white"
              }`}
              name="message"
              placeholder="Write your message..."
              required
              rows="4"
            ></textarea>
            <button
              className={`w-full p-2 rounded ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white font-bold`}
              type="submit"
            >
              Send Message
            </button>
          </form>

          <div
            className="space-y-6 opacity-0 fade-in-element"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className={`${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              } p-6 rounded-lg shadow-md`}
            >
              <h2 className="text-xl font-bold mb-4">Other Ways to Reach Us</h2>
              <p>
                <span className="font-bold">📧 Email:</span>{" "}
                interactiveinfographics614@gmail.com
              </p>
              <p>
                <span className="font-bold">📞 Phone:</span> (052)2138429
              </p>
              <p>
                <span className="font-bold">📍 Address:</span> Snunit 51 PO Box
                113, Snunit St 51, Karmiel, 2161002
              </p>
            </div>

            <div
              className={`${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              } p-6 rounded-lg shadow-md`}
            >
              <h2 className="text-xl font-bold mb-4">Business Hours 🕒</h2>
              <p>
                Monday - Friday: 09:00 - 16:00
                <br /> Saturday & Sunday: 09:00 - 12:00{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 ${
            isDarkMode ? "bg-gray-600" : "bg-gray-200"
          } p-6 rounded-lg shadow-md opacity-0 fade-in-element`}
          style={{ animationDelay: "0.5s" }}
        >
          <p>We typically respond to inquiries within 24-48 business hours.</p>
          <p>
            Your contact information will be kept confidential and used only to
            respond to your inquiry.
          </p>
          <p>
            Before contacting us, you might want to check our{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => {
                setCurrentPage("faq");
              }}
            >
              FAQ page
            </a>{" "}
            for quick answers to common questions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
