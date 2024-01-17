import CardCol from "../components/CardCol";
import "../assets/css/property.css";
import PropertyFilter from "../components/PropertyFilter";
import { useEffect, useState } from "react";
import { getAllProperties } from "../../Apis/ListProp";
import { useSearchParams } from "react-router-dom";
const Properties = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [searchParams] = useSearchParams();
  const location = searchParams.get("l");
  const checkIn = searchParams.get("n");
  const checkOut = searchParams.get("o");
  const guest = searchParams.get("g");

  const [locationText, setLocationText] = useState(location);
  const [checkInText, setCheckInText] = useState(checkIn);
  const [checkOutText, setCheckOutText] = useState(checkOut);
  const [guestText, setGuestText] = useState(guest);
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedBed, setSelectedBed] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [priceFrom, setpriceFrom] = useState("");
  const [priceTo, setpriceTo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProperties();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(priceFrom);
  let filteredProperties = propertyData;

  if (locationText) {
    const locationLower = locationText.toLowerCase();
    filteredProperties = filteredProperties?.filter(
      (property) =>
        property.country.toLowerCase().includes(locationLower) ||
        property.state.toLowerCase().includes(locationLower) ||
        property.city.toLowerCase().includes(locationLower) ||
        property.county.toLowerCase().includes(locationLower) ||
        property.area.toLowerCase().includes(locationLower)
    );
  }

  if (guestText) {
    const guestNumber = parseInt(guestText, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.guest_no >= guestNumber
    );
  }
  if (selectedBath) {
    const bathNumber = parseInt(selectedBath, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.bathrooms >= bathNumber
    );
  }
  if (selectedBed) {
    const bedNumber = parseInt(selectedBed, 10);
    filteredProperties = filteredProperties?.filter(
      (property) => property.bedrooms >= bedNumber
    );
  }
  if (selectedType) {
    const sCate = selectedType?.toLowerCase();
    filteredProperties = filteredProperties?.filter((property) =>
      property.category.toLowerCase().includes(sCate)
    );
  }
  if (selectedSize) {
    const sType = selectedSize?.toLowerCase();
    filteredProperties = filteredProperties?.filter((property) =>
      property.room_type.toLowerCase().includes(sType)
    );
  }

  if (priceFrom && priceTo) {
    const priceFromValue = parseFloat(priceFrom);
    const priceToValue = parseFloat(priceTo);
    filteredProperties = filteredProperties?.filter(
      (property) =>
        Number(property.price_per_night) >= priceFromValue &&
        Number(property.price_per_night) <= priceToValue
    );
  }
  // if (guestText) {
  //   const guestNumber = parseInt(guestText, 10);
  //   filteredProperties = filteredProperties.filter(
  //     (property) => property.guest_no >= guestNumber
  //   );
  // }
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
        <PropertyFilter
          locationText={locationText}
          setLocationText={setLocationText}
          checkInText={checkInText}
          setCheckInText={setCheckInText}
          checkOutText={checkOutText}
          setCheckOutText={setCheckOutText}
          guestText={guestText}
          setGuestText={setGuestText}
          setSelectedBath={setSelectedBath}
          selectedBath={selectedBath}
          selectedBed={selectedBed}
          setSelectedBed={setSelectedBed}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          priceFrom={priceFrom}
          setpriceFrom={setpriceFrom}
          priceTo={priceTo}
          setpriceTo={setpriceTo}
        />
      </div>

      <div className="card-row-container flex gap-10 justify-between  flex-wrap p-20">
        {filteredProperties?.length > 0 ? (
          filteredProperties?.map((property) => (
            <CardCol key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </>
  );
};

export default Properties;
