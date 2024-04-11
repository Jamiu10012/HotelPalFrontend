import er from "../assets/video/er.mp4";
import "../assets/css/homePage.css";

const HeroVideo = () => {
  return (
    <div className="w-full relative py-24 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 z-10 top-0 h-full bg-[#48454593]"></div>
        <video autoPlay loop muted playsInline className="vids w-full h-full">
          <source src={er} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative flex justify-center items-start flex-col z-10">
        <div className="text-box relative w-[90%] md:w-[45%] lg:w-[50%] p-4 md:p-8 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-7 md:leading-9 lg:leading-40 mb-4 md:mb-8 lihe text-white ">
            A better Vacation <br /> Experience
          </h1>
          <p className=" rd-wdt-cont text-white ">
            Inspiring, award-winning design meets modern, mobile-first service.
            Welcome to the future of hospitality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
