import { useState } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { BsDashCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
    <div className="boo-cont absolute -bottom-[1rem] left-[7%] rounded-full search-container w-[85%] mx-auto bg-white flex py-2 px-2 z-20">
      <form className=" book-ser-form relative w-[100%]  bg-faint_pink rounded-full flex justify-between items-center gap-6 mx-auto p-3 border border-primary_pink ">
        <div className="rm-brd relative h-full rounded-s-full pr-3 flex justify-center items-center border-e-[0.8px] border-e-primary_pink">
          <span>
            <LiaCitySolid size={25} color="#fe598d" />
          </span>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
            className="inp-book w-[300px] h-full bg-faint_pink outline-none px-4 text-[16px]"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="rm-brd flex gap-2 justify-center items-center">
          <span className="text-[14px] lab-book">Check In</span>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            className="inp-book chek-inp border-[1px] px-2 rounded-sm text-[12px]"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>
        <div className=" rm-brd flex gap-2 justify-center items-center">
          <span className="text-[14px] lab-book">Check Out</span>
          <input
            type="date"
            className="inp-book chek-inp border-[1px] px-2 rounded-sm text-[12px]"
            value={checkOut}
            onChange={handleCheckOutChange}
          />
        </div>

        <div className="flex justify-center items-center ">
          <span>
            <PiUsersLight size={25} color="#fe598d" />
          </span>
          <div className="flex gap-3 justify-center items-center w-[160px]">
            <span className="text-[20] stat">Guest</span>
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
        <div className="btn-ser">
          <button
            className="flex justify-center items-center bg-primary_pink rounded-full py-2 px-6 text-[16px] text-white"
            type="button"
            onClick={gotoProp}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
