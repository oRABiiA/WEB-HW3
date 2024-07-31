import {useTheme} from "../App";
import {useState} from "react";
import {TECollapse} from "tw-elements-react";

const InfoCard = () => {
    const {theme} = useTheme();
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        setActiveElement(value === activeElement ? "" : value);
    };

    return (
        <div className={`transition-colors duration-500 ease-in-out ${theme === "light" ? "bg-customBlue" : "bg-customDark"}`}>
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 pb-32 py-0">
                <div className={`relative isolate overflow-hidden rounded-3xl ${theme === "light" ? "bg-white" : "bg-gray-900"} px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}>
                    <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity={theme === "light" ? 0.9 : 0.3}/>
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor={theme === "light" ? "#111827" : "#bae4f7"}/>
                                <stop offset={1} stopColor={theme === "light" ? "#111827" : "#bae4f7"}/>
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className={`text-3xl font-bold tracking-tight ${theme === "light" ? "text-gray-900" : "text-white"} sm:text-4xl`}>
                            How To upload <strong className={`${theme === "light" ? "text-red-300" : "text-cyan-400"}`}>JSON</strong> Files
                        </h2>
                    </div>
                    <div className="w-full mt-8 mb-8 lg:mt-12 lg:mb-12">
                        {/* Accordion Item #1 */}
                        <div className={`w-full rounded-xl border-0 mb-1 ${theme === "light" ? "bg-gray-700 border-gray-700 text-white" : "bg-gray-500 border-gray-900 text-gray-900"}`}>
                            <h2 className="mb-0 font-bold" id="headingOne">
                                <button
                                    className={`${
                                        activeElement === "element1" &&
                                        `text-primary ${theme === "light" ? "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(229,231,235)]" : "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"}`
                                    } group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none rounded-xl ${theme === "light" ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-900 text-black"}`}
                                    type="button"
                                    onClick={() => handleClick("element1")}
                                    aria-expanded={activeElement === "element1"}
                                    aria-controls="collapseOne"
                                >
                                    How To Upload: Bar, Line, Horizontal Bar & Radar Charts
                                    <span
                                        className={`${
                                            activeElement === "element1"
                                                ? `rotate-[-180deg] -mr-1`
                                                : `rotate-0 fill-[#212529] dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                          />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={activeElement === "element1"}
                                className="!mt-0 !rounded-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <strong>Inorder to show these type of charts the JSON file must include:</strong>
                                    <ul>
                                        <li>
                                            - <strong>type</strong>: Can be Bar/Line/Bar Horizontal/Radar
                                        </li>
                                        <li>
                                            - <strong>x</strong>: An array which consists of x axis values. For Example: ["1", "2", "3"]
                                        </li>
                                        <li>
                                            - <strong>y</strong>: A 2-dimensional array which consists of y axis values. For Example: [[2,3],[4,5,5]]
                                        </li>
                                        <li>
                                            - <strong>label</strong>: Names for the y axis values. For Example: ["Traffic", "Stocks"]
                                        </li>
                                        <li>
                                            <strong>The label length and the y lengths must be the same!</strong>
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                        {/* Accordion Item #2 */}
                        <div className={`w-full rounded-xl border-0 mb-1 ${theme === "light" ? "bg-gray-700 border-gray-700 text-white" : "bg-gray-500 border-gray-900 text-gray-900"}`}>
                            <h2 className="mb-0 font-bold" id="headingTwo">
                                <button
                                    className={`${
                                        activeElement === "element2" &&
                                        `text-primary ${theme === "light" ? "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(229,231,235)]" : "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"}`
                                    } group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none rounded-xl ${theme === "light" ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-900 text-black"}`}
                                    type="button"
                                    onClick={() => handleClick("element2")}
                                    aria-expanded={activeElement === "element2"}
                                    aria-controls="collapseTwo"
                                >
                                    How To Upload: Pie, Doughnut & Polar Charts
                                    <span
                                        className={`${
                                            activeElement === "element2"
                                                ? `rotate-[-180deg] -mr-1`
                                                : `rotate-0 fill-[#212529] dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                          />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={activeElement === "element2"}
                                className="!mt-0 !rounded-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <strong>Inorder to show these type of charts the JSON file must include:</strong>
                                    <ul>
                                        <li>
                                            - <strong>type</strong>: Can be Pie/Doughnut/Polar
                                        </li>
                                        <li>
                                            - <strong>x</strong>: An array which consists label values. For Example:
                                            ["1", "2", "3"]
                                        </li>
                                        <li>
                                            - <strong>y</strong>: An array which consists chart values.
                                            For Example: [2,3,4]
                                        </li>
                                        <li>
                                            - <strong>label</strong>: Name for the chart. For Example: "Pie Chart"
                                        </li>
                                        <li>
                                            <strong>The label length and the y lengths must be the same!</strong>
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                        {/* Accordion Item #3 */}
                        <div className={`w-full rounded-xl border-0 mb-1 ${theme === "light" ? "bg-gray-700 border-gray-700 text-white" : "bg-gray-500 border-gray-900 text-gray-900"}`}>
                            <h2 className="mb-0 font-bold" id="headingThree">
                                <button
                                    className={`${
                                        activeElement === "element3" &&
                                        `text-primary ${theme === "light" ? "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(229,231,235)]" : "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"}`
                                    } group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none rounded-xl ${theme === "light" ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-900 text-black"}`}
                                    type="button"
                                    onClick={() => handleClick("element3")}
                                    aria-expanded={activeElement === "element3"}
                                    aria-controls="collapseThree"
                                >
                                    How To Upload: Bubble Chart
                                    <span
                                        className={`${
                                            activeElement === "element3"
                                                ? `rotate-[-180deg] -mr-1`
                                                : `rotate-0 fill-[#212529] dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                          />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={activeElement === "element3"}
                                className="!mt-0 !rounded-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <ul>
                                        <li>
                                            - <strong>type</strong>: Bubble
                                        </li>
                                        <li>
                                            - <strong>x</strong>: An array which consists x values. For Example: ["John", "Alex"]
                                        </li>
                                        <li>
                                            - <strong>y</strong>: A 2-dimensional array. For Example: [[2,3],[4,5]] <strong>* The array must only consist of arrays of length 2!</strong>
                                        </li>
                                        <li>
                                            - <strong>label</strong>: Name for the chart. For Example: "Bubble Chart"
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                        {/* Accordion Item #4 */}
                        <div className={`w-full rounded-xl border-0 mb-1 ${theme === "light" ? "bg-gray-700 border-gray-700 text-white" : "bg-gray-500 border-gray-900 text-gray-900"}`}>
                            <h2 className="mb-0 font-bold" id="headingFour">
                                <button
                                    className={`${
                                        activeElement === "element4" &&
                                        `text-primary ${theme === "light" ? "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(229,231,235)]" : "text-primary-400 [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"}`
                                    } group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none rounded-xl ${theme === "light" ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-900 text-black"}`}
                                    type="button"
                                    onClick={() => handleClick("element4")}
                                    aria-expanded={activeElement === "element4"}
                                    aria-controls="collapseFour"
                                >
                                    How To Upload: Scatter Chart
                                    <span
                                        className={`${
                                            activeElement === "element4"
                                                ? `rotate-[-180deg] -mr-1`
                                                : `rotate-0 fill-[#212529] dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                          />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={activeElement === "element4"}
                                className="!mt-0 !rounded-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <ul>
                                        <li>
                                            - <strong>type</strong>: Can be Pie/Doughnut/Polar
                                        </li>
                                        <li>
                                            - <strong>x</strong>: An array of numbers. For Example: [1,2,3]
                                        </li>
                                        <li>
                                            - <strong>y</strong>: An array of numbers. For Example: [4,5,6]
                                        </li>
                                        <li>
                                            - <strong>label</strong>: Name for the chart. For Example: "Scatter Chart"
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
