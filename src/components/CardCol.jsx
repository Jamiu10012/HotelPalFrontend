import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardCol = () => {
  const [isAct, setIsAct] = useState(false);
  const handleIsAct = () => {
    setIsAct(!isAct);
  };
  return (
    <div className="card-prop w-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#fff] dark:border-[#fe598d] relative">
      <img className="rounded-t-lg" src="/images/hero-slide-01.webp" alt="" />
      <div className="price-fav-cont absolute top-3 flex justify-between w-full p-2">
        <div className="price-tag bg-[#fe598d] text-[#fff] rounded px-2">
          $200
        </div>
        <div
          className="fav-bx w-6 h-6  flex justify-center items-center text-[#fe598d] "
          onClick={handleIsAct}
        >
          {isAct ? <MdFavorite /> : <MdFavoriteBorder />}
        </div>
      </div>
      <div className="p-2">
        <Link to={"/propdet"}>
          <h5 className="txt-cd mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-gray-700">
            Beautiful Cabin, Simple Price
          </h5>
        </Link>
        <div className="body-box mb-3 font-normal text-gray-700 dark:text-gray-400">
          <div className="flex items-center gap-1 mb-2">
            <IoLocation />
            <span>Newyork</span>
          </div>

          <div className="flex items-center gap-1 ">
            <IoLocation />
            <span>VIlla / Entire Room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCol;
