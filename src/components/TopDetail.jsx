import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopDetail = ({ combinedImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [image, setImage] = useState(
    combinedImages?.slice(currentImageIndex, 1)
  );

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === combinedImages?.length - 1 ? 0 : prev + 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? combinedImages?.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setImage(combinedImages?.slice(currentImageIndex, currentImageIndex + 1));
  }, [combinedImages, currentImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <div className="container mx-auto p-4 relative">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 rounded-xl overflow-hidden lg:h-[60vh]">
        <div className="col-span-2 row-span-2">
          <img
            src={image}
            alt=""
            className="w-full object-cover image"
          />
        </div>
        <div className="r row-span-1 rounded-xl overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full object-cover image"
          />
        </div>
        <div className="c row-span-1 rounded-xl overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full object-cover image"
          />
        </div>
      </div>
      <div className="control-pre-next flex justify-between p-10 absolute top-[40%] w-full lg:hidden">
        <div
          className="cursor-pointer ctrl-delt w-[30px] h-[30px] bg-[#f399b698] rounded-full text-[#fff] flex justify-center items-center"
          onClick={prevImage}
        >
          <FaChevronLeft />
        </div>
        <div
          className="cursor-pointer ctrl-delt w-[30px] h-[30px] bg-[#f399b698] rounded-full text-[#fff] flex justify-center items-center"
          onClick={nextImage}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
