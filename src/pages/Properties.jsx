import CardCol from "../components/CardCol";
import "../assets/css/property.css";
import PropertyFilter from "../components/PropertyFilter";
const Properties = () => {
  return (
    <>
      <div className='hero-section relative h-[50vh] after:content-[" "] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[rgba(255,251,246,0.8)] after:to-transparent flex w-full overflow-hidden mb-5 pt-2 '>
        <div className="h-full w-full relativeimage-container">
          <div className="absolute bg-[] top-0 h-full w-full"></div>
          <img
            src="/images/hero-slide-01.webp"
            alt={``}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="hero-text absolute top-0 left-4 md:left-12 w-full md:w-[100%] lg:w-[100%] flex justify-center items-center flex-col h-full z-10 text-container">
          <div className="text-box relative w-full   md:p-8 ">
            <h1 className="text-3xl  md:text-4xl lg:text-4xl font-bold leading-7  md:leading-9 lg:leading-40  lihe text-center text-[#000]">
              PROPERTIES
            </h1>
          </div>
        </div>
      </div>
      <div className="sort-propertie-container">
        <PropertyFilter />
      </div>

      <div className="card-row-container flex gap-4  justify-between flex-wrap p-20">
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
        <CardCol />
      </div>
    </>
  );
};

export default Properties;
