import { IoCloseSharp } from "react-icons/io5";
import DetailCard from "./DetailCard";
import "../assets/css/detail.css";
import DetailCardTree from "./DetailCardTree";
import DetailCardTwo from "./DetailCardTwo";
import DetailCardFour from "./DetailCardFour";
import BookFormMain from "./BookFormMain";
import { useState } from "react";

const RealDetail = () => {
  const [isBookOpen, SetisBookOpen] = useState(false);

  const handleIsBookOpen = () => {
    SetisBookOpen(true);
  };
  const handleIsBookClose = () => {
    SetisBookOpen(false);
  };
  return (
    <div className="detail-body-container my-2 px-[110px] relative">
      <div className="li-txt font-[18px] text-[#4a4949]">
        <span className="text-[#fe598d]">Chicago</span> / Island
      </div>
      {isBookOpen && (
        <div className="book-container fixed  z-30 bottom-5 right-5 bg-[#5f4c76] w-[40%] rounded-[10px]  p-10 pt-8">
          <div className="clsz flex justify-end">
            <IoCloseSharp
              className=" text-white text-[26px] cursor-pointer"
              onClick={handleIsBookClose}
            />
          </div>
          <BookFormMain />
        </div>
      )}
      <div className="btn-book fixed right-10 z-20 top-[90%]">
        <button
          className="bokbtn bg-[#fe598d] border border-[#fe598d] hover:bg-[#fff] px-5 py-2 rounded-[6px] text-white hover:text-[#fe598d]"
          onClick={handleIsBookOpen}
        >
          Book Now
        </button>
      </div>
      <div className="dec-container">
        <div className="des-ad font-bold text-[#3b3a3a]">Description</div>
        <div className="desc-box text-[#595758]">
          Enjoy a huge bedroom in a newly renovated 1000 sq feet, 3 bedroom,
          apartment with all the amenities. It has a fully functional kitchen
          with cookware and a bathroom with all the essentials and a dryer. The
          apartment is located right in the middle of all the most convenient,
          vibrant, and fun neighborhoods in NYC.
        </div>
      </div>

      <div className="details-row flex flex-wrap justify-between items-start w-full">
        <DetailCard />
        <DetailCardTree />
        <DetailCardTwo />
        <DetailCardFour />
      </div>
    </div>
  );
};

export default RealDetail;
