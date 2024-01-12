import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const TopDetail = ({ combinedImages }) => {
  // const data = [
  //   { img: "/images/hero-slide-01.webp", loc: "Bangkok", num: 3 },
  //   { img: "/images/hero-slide-02.webp", loc: "Lagos", num: 4 },
  //   { img: "/images/hero-slide-03.webp", loc: "GeoGia", num: 2 },
  // ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === combinedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? combinedImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="image-container-detail relative">
      <img
        src={combinedImages[currentImageIndex]}
        alt=""
        className="w-full h-[80vh] object-cover mage"
      />
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
