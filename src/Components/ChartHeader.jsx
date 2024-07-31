import PropTypes from "prop-types";

const ChartHeader = ({data, mode}) => {

    function chartName (type){
        const chartType = type.toLowerCase()
        switch(chartType){
            case "bar":
                return "Bar Chart"
            case "line":
                return "Line Chart"
            case "bar horizontal":
                return "Horizontal Bar Chart"
            case "pie":
                return "Pie Chart"
            case "doughnut":
                return "Doughnut Chart"
            case "polar":
                return "Polar Chart"
            case "radar":
                return "Radar Chart"
            case "bubble":
                return "Bubble Chart"
            case "scatter":
                return "Scatter Chart"
            default:
                return "Default Chart"
        }
    }

    return (
        <h2 className="flex flex-row flex-nowrap items-center mb-36 transition-colors duration-500 ease-in-out">
            <span className={`flex-grow block border-t ${mode === "dark" ? "border-white" : "border-gray-300"}`}></span>
            <span
                className={`flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium  ${mode === "dark" ? "bg-white text-black" : "bg-gray-300 text-black"}`}>
        {chartName(data[0].type)}
      </span>
            <span className={`flex-grow block border-t ${mode === "dark" ? "border-white" : "border-gray-300"}`}></span>
        </h2>
    );
};

ChartHeader.propTypes = {
    data: PropTypes.array.isRequired,
    mode: PropTypes.string.isRequired,
};

export default ChartHeader;
