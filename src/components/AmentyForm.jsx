import { useEffect, useState } from "react";

const options = [
  "Heating",
  "Kitchen",
  "Pool",
  "Dryer",
  "Wifi",
  "Essentials",
  "Gym",
];

const AmentyForm = ({ handleAmentyClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ol className="list-t flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-[#fe598d] rounded-lg shadow-sm  sm:text-base   sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center  ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 ">
            1
          </span>
          Description
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500  rounded-full shrink-0">
            2
          </span>
          Price
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          Images
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>

        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            6
          </span>
          Location
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-[#fe598d]">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-[#fe598d]  rounded-full shrink-0 ">
            7
          </span>
          Amenities
        </li>
      </ol>
      <form className=" my-5   w-full">
        <div className="title-desc text-[20px] font-bold text-gray-500 mb-4">
          Other Features
        </div>

        <div className="flex flex-wrap justify-start items-end gap-10">
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name=""
              id=""
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
            />
            <label
              for=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Late Check-in: Before 11 PM
            </label>
          </div>

          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name=""
              id=""
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
            />
            <label
              for=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Optional Services: kitchen fully equipped
            </label>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <input
              type="text"
              name=""
              id=""
              className="block desc-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 outline-none  peer"
              placeholder=" "
              required
            />
            <label
              for=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Outdoor Facilities: restaurants and bars.
            </label>
          </div>
          <div className="">
            <h1 className="text-2xl font-medium mb-4">Amenities</h1>
            <div className="flex flex-wrap gap-4">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`cursor-pointer p-3 border rounded ${
                    selectedOptions.includes(option)
                      ? "bg-[#fe598d] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p>Selected Options: {selectedOptions.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="contn-btn flex justify-center gap-20">
          <button
            type="button"
            className="  text-[#fe598d] bg-[#fff] hover:bg-[#fe598d] border hover:text-[#fff]  border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            onClick={handleAmentyClose}
          >
            Back
          </button>
          <button
            //   type="submit"
            className="  text-white bg-[#fe598d] hover:bg-[#fff] hover:border hover:text-[#fe598d]  hover:border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AmentyForm;
