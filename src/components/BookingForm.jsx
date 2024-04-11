import { useState } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { BsDashCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function BookingForm() {
  const [guest, setGuest] = useState(1);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleCheckInChange = (event) => {
    setCheckIn(event.target.value);
  };
  const handleCheckOutChange = (event) => {
    setCheckOut(event.target.value);
  };
  // console.log(guest);

  const gotoProp = () => {
    navigate(`/properties?l=${location}&n=${checkIn}&o=${checkOut}&g=${guest}`);
  };

  return (
    <div className="relative -mt-6 max-w-6xl mx-auto rounded-t-3xl md:rounded-none bg-white lg:shadow-md lg:rounded-full flex p-2 z-50">
      <form className="lg:rounded-full md:flex space-y-4 md:space-y-0 justify-between w-full items-center gap-8 p-3 md:border border-primary_pink px-8">
        <div className="gap-2 flex flex-wrap lg:flex-nowrap items-center md:border-r border-primary_pink pr-3">
          <span>
            <LiaCitySolid color="#fe598d" />
          </span>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
            className="h-10 border w-full border-primary_pink outline-none px-2 text-sm"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="flex gap-2 flex-wrap lg:flex-nowrap items-center md:border-r border-primary_pink pr-3">
          <span className="text-sm lab-book">Check In</span>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            className="h-10 border w-full border-primary_pink px-2 rounded-sm text-[12px]"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>
        <div className="flex gap-2 flex-wrap lg:flex-nowrap items-center">
          <span className="text-[14px] ">Check Out</span>
          <input
            type="date"
            className="h-10 border w-full border-primary_pink px-2 rounded-sm text-[12px]"
            value={checkOut}
            onChange={handleCheckOutChange}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="flex gap-2">
            <PiUsersLight size={25} color="#fe598d" />
            <span className="text-[20]">Guest</span>
          </span>
          <div className="flex gap-3 justify-center items-center">
            <span
              className="text-xl cursor-pointer"
              onClick={() => {
                if (guest <= 1) {
                  setGuest(1);
                } else {
                  setGuest(guest - 1);
                }
              }}
            >
              <BsDashCircle size={20} color="#fe598d" />
            </span>
            <span className="text-[20]">{parseInt(guest)}</span>
            <span
              className="text-xl cursor-pointer"
              onClick={() => {
                if (guest >= 10) {
                  setGuest(10);
                } else {
                  setGuest(guest + 1);
                }
              }}
            >
              <BsPlusCircle size={20} color="#fe598d" />
            </span>
          </div>
        </div>
        <div className="">
          <button
            className="lg:flex justify-center w-full h-10 items-center bg-primary_pink rounded-full py-2 px-6 text-[16px] text-white md:hidden"
            type="button"
            onClick={gotoProp}
          >
            Search
          </button>
          <button
            className="hidden md:flex justify-center text-4xl items-center text-primary_pink rounded-full lg:hidden"
            type="button"
            onClick={gotoProp}
          >
            <FiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
