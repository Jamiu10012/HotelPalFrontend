import { IoCloseSharp } from "react-icons/io5";
import DetailCard from "./DetailCard";
import "../assets/css/detail.css";
import DetailCardTree from "./DetailCardTree";
import DetailCardTwo from "./DetailCardTwo";
import DetailCardFour from "./DetailCardFour";
import BookFormMain from "./BookFormMain";
import { useState } from "react";
import { useSelector } from "react-redux";

const RealDetail = ({ getData }) => {
  const [isBookOpen, SetisBookOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { token: newtoken } = useSelector((state) => state.user);
  const myToken = useSelector((state) => state.token);
  const token = localStorage.getItem("authToken");
  console.log("myt", myToken);
  console.log("new", newtoken);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleIsBookOpen = () => {
    SetisBookOpen(true);
    if (token === null) {
      window.location.href = "/login";
    }
  };
  const handleIsBookClose = () => {
    SetisBookOpen(false);
  };
  return (
    <div className="detail-body-container my-2 px-[110px] relative">
      <div className="li-txt font-[18px] text-[#4a4949]">
        <span className="text-[#fe598d]">{getData?.country}</span> /{" "}
        {getData?.city} / {getData?.county} / {getData?.area}
      </div>
      {isBookOpen && (
        <div className="book-container fixed  z-50 bottom-5 right-5 bg-[#5f4c76] w-[40%] rounded-[10px]  p-10 pt-8">
          <div className="clsz flex justify-end">
            <IoCloseSharp
              className=" text-white text-[26px] cursor-pointer"
              onClick={handleIsBookClose}
            />
          </div>
          <BookFormMain getData={getData} />
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
          {showFullDescription
            ? getData?.description
            : `${getData?.description.slice(0, 350)}...`}
          <div
            className=""
            onClick={toggleDescription}
            style={{ cursor: "pointer", color: "#fe598d" }}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </div>
        </div>
      </div>

      <div className="details-row flex flex-wrap justify-between items-start w-full">
        <DetailCard getData={getData} />
        <DetailCardTree getData={getData} />
        <DetailCardTwo getData={getData} />
        <DetailCardFour getData={getData} />
      </div>
    </div>
  );
};

export default RealDetail;
