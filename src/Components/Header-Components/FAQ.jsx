import { useState } from "react";
import { useTheme } from "../../App.jsx";

const FAQ = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const faqs = [
    {
      question: "What is Interactive Infographics?",
      answer:
        "Interactive Infographics is a platform that allows users to create engaging, interactive data visualizations without advanced technical skills.",
      icon: "🎨",
    },
    {
      question: "Do I need coding experience to use this platform?",
      answer:
        "No, our intuitive drag-and-drop interface is designed for users of all skill levels.",
      icon: "👨‍💻",
    },
    {
      question: "What types of charts and graphs can I create?",
      answer:
        "We offer a wide range of options including bar charts, line graphs, pie charts, scatter plots, and more.",
      icon: "📊",
    },
    {
      question: "Can I import my own data?",
      answer:
        "Yes, you can upload data in JSON format or manually input your data.",
      icon: "📤",
    },
    {
      question: "How often is the platform updated with new features?",
      answer:
        "We regularly update our platform with new features and improvements. Major updates are typically released quarterly, with minor updates and bug fixes rolled out more frequently.",
      icon: "🔄",
    },
    {
      question: "Can I download the infographics I create?",
      answer:
        "Absolutely, you can download any graph or chart you create in various formats.",
      icon: "💾",
    },
    {
      question: "Is there a free version available?",
      answer:
        "Yes, our web application is completely free to use. All features are available to all users without any cost.",
      icon: "🆓",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take data security seriously and use industry-standard encryption to protect your information.",
      icon: "🔒",
    },
    {
      question:
        "What file formats does Interactive Infographics support for exporting?",
      answer:
        "We support exporting in multiple formats including PNG, JPG, SVG for static images, and HTML for interactive versions. We also offer PDF export for print-ready infographics.",
      icon: "📁",
    },
    {
      question: "Is there customer support available if I need help?",
      answer:
        "We offer 24/7 customer support via email and live chat during business hours.",
      icon: "📞",
    },
  ];

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
        className={`min-h-screen transition-colors duration-500 ease-in-out ${
          isDarkMode
            ? "bg-customDark text-white"
            : "bg-customBlue text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <h1
            className="text-4xl font-bold mb-8 flex items-center opacity-0 fade-in-element"
            style={{ animationDelay: "0.1s" }}
          >
            Explore Our FAQs <span className="ml-2">🔍</span>
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isDarkMode={isDarkMode}
                animationDelay={`${(index + 1) * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const FAQItem = ({ faq, isDarkMode, animationDelay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-gray-700" : "border-gray-400"
      } opacity-0 fade-in-element`}
      style={{ animationDelay }}
    >
      <button
        className={`flex justify-between items-center w-full py-4 text-left text-lg font-medium ${
          isDarkMode
            ? "text-white hover:text-blue-300"
            : "text-black hover:text-blue-500"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className="mr-2">{faq.icon}</span>
          {faq.question}
        </span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div
          className={`pb-4 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
