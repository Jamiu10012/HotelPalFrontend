import er from "../assets/video/er.mp4";
import "../assets/css/homePage.css";

const HeroVideo = () => {
  return (
    <div className="main-hero h-[70vh] w-full relative">
      <div className="absolute w-full top-0 h-full bg-[#4845453b]"></div>
      <video autoPlay loop muted playsInline className="vids w-[100vw]">
        <source src={er} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text absolute top-0 left-4 md:left-12 w-full md:w-[100%] lg:w-[100%] flex justify-center items-start flex-col h-full z-10 text-container">
        <div className="text-box relative w-full md:w-[45%] lg:w-[40%] p-4 md:p-8 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-7 md:leading-9 lg:leading-40 mb-4 md:mb-8 lihe text-white ">
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
