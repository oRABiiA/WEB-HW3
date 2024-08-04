import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../App.jsx";
import ChartHeader from "./ChartHeader.jsx";
import BackArrow from "../../assets/Charts/arrow-small-left.png";
import Chart from "chart.js/auto";

const ChartPage = ({ data, setCurrentPage }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  // Function to generate the chart configuration based on the chart type
  const generateChart = () => {
    const chartType = data[0].type.toLowerCase();

    switch (chartType) {
      case "bar":
        return generateBarChart();
      case "line":
        return generateLineChart();
      case "bar horizontal":
        return generateHorizontalBarChart();
      case "pie":
        return generatePieChart();
      case "doughnut":
        return generateDoughnutChart();
      case "polar":
        return generatePolarChart();
      case "radar":
        return generateRadarChart();
      case "bubble":
        return generateBubbleChart();
      case "scatter":
        return generateScatterChart();
      default:
        return showChartNotSupported();
    }
  };

  // Array of colors used in the chart datasets
  const arrayColors = [
    "rgba(63, 81, 181, 0.5)",
    "rgba(77, 182, 172, 0.5)",
    "rgba(66, 133, 244, 0.5)",
    "rgba(156, 39, 176, 0.5)",
    "rgba(233, 30, 99, 0.5)",
    "rgba(66, 73, 244, 0.4)",
    "rgba(66, 133, 244, 0.2)",
    "rgba(255, 193, 7, 0.5)",
    "rgba(0, 188, 212, 0.5)",
    "rgba(139, 195, 74, 0.5)",
    "rgba(244, 67, 54, 0.5)",
    "rgba(158, 158, 158, 0.5)",
  ];

  // Generates the configuration for a bar chart
  const generateBarChart = () => ({
    type: "bar",
    data: {
      labels: data[0].x,
      datasets: data[0].y.map((yData, index) => ({
        label: data[0].label[index],
        data: yData,
        backgroundColor: arrayColors,
      })),
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
        y: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
      },
    },
  });

  const generateHorizontalBarChart = () => ({
    type: "bar",
    data: {
      labels: data[0].x,
      datasets: data[0].y.map((yData, index) => ({
        label: data[0].label[index],
        data: yData,
        backgroundColor: arrayColors,
      })),
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
        y: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
      },
    },
  });

  const generateLineChart = () => ({
    type: "line",
    data: {
      labels: data[0].x,
      datasets: data[0].y.map((yData, index) => ({
        label: data[0].label[index],
        data: yData,
        borderColor: arrayColors[index],
        fill: false,
      })),
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
        y: {
          grid: {
            color: isDarkMode ? "#555" : "black",
            borderDash: [2],
          },
          ticks: {
            color: isDarkMode ? "white" : "black",
          },
        },
      },
    },
  });

  const generatePieChart = () => ({
    type: "pie",
    data: {
      labels: data[0].x,
      datasets: [
        {
          label: data[0].label,
          data: data[0].y,
          backgroundColor: arrayColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          titleColor: isDarkMode ? "white" : "black",
          bodyColor: isDarkMode ? "white" : "black",
          backgroundColor: isDarkMode ? "black" : "white",
        },
      },
    },
  });

  const generateDoughnutChart = () => ({
    type: "doughnut",
    data: {
      labels: data[0].x,
      datasets: [
        {
          label: data[0].label,
          data: data[0].y,
          backgroundColor: arrayColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          titleColor: isDarkMode ? "white" : "black",
          bodyColor: isDarkMode ? "white" : "black",
          backgroundColor: isDarkMode ? "black" : "white",
        },
      },
    },
  });

  const generatePolarChart = () => ({
    type: "polarArea",
    data: {
      labels: data[0].x,
      datasets: [
        {
          label: data[0].label,
          data: data[0].y,
          backgroundColor: arrayColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: isDarkMode ? "white" : "black",
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          titleColor: isDarkMode ? "white" : "black",
          bodyColor: isDarkMode ? "white" : "black",
          backgroundColor: isDarkMode ? "black" : "white",
        },
      },
    },
  });

  const generateRadarChart = () => {
    const chartData = [];
    const dataColors = [
      "rgba(63, 81, 181, 0.5)",
      "rgba(233, 30, 99, 0.5)",
      "rgba(255, 193, 7, 0.5)",
      "rgba(66, 133, 244, 0.5)",
      "rgba(156, 39, 176, 0.5)",
      "rgba(66, 73, 244, 0.4)",
      "rgba(66, 133, 244, 0.2)",
      "rgba(77, 182, 172, 0.5)",
      "rgba(0, 188, 212, 0.5)",
      "rgba(139, 195, 74, 0.5)",
      "rgba(244, 67, 54, 0.5)",
      "rgba(158, 158, 158, 0.5)",
    ];

    for (let i = 0; i < data[0].y.length; i++) {
      chartData.push({
        label: data[0].label[i],
        data: data[0].y[i],
        backgroundColor: dataColors[i],
        borderColor: dataColors[i],
      });
    }

    return {
      type: "radar",
      data: {
        labels: data[0].x,
        datasets: chartData,
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: isDarkMode ? "white" : "black",
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            titleColor: isDarkMode ? "white" : "black",
            bodyColor: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? "black" : "white",
          },
        },
        scales: {
          r: {
            pointLabels: {
              color: isDarkMode ? "white" : "black",
              font: {
                size: 14,
              },
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
              backdropColor: isDarkMode ? "transparent" : "black",
              font: {
                size: 12,
              },
            },
            grid: {
              color: isDarkMode ? "rgba(255, 255, 255, 0.3)" : "black",
            },
          },
        },
      },
    };
  };

  const generateBubbleChart = () => {
    const chartData = data[0];
    const dataAmount = data[0].x.length;
    const dataColors = [
      "rgba(63, 81, 181, 0.5)",
      "rgba(77, 182, 172, 0.5)",
      "rgba(66, 133, 244, 0.5)",
      "rgba(156, 39, 176, 0.5)",
      "rgba(233, 30, 99, 0.5)",
      "rgba(66, 73, 244, 0.4)",
      "rgba(66, 133, 244, 0.2)",
      "rgba(255, 193, 7, 0.5)",
      "rgba(0, 188, 212, 0.5)",
      "rgba(139, 195, 74, 0.5)",
      "rgba(244, 67, 54, 0.5)",
      "rgba(158, 158, 158, 0.5)",
    ];

    const dataSetInfo = [];

    for (let i = 0; i < dataAmount; i++) {
      let info = {
        label: chartData.x[i],
        data: [
          {
            x: chartData.y[i][0],
            y: chartData.y[i][1],
            r: 10,
          },
        ],
        backgroundColor: i >= 12 ? "yellow" : dataColors[i],
        borderColor: i >= 12 ? "yellow" : dataColors[i],
      };
      dataSetInfo.push(info);
    }

    return {
      type: "bubble",
      data: {
        datasets: dataSetInfo,
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: isDarkMode ? "white" : "black",
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            titleColor: isDarkMode ? "white" : "black",
            bodyColor: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? "black" : "white",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
          y: {
            grid: {
              color: isDarkMode ? "#555" : "black",
              borderDash: [2],
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
        },
      },
    };
  };

  const generateScatterChart = () => {
    const chartData = data[0];
    const dataAmount = data[0].x.length;

    const dataSetInfo = [];

    for (let i = 0; i < dataAmount; i++) {
      let info = {
        x: chartData.x[i],
        y: chartData.y[i],
      };
      dataSetInfo.push(info);
    }

    return {
      type: "scatter",
      data: {
        datasets: [
          {
            borderColor: "#4285F4",
            backgroundColor: "rgba(66, 133, 244, 0.5)",
            label: chartData.label,
            data: dataSetInfo,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: isDarkMode ? "white" : "black",
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            titleColor: isDarkMode ? "white" : "black",
            bodyColor: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? "black" : "white",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
          y: {
            grid: {
              color: isDarkMode ? "#555" : "black",
              borderDash: [2],
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
        },
      },
    };
  };

  const showChartNotSupported = () => {
    return (
      <div
        className="flex items-center justify-center h-full"
        style={{ minHeight: "400px" }}
      >
        <p className="text-gray-500 text-xl">Chart Not Supported</p>
      </div>
    );
  };

  // useEffect to create the chart instance and destroy it when the component unmounts
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Set the background color based on the theme
    ctx.fillStyle = isDarkMode ? "#333" : "#fff"; // Adjust this to match your dark/light mode background
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const chartConfig = generateChart();
    const chartInstance = new Chart(ctx, chartConfig);

    chartRef.current = chartInstance;

    return () => {
      chartInstance.destroy();
    };
  }, [data, isDarkMode]);

  // Function to download the chart as an image
  const downloadChart = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Create a temporary canvas to draw the chart with the correct background
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // Set the background color based on the theme
    tempContext.fillStyle = isDarkMode ? "#333" : "#fff";
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the chart on the temporary canvas
    tempContext.drawImage(canvas, 0, 0);

    // Create the image from the temporary canvas
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section>
      {/* Back button container with fixed positioning */}
      <div
        className={`fixed bottom-40 left-10 w-16 h-16 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center transition-colors duration-500 ease-in-out ${
          isDarkMode ? "bg-gray-600" : "bg-gray-400"
        }`}
      >
        {/* Button to navigate back to the upload page */}
        <button
          onClick={() => setCurrentPage("uploadPage")}
          className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
        >
          {/* Back arrow icon */}
          <img
            src={BackArrow}
            alt="Back"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
      </div>

      {/* Main content container with dynamic background color */}
      <div
        className={`transition-colors duration-500 ease-in-out ${
          isDarkMode ? "bg-customDark" : "bg-customBlue"
        } mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
      >
        {/* Chart header component */}
        <ChartHeader data={data} mode={isDarkMode ? "dark" : "light"} />

        {/* Chart container with rounded corners and shadow */}
        <div
          className={`relative isolate overflow-hidden rounded-3xl px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 m-6 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
            {/* Canvas element for rendering the chart */}
            <div className="relative mt-16 lg:mt-8 lg:pt-5 w-4/5 h-[400px]">
              <canvas ref={canvasRef} />
            </div>
            {/* Button to download the chart */}
            <button
              onClick={downloadChart}
              className={`mb-6 mt-4 px-4 py-2 rounded-md ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } transition-colors duration-300`}
            >
              Download Chart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

ChartPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default ChartPage;
