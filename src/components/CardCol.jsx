import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const CardCol = ({ property }) => {
  const [isAct, setIsAct] = useState(false);
  const navigate = useNavigate();

  const gotoProp = () => {
    navigate(`/propdet?id=${property._id}`);
  };
  const handleIsAct = () => {
    setIsAct(!isAct);
  };
  return (
    <div
      className="card-prop w-[400px] bg-white border rounded-lg shadow  border-[#fe598d] relative"
      onClick={gotoProp}
    >
      <img className="rounded-t-lg" src={property.cover_image} alt="" />
      <div className="price-fav-cont absolute top-3 flex justify-between w-full p-2">
        <div className="price-tag bg-[#fe598d] text-[#fff] rounded px-2">
          {property.currency}
          {property.price_per_night}
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
          <h5 className="txt-cd mb-2 text-[16px] font-bold tracking-tight text-gray-700 ">
            {property.title}
          </h5>
        </Link>
        <div className="body-box mb-3 font-normal text-gray-400">
          <div className="flex items-center gap-1 mb-2">
            <IoLocation />
            <span> {property.country}</span>
          </div>

          <div className="flex items-center gap-1 ">
            <IoLocation />
            <span>
              {property.category} / {property.room_type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCol;
