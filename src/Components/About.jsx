import { useTheme } from "../App";

const About = ({ setCurrentPage }) => {
  const { theme } = useTheme();
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
        className={`flex flex-col min-h-screen transition-colors duration-500 ease-in-out ${
          isDarkMode
            ? "bg-customDark text-white"
            : "bg-customBlue text-gray-800"
        }`}
      >
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
          <h1
            className="text-3xl font-bold mb-6 opacity-0 fade-in-element"
            style={{ animationDelay: "0.1s" }}
          >
            About Us <span className="ml-2">🕵️‍♂️</span>
          </h1>

          <p
            className="mb-4 opacity-0 fade-in-element"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to our website - Your Platform for Interactive Data
            Visualization. We're passionate about transforming complex data into
            engaging, interactive infographics. Our platform empowers users to
            create stunning visual representations of their data, making
            information more accessible and understandable.
          </p>

          <h2
            className="text-2xl font-semibold mt-6 mb-3 opacity-0 fade-in-element"
            style={{ animationDelay: "0.3s" }}
          >
            Key Features: <span className="ml-2">✨</span>
          </h2>
          <ul
            className="list-disc pl-5 mb-4 opacity-0 fade-in-element"
            style={{ animationDelay: "0.4s" }}
          >
            <li>Intuitive drag-and-drop interface</li>
            <li>JSON file upload support</li>
            <li>Customizable matrix layout</li>
            <li>Wide range of graph types and styles</li>
            <li>Real-time collaboration tools</li>
            <li>Download any graph that you see</li>
          </ul>

          <h2
            className="text-2xl font-semibold mt-6 mb-3 opacity-0 fade-in-element"
            style={{ animationDelay: "0.5s" }}
          >
            Why Interactive Infographics? <span className="ml-2">🎨</span>
          </h2>
          <p
            className="mb-4 opacity-0 fade-in-element"
            style={{ animationDelay: "0.6s" }}
          >
            In today's data-driven world, static information just doesn't cut it
            anymore. Our interactive infographics allow you to explore data at
            your own pace, uncovering insights and patterns that might otherwise
            go unnoticed. Whether you're a business professional, educator, or
            data enthusiast, this website helps you tell your data story
            effectively.
          </p>

          <h2
            className="text-2xl font-semibold mt-6 mb-3 opacity-0 fade-in-element"
            style={{ animationDelay: "0.7s" }}
          >
            Our Mission <span className="ml-2">🎯</span>
          </h2>
          <p
            className="mb-4 opacity-0 fade-in-element"
            style={{ animationDelay: "0.8s" }}
          >
            We believe that data should be accessible to everyone. Our mission
            is to democratize data visualization, providing tools that make it
            easy for anyone to create professional-quality infographics without
            the need for advanced technical skills.
          </p>

          <h2
            className="text-2xl font-semibold mt-6 mb-3 opacity-0 fade-in-element"
            style={{ animationDelay: "0.9s" }}
          >
            Our Team <span className="ml-2">👥</span>
          </h2>
          <p
            className="mb-4 opacity-0 fade-in-element"
            style={{ animationDelay: "1s" }}
          >
            Founded in 2024 by a group of students, the website combines
            cutting-edge technology with user-friendly design. Our diverse team
            brings together expertise in data analysis, graphic design, and web
            development to deliver a truly unique infographic creation
            experience.
          </p>

          <p
            className="mt-8 font-semibold opacity-0 fade-in-element"
            style={{ animationDelay: "1.1s" }}
          >
            Start Your Data Visualization Journey{""}
            <span className="ml-2">🚀</span> Ready to bring your data to life?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => {
                setCurrentPage("home", { scrollToBottom: true });
              }}
            >
              Sign up
            </span>{" "}
            for a free account today and discover the power of interactive
            infographics.
          </p>
        </main>
      </div>
    </>
  );
};

export default About;
