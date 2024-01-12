import React, { useEffect, useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { CreateBooking } from "../../Apis/Booking";
import { ToastContainer, toast } from "react-toastify";

const BookFormMain = ({ getData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDateOut, setSelectedDateOut] = useState(null);
  const [isDatePickerVisibleOut, setDatePickerVisibleOut] = useState(false);
  const [dateDifference, setDateDifference] = useState(null);
  const [price, setPrice] = useState("");
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [sGuest, setSGuest] = useState("");

  const handleDateChangeOut = (event) => {
    const newDateOut = event.target.value;
    setSelectedDateOut(newDateOut);
    calculateDateDifference(selectedDate, newDateOut);
  };

  const handleCheckInClickOut = () => {
    setDatePickerVisibleOut(true);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    calculateDateDifference(newDate, selectedDateOut);
  };

  const handleCheckInClick = () => {
    setDatePickerVisible(true);
  };

  const propId = getData?._id;

  const calculateDateDifference = (checkInDate, checkOutDate) => {
    if (checkInDate && checkOutDate) {
      const diffInMilliseconds = new Date(checkOutDate) - new Date(checkInDate);
      const daysDifference = Math.round(
        diffInMilliseconds / (1000 * 60 * 60 * 24)
      );
      setDateDifference(daysDifference);
    }
  };
  useEffect(() => {
    if (dateDifference >= 7) {
      setPrice(getData?.price_per_night_week);
    } else if (dateDifference >= 30) {
      setPrice(getData?.price_per_night_month);
    } else {
      setPrice(getData?.price_per_night);
    }
  }, [dateDifference, getData]);

  const rentalp = price * dateDifference;

  const totalPrice =
    Number(getData?.cleaning_fee) + Number(getData?.tax_fee) + rentalp;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      checkInDate: selectedDate,
      checkOutDate: selectedDateOut,
      roomFee: price,
      numberOfGuests: sGuest,
      totalPrice: totalPrice,
    };

    console.log(formData);

    try {
      const result = await CreateBooking(formData, userId, token, propId);
      toast.success("Booked Successfully!!!");

      return () => clearTimeout(timeoutId);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bookfm-bx pt-5">
      <form action="" onSubmit={handleFormSubmit}>
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
              name="sGuest"
              id="sGuest"
              className="block desc-input py-3 px-0 w-full text-sm text-gray-900 bg-transparent text-white  outline-none caret-white  peer"
              placeholder=" "
              required
              value={sGuest}
              onChange={(e) => setSGuest(e.target.value)}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guest No: e.g 1
            </label>
          </div>
        </div>

        {dateDifference && (
          <div className="box-container">
            <div className="cal-price-box">
              <div className="left-pric">
                {getData?.currency} {price} x {dateDifference} nights
              </div>
              <div className="left-pric npb">
                {getData?.currency} {rentalp}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">Cleaning Fee</div>
              <div className="left-pric npb">
                {getData?.currency}
                {getData?.cleaning_fee}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">City Fee</div>
              <div className="left-pric npb">
                {getData?.currency}
                {getData?.tax_fee}
              </div>
            </div>
            <div className="cal-price-box">
              <div className="left-pric">TOTAL</div>
              <div className="left-pric npb">
                {" "}
                {getData?.currency}
                {Number(getData?.cleaning_fee) +
                  Number(getData?.tax_fee) +
                  rentalp}
              </div>
            </div>
          </div>
        )}
        <div className="btn-book   z-20 flex justify-center  my-6 ">
          <button className="bokbtn bg-[#fe598d] border border-[#fe598d] hover:bg-[#fff] px-5 py-2 rounded-[6px] text-white hover:text-[#fe598d]">
            Book Now
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default BookFormMain;
