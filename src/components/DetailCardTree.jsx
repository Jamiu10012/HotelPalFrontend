import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const DetailCardTree = () => {
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
          Address
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
          <p className="mb-3 font-normal text-black">Address: Ridge Street</p>
          <p className="mb-3 font-normal text-black">County: New York County</p>
          <p className="mb-3 font-normal text-black">City: New York</p>
          <p className="mb-3 font-normal text-black">State: NY</p>
          <p className="mb-3 font-normal text-black">Postcode: 10007</p>
          <p className="mb-3 font-normal text-black">Country: United States</p>
        </>
      )}
    </div>
  );
};

export default DetailCardTree;
