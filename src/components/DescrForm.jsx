import { useEffect } from "react";

const DescrForm = ({ handlePriceClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ol className="list-t flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-[#fe598d] rounded-lg shadow-sm  sm:text-base   sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center text-[#fe598d] ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-[#fe598d] rounded-full shrink-0 ">
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
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
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
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            7
          </span>
          Amenities
        </li>
      </ol>
      <form className=" my-5   w-full">
        <div className="title-desc text-[20px] font-bold text-gray-500">
          Description
        </div>
        <div className="flex flex-wrap justify-between items-end">
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
              Title
            </label>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <label
              for="countries"
              class="block desc-input mb-2 text-sm font-medium text-gray-900 dark:text-white rad-bx"
            >
              Select Category
            </label>
            <select
              id="countries"
              class="bg-transparent border-b-2 border-gray-600 appearance-none outline-none text-gray-900 text-sm  block desc-input w-full p-2.5"
            >
              <option>Select Category</option>
              <option>None</option>
              <option value="Apartment">Apartment</option>
              <option value="Dorm">Dorm</option>
              <option value="Cabin">Cabin</option>
            </select>
          </div>
          <div className="relative z-0 inp-lab-container mb-5 group">
            <label
              for="countries"
              class="block desc-input mb-2 text-sm font-medium text-gray-900 dark:text-white rad-bx"
            >
              Listed In/Room Type
            </label>
            <select
              id="countries"
              class="bg-transparent border-b-2 border-gray-600 appearance-none outline-none text-gray-900 text-sm  block desc-input w-full p-2.5"
            >
              <option>Select Room Type</option>
              <option value="Entire Room">Entire Room</option>
              <option value="Private">Private</option>
              <option value="Shared Room">Shared Room</option>
            </select>
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
              Guest No: e.g. 3
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
              Bathrooms Size: e.g. 2
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
              {/* Listing Size: 2,500 ft2 */}
              Bedrooms Size: e.g. 2
            </label>
          </div>

          <div className="relative z-0 inp-lab-container aea-text mb-5 group">
            <textarea
              name=""
              id=""
              className=" block desc-input py-5 min-h-[150px] px-5 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none   outline-none  peer"
              placeholder=" "
              required
            />
            <label
              for=""
              className=" mx-5 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-70 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fe598d] peer-focus:dark:text-[#fe598d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Property Description
            </label>
          </div>
        </div>
        <div className="contn-btn flex justify-center">
          <button
            //   type="submit"
            className="  text-white bg-[#fe598d] hover:bg-[#fff] hover:border hover:text-[#fe598d]  hover:border-[#fe598d] focus:ring-4 focus:outline-none focus:ring-[#fe598d] font-medium rounded-lg text-sm w-[200px]  px-5 py-2.5 text-center "
            onClick={handlePriceClick}
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default DescrForm;
