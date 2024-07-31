import PropTypes from "prop-types";
import {useTheme} from "../App";
import ChartHeader from "./ChartHeader.jsx";
import {TEChart} from "tw-elements-react";
import BackArrow from "../assets/Charts/arrow-small-left.png";

const ChartPage = ({data, setCurrentPage}) => {
    const {theme} = useTheme();
    const isDarkMode = theme === "dark";

    const generateChart = () => {
        const chartType = data[0].type.toLowerCase()
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
    }

    const generateBarChart = () => {

        const chartData = [];
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

        for(let i = 0; i < data[0].y.length; i++) {
            let info = {
                    label: data[0].label[i],
                    data: data[0].y[i],
                    backgroundColor: dataColors[i],
            }
            chartData.push(info);
        }

        return (
            <TEChart
                type="bar"
                data={{
                    labels: data[0].x,
                    datasets: chartData,
                }}
                darkOptions={{
                    plugins :{
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: true,
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
                        y: {
                            stacked: true,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: isDarkMode ? "white" : "black",
                            },
                        },
                    },
                }}
            />
        );
    }

    const generateLineChart = () => {

        const chartData = [];
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

        for(let i = 0; i < data[0].y.length; i++) {
            let info = {
                label: data[0].label[i],
                data: data[0].y[i],
                backgroundColor: dataColors[i],
                borderColor: dataColors[i],
            }
            chartData.push(info);
        }

        return (
            <TEChart
                type="line"
                data={{
                    labels: data[0].x,
                    datasets: chartData,
                }}
                darkOptions={{
                    plugins :{
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: true,
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
                        y: {
                            stacked: true,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: isDarkMode ? "white" : "black",
                            },
                        },
                    },
                }}
            />
        );
    }

    const generateHorizontalBarChart = () => {

        const chartData = [];
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

        for(let i = 0; i < data[0].y.length; i++) {
            let info = {
                label: data[0].label[i],
                data: data[0].y[i],
                backgroundColor: dataColors[i],
            }
            chartData.push(info);
        }

        return (
            <TEChart
                type="bar"
                data={{
                    labels: data[0].x,
                    datasets: chartData,
                }}
                darkOptions={{
                    indexAxis: "y",
                    plugins :{
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: true,
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
                        y: {
                            stacked: true,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: isDarkMode ? "white" : "black",
                            },
                        },
                    },
                }}
            />
        )
    }

    const generatePieChart = () => {
        return (
            <TEChart
                type="pie"
                data={{
                    labels: data[0].x,
                    datasets: [
                        {
                            label: data[0].label,
                            data: data[0].y,
                            backgroundColor: [
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
                            ],
                        },
                    ],

                }}
                darkOptions={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            titleColor: isDarkMode ? "white" : "black",
                            bodyColor: isDarkMode ? "white" : "black",
                            backgroundColor: isDarkMode ? "black" : "white",
                        }
                    },
                }}
            />
        )
    }

    const generateDoughnutChart = () => {
        return (
            <TEChart
                type="doughnut"
                data={{
                    labels: data[0].x,
                    datasets: [
                        {
                            label: data[0].label,
                            data: data[0].y,
                            backgroundColor: [
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
                            ],
                        },
                    ],
                }}
                darkOptions={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            titleColor: isDarkMode ? "white" : "black",
                            bodyColor: isDarkMode ? "white" : "black",
                            backgroundColor: isDarkMode ? "black" : "white",
                        }
                    },
                }}
            />
        )
    }

    const generatePolarChart = () => {
        return (
            <TEChart
                type="polarArea"
                data={{
                    labels: data[0].x,
                    datasets: [
                        {
                            label: data[0].label,
                            data: data[0].y,
                            backgroundColor: [
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
                            ],
                        },
                    ],
                }}
                darkOptions={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            titleColor: isDarkMode ? "white" : "black",
                            bodyColor: isDarkMode ? "white" : "black",
                            backgroundColor: isDarkMode ? "black" : "white",
                        }
                    },
                }}
            />
        )
    }

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

        for(let i = 0; i < data[0].y.length; i++) {
            let info = {
                label: data[0].label[i],
                data: data[0].y[i],
                backgroundColor: dataColors[i],
                backdropColor: dataColors[i],
            }
            chartData.push(info);
        }

        return (
            <TEChart
                type="radar"
                data={{
                    labels: data[0].x,
                    datasets: chartData,
                }}
                darkOptions={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
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
                                color: "white",
                                backdropColor: isDarkMode ? "transparent" : "black",
                                font: {
                                    size: 12,
                                },
                            },
                            grid: {
                                color: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : "black",
                            },
                        },
                    },
                }}
            />
        )
    }

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
        ]

        const dataSetInfo = []

        for (let i = 0; i < dataAmount; i++) {
            let info = { // init empty data
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

        return (
            <TEChart
                type="bubble"
                data={{
                    datasets: dataSetInfo,
                }}
                darkOptions={{
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            titleColor: isDarkMode ? "white" : "black",
                            bodyColor: isDarkMode ? "white" : "black",
                            backgroundColor: isDarkMode ? "black" : "white",
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: isDarkMode ? "white" : "black",
                            },
                        },
                        y: {
                            stacked: true,
                            grid: {
                                display: true,
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

                }}
            />
        );
    }

    const generateScatterChart = () => {
        const chartData = data[0];
        const dataAmount = data[0].x.length;

        const dataSetInfo = []

        for (let i = 0; i < dataAmount; i++) {
            let info = { // init empty data
                x: chartData.x[i],
                y: chartData.y[i],
            };
            dataSetInfo.push(info);
        }

        return (
            <TEChart
                type="scatter"
                data={{
                    datasets: [
                        {
                            borderColor: "#4285F4",
                            backgroundColor: "rgba(66, 133, 244, 0.5)",
                            label: chartData.label,
                            data: dataSetInfo,
                        },
                    ],
                }}
                darkOptions={{
                    plugins: {
                        legend: {
                            labels: {
                                color: isDarkMode ? "white" : "black",
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            titleColor: isDarkMode ? "white" : "black",
                            bodyColor: isDarkMode ? "white" : "black",
                            backgroundColor: isDarkMode ? "black" : "white",
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: isDarkMode ? "white" : "black",
                            },
                        },
                        y: {
                            stacked: true,
                            grid: {
                                display: true,
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

                }}
            />
        )
    }

    const showChartNotSupported = () => {
        return (
            <div
                className="flex items-center justify-center h-full"
                style={{minHeight: '400px'}} // Optional, ensures the div has a minimum height
            >
                <p className="text-gray-500 text-xl">Chart Not Supported</p>
            </div>
        );
    }


    return (
        <section>
            <div
                className={`fixed bottom-40 left-10 w-16 h-16 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center transition-colors duration-500 ease-in-out ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                }`}>
                <button
                    onClick={() => setCurrentPage("uploadPage")}
                    className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
                >
                    <img
                        src={BackArrow}
                        alt="Back"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </button>
            </div>

            <div
                className={` transition-colors duration-500 ease-in-out ${
                    isDarkMode ? "bg-customDark" : "bg-customBlue"
                } mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
            >
                <ChartHeader data={data} mode={isDarkMode ? "dark" : "light"}/>
                <div

                    className={`relative isolate overflow-hidden rounded-3xl px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 m-6 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-300"
                    }`}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
                        <div className="relative mt-16 lg:mt-8 lg:pt-5 w-4/5 h-[400px]">
                            {generateChart()}
                        </div>
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