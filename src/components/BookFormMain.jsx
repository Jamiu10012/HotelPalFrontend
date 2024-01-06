import React, { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const BookFormMain = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDateOut, setSelectedDateOut] = useState(null);
  const [isDatePickerVisibleOut, setDatePickerVisibleOut] = useState(false);

  const handleDateChangeOut = (event) => {
    setSelectedDateOut(event.target.value);
  };

  const handleCheckInClickOut = () => {
    setDatePickerVisibleOut(true);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCheckInClick = () => {
    setDatePickerVisible(true);
  };

  return (
    <div className="bookfm-bx pt-5">
      <form action="">
        <div className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center border border-[#fff] px-3 py-2">
          <FaCalendarDays className="text-[20px] text-[#fff]" />
          {isDatePickerVisible ? (
            <input
              type="date"
              onChange={handleDateChange}
              value={selectedDate || "Check in"}
              className=" outline-none bg-transparent text-white"
            />
          ) : (
            <span
              onClick={handleCheckInClick}
              className="text-[20px] text-gray-400"
            >
              Check in
            </span>
          )}
        </div>
        <div className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center border border-[#fff] px-3 py-2">
          <FaCalendarDays className="text-[20px] text-[#fff]" />
          {isDatePickerVisibleOut ? (
            <input
              type="date"
              onChange={handleDateChangeOut}
              value={selectedDateOut || ""}
              className=" outline-none bg-transparent text-white"
            />
          ) : (
            <span
              onClick={handleCheckInClickOut}
              className="text-[20px] text-gray-400"
            >
              Check out
            </span>
          )}
        </div>
        <div className="check-in-out-bx rounded mb-5 w-full flex gap-[10px] items-center border border-[#fff] px-3 py-2 ">
          <IoMdPerson className="text-[20px] text-[#fff]" />

          <div className="relative z-0 inp-lab-container  group">
            <input
              type="text"
              name=""
              id=""
              className="block desc-input py-3 px-0 w-full text-sm text-gray-900 bg-transparent  outline-none caret-white  peer"
              placeholder=" "
              required
            />
            <label
              for=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guest No: e.g 1
            </label>
          </div>
        </div>
        <div className="btn-book   z-20 flex justify-center  my-6 ">
          <button className="bokbtn bg-[#fe598d] border border-[#fe598d] hover:bg-[#fff] px-5 py-2 rounded-[6px] text-white hover:text-[#fe598d]">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookFormMain;
