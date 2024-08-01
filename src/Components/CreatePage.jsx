import { useTheme } from "../App.jsx";
import BackArrow from "../assets/Charts/arrow-small-left.png";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { TEChart } from "tw-elements-react";
import PropTypes from "prop-types";
import { useRef } from "react";

const CreatePage = ({ setCurrentPage }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    const chartsRef = useRef(null);

    const SizeOptions = [
        { value: "1", label: "1 X 1" },
        { value: "2", label: "1 X 2" },
        { value: "3", label: "1 X 3" },
        { value: "4", label: "2 X 2" }
    ];

    const ChartOptions = [
        { value: "bar", label: "Bar Chart" },
        { value: "line", label: "Line Chart" },
        { value: "pie", label: "Pie Chart" },
        { value: "doughnut", label: "Doughnut Chart" },
        { value: "radar", label: "Radar Chart" },
        { value: "polarArea", label: "Polar Area Chart" }
    ];

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [size, setSize] = useState(null);
    const [additionalSelects, setAdditionalSelects] = useState([]);
    const [chartsData, setChartsData] = useState([]);
    const [createON,setCreate]=useState(null);
    const [PDP,setPDP]=useState(null);
    const [chartSizes, setChartSizes] = useState([]);

    const handleChange = (value) => {
        handleClearButton();
        setSize(value);
        const numSelects = parseInt(value.value);
        setAdditionalSelects(Array(numSelects).fill().map(() => ({
            chartType: null,
            dataInputs: Array(7).fill('0'),
            nameInputs: Array(7) .fill(''),
            colorBLR: "#6590D5",
            colorPDP: ["#AB1212","#6590D5","#844343","#A410C1","#107DC1","#D2800F","#49D20F"],
        })));
        setChartSizes(Array(numSelects).fill({ width: '500px', height: '500px' })); // Initialize sizes
    };

    const handleAdditionalChange = (index, value) => {
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[index].chartType = value;
        setAdditionalSelects(newAdditionalSelects);

    };

    const handleDataInputChange = (chartIndex, dataIndex, newValue) => {
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[chartIndex].dataInputs[dataIndex] = newValue;
        setAdditionalSelects(newAdditionalSelects);
    };


    const handleNameInputChange = (selectIndex, inputIndex, value) => {
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[selectIndex].nameInputs[inputIndex] = value;
        setAdditionalSelects(newAdditionalSelects);
    };

    const handleClearButton = () => {
        setSize(null);
        setAdditionalSelects([]);
        setCreate(null);
        setChartSizes([]);
        setPDP(null);
    };

    const handleCreateButton = () => {
        // const counter=0;
        const datasets = additionalSelects.map((item) => ({
            label: 'Data',
            data: item.dataInputs.map((input) => parseInt(input, 10) || 0),
            labels: item.nameInputs.length ? item.nameInputs : days,
            backgroundColor: (item.chartType.value === "bar" || item.chartType.value === "line" || item.chartType.value === "radar" ) ? item.colorBLR : item.colorPDP,
            borderWidth: 1
        }));
        setCreate('1');
        setChartsData(datasets);
        // Extract chart types
        const chartTypes = additionalSelects.map(item => item.chartType.value);

        // Check if all chart types are the same
        const allSameType = chartTypes.every(type => type === chartTypes[0]);

        // Check if the type is one of the specified types
        const isOneOfPDPTypes = ["polarArea", "doughnut", "pie"].includes(chartTypes[0]);

        // Set PDP if both conditions are met
        if (allSameType && isOneOfPDPTypes) {
            setPDP('1');
        }
        if (chartsRef.current) {
            chartsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };



    const handleBLRcolorChange = (selectIndex,  value) =>{
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[selectIndex].colorBLR = value;
        setAdditionalSelects(newAdditionalSelects);
    }

    const handlePDPcolorChange = (selectIndex, inputIndex , value) =>{
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[selectIndex].colorPDP[inputIndex] = value;
        setAdditionalSelects(newAdditionalSelects);
    }

    const handleChartSizeChange = (index, event) => {
        const { value } = event.target;
        let newSize;
        if (value === 'small') {
            newSize = { width: '300px', height: '300px' };
        } else if (value === 'medium') {
            newSize = { width: '400px', height: '400px' };
        } else if (value === 'large') {
            newSize = { width: '700px', height: '700px' };
        } else if (value === 'extra small') {
            newSize = { width: '200px', height: '200px' };
        } else if (value === 'regular') {
            newSize = { width: '500px', height: '500px' };
        }
        const newChartSizes = [...chartSizes];
        newChartSizes[index] = newSize;
        setChartSizes(newChartSizes);
    };

    return (
        <section>
            <div className="fixed bottom-40 left-10 w-16 h-16 bg-zinc-800 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center">
                <button
                    onClick={() => setCurrentPage("uploadPage")}
                    className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
                >
                    <img src={BackArrow} alt="Back" className="w-full h-full object-cover rounded-lg" />
                </button>
            </div>
            <div className="flex mt-4 mx-6 w-64">
                <label className={`block mr-2 text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                    Size:
                </label>
                <Select
                    value={size}
                    onChange={handleChange}
                    options={SizeOptions}
                    className="w-full" // Removed mb-2 to eliminate the margin below
                />
            </div>



            {size && (
                <div className="mt-4 mx-6 lg:mx-11">
                    {additionalSelects.map((item, index) => (
                        <div key={index} className="mb-8 mt-4 flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="w-full lg:w-64">
                                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                    Chart {index + 1}:
                                </label>
                                <Select
                                    value={item.chartType}
                                    onChange={(value) => handleAdditionalChange(index, value)}
                                    options={ChartOptions}
                                    className="w-full"
                                />
                            </div>
                            {item.chartType && (item.chartType.value === "bar" || item.chartType.value === "line" || item.chartType.value === "radar" ) && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-4 w-full">
                                    {item.dataInputs.map((inputValue, inputIndex) => (
                                        <div key={inputIndex} className="flex flex-col items-center">
                                            <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                                Data {inputIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => handleDataInputChange(index, inputIndex, e.target.value)}
                                                className="border rounded p-1 w-24"
                                            />
                                        </div>
                                    ))}
                                    {item.nameInputs.map((inputValue, inputIndex) => (
                                        <div key={inputIndex} className="flex flex-col items-center">
                                            <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                                Label {inputIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => handleNameInputChange(index, inputIndex, e.target.value)}
                                                className="border rounded p-1 w-24"
                                            />
                                        </div>
                                    ))}
                                    <label className={`flex flex-col items-center block text-sm mt-2 font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                        Chart Color:
                                    </label>
                                    <div>
                                        <input
                                            id="nativeColorPicker"
                                            type="color"
                                            value={item.colorBLR}
                                            onChange={(e) => handleBLRcolorChange(index, e.target.value)}
                                            className="w-full mt-2"
                                        />
                                    </div>
                                </div>
                            )}
                            {item.chartType && (item.chartType.value === "pie" || item.chartType.value === "polarArea" || item.chartType.value === "doughnut" ) && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-4 w-full">
                                    {item.dataInputs.map((inputValue, inputIndex) => (
                                        <div key={inputIndex} className="flex flex-col items-center">
                                            <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                                Data {inputIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => handleDataInputChange(index, inputIndex, e.target.value)}
                                                className="border rounded p-1 w-24"
                                            />
                                        </div>
                                    ))}
                                    {item.nameInputs.map((inputValue, inputIndex) => (
                                        <div key={inputIndex} className="flex flex-col items-center ">
                                            <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                                Label {inputIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => handleNameInputChange(index, inputIndex, e.target.value)}
                                                className="border rounded p-1 w-24"
                                            />
                                        </div>
                                    ))}
                                    {item.colorPDP.map((inputValue, inputIndex) => (
                                        <div key={inputIndex} className="flex flex-col items-center">
                                            <div className="w-24">
                                                <input
                                                    id="nativeColorPicker"
                                                    type="color"
                                                    value={inputValue}
                                                    onChange={(e) => handlePDPcolorChange(index,inputIndex, e.target.value)}
                                                    className="w-full mt-2 "
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="w-full flex justify-center mt-4 ">
                <div className="w-full border-t border-gray-700" />
            </div>
            <div className="flex flex-col items-center space-y-4 mt-2">
                <div className="flex w-64 h-10 space-x-2 mb-8">
                    <button
                        onClick={handleCreateButton}
                        className="w-32 h-10 rounded-full bg-[#33b249] text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Create
                    </button>
                    <button
                        onClick={handleClearButton}
                        className="w-32 h-10 rounded-full bg-[#ffbd03] text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Clear
                    </button>
                </div>
            </div>
            {PDP && (
                <div className="w-full flex flex-col sm:flex-row justify-center mt-4">
                    <label className={`block mt-4 text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                        Chart Size:
                    </label>
                    {additionalSelects.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 mt-2 sm:ml-1 sm:mr-1">
                            <select onChange={(e) => handleChartSizeChange(index, e)} className="w-64 mb-2" >
                                <option value="regular">Regular</option>
                                <option value="extra small">Extra Small</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    ))}
                </div>
            )}

            {createON && (
                <div ref={chartsRef}
                     className={`transition-colors duration-500 ease-in-out ${isDarkMode ? "bg-customDark" : "bg-customBlue"} mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
                >
                    <div className={`relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0 mb-32 ${isDarkMode ? "bg-gray-800" : "bg-gray-400"}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full lg:ml-30 sm:pb-20">
                            {additionalSelects.map((item, index) => (
                                item.chartType  && (
                                    <div key={index} className={`flex justify-center items-center relative w-full ${item.chartType === 'Pie' ? "h-[200px]" : "h-[500px]"}`}>
                                        <div className="flex justify-center items-center w-full h-full" style={chartSizes[index]}>
                                            <TEChart
                                                type={item.chartType ? item.chartType.value : 'bar'}
                                                data={{
                                                    labels: chartsData[index] ? chartsData[index].labels : days,
                                                    datasets: chartsData[index] ? [chartsData[index]] : []
                                                }}
                                                options={{
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

CreatePage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

export default CreatePage;