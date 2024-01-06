import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const DetailCardFour = () => {
  const [isclick, setIsclick] = useState(false);

  const handleClick = () => {
    setIsclick(true);
  };
  const handleClickClose = () => {
    setIsclick(false);
  };
  return (
    <div className="mw-bx max-w-sm mb-2 p-6 bg-[#f2afc5] border border-gray-200 rounded-lg shadow ">
      <div className="sel-top-cont flex items-center justify-between w-full">
        <h5 className="mb-2 text-xl font-medium tracking-tight text-white">
          More Features
        </h5>
        {isclick ? (
          <FaChevronUp
            className="text-white cursor-pointer"
            onClick={handleClickClose}
          />
        ) : (
          <FaChevronDown
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>

      {isclick && (
        <>
          <p className="mb-3 font-normal text-black">Kitchen</p>
          <p className="mb-3 font-normal text-black">Heating</p>
          <p className="mb-3 font-normal text-black">Pool</p>
          <p className="mb-3 font-normal text-black">Dryer</p>
          <p className="mb-3 font-normal text-black">Fax</p>
          <p className="mb-3 font-normal text-black">TV</p>
          <p className="mb-3 font-normal text-black">Essentials</p>
          <p className="mb-3 font-normal text-black">Washer</p>
          <p className="mb-3 font-normal text-black">Gym</p>
        </>
      )}
    </div>
  );
};

export default DetailCardFour;
