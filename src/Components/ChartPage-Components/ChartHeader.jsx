import PropTypes from "prop-types";

// Function to return human-readable chart names based on type
function chartName(type) {
    const chartType = type.toLowerCase();
    switch (chartType) {
        case "bar":
            return "Bar Chart";
        case "line":
            return "Line Chart";
        case "bar horizontal":
            return "Horizontal Bar Chart";
        case "pie":
            return "Pie Chart";
        case "doughnut":
            return "Doughnut Chart";
        case "polar":
            return "Polar Chart";
        case "radar":
            return "Radar Chart";
        case "bubble":
            return "Bubble Chart";
        case "scatter":
            return "Scatter Chart";
        default:
            return "Default Chart";
    }
}

const ChartHeader = ({ data, mode }) => {
    return (
        <h2 className="flex flex-row flex-nowrap items-center mb-36 transition-colors duration-500 ease-in-out">
            {/* Separator line */}
            <span className={`flex-grow block border-t ${mode === "dark" ? "border-white" : "border-gray-300"}`}></span>

            {/* Chart type label */}
            <span
                className={`flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium  ${mode === "dark" ? "bg-white text-black" : "bg-gray-300 text-black"}`}>
                {/* Dynamic chart name based on data type */}
                {chartName(data[0].type)}
            </span>

            {/* Separator line */}
            <span className={`flex-grow block border-t ${mode === "dark" ? "border-white" : "border-gray-300"}`}></span>
        </h2>
    );
};

ChartHeader.propTypes = {
    data: PropTypes.array.isRequired, // Prop type validation for data array
    mode: PropTypes.string.isRequired, // Prop type validation for mode string (assumed to be "dark" or "light")
};

export default ChartHeader;
