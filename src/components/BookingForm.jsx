import { useState } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { BsDashCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";

function BookingForm() {
  const [guest, setGuest] = useState(1);

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
          />
        </div>
        <div className="rm-brd flex gap-2 justify-center items-center">
          <span className="text-[14px] lab-book">Check In</span>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            className="inp-book chek-inp border-[1px] px-2 rounded-sm text-[12px]"
          />
        </div>
        <div className=" rm-brd flex gap-2 justify-center items-center">
          <span className="text-[14px] lab-book">Check Out</span>
          <input
            type="date"
            className="inp-book chek-inp border-[1px] px-2 rounded-sm text-[12px]"
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
          <button className="flex justify-center items-center bg-primary_pink rounded-full py-2 px-6 text-[16px] text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
