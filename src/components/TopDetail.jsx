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
    <div className="image-container-detail relative">
      <img src={image} alt="" className="w-full h-[80vh] object-cover image" />
      <div className="control-pre-next flex justify-between p-10 absolute top-[40%] w-full">
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
