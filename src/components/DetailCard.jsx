import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const DetailCard = () => {
  const data = [
    {
      title: "Price Details",
      nit: "$500",
      mot: "#250",
      tax: "$100",
      week: "$300",
      cln: "$150",
    },
    {
      title: "Address",
      add: "Ridge Street",
      cty: "New York",
      County: "New York County",
      State: "NY",
      Postcode: "10007",
      Country: "United States",
    },
    {
      title: "Features",
      id: "137",
      rooms: "5",
      bathrooms: "2",
      extra: "1 extra bed for $40/night.",
      optional: "kitchen fully equipped.",
      size: "2,500 ft2",
      late: "3",
      outdoor: "restaurants and bars.",
      cancellation: "free of charge.",
    },
    {
      title: "More Features",
      nit: "Kitchen",
      mot: "Heating",
      tax: "$100",
      week: "$300",
      cln: "$150",
    },
  ];
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
          Price Details
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
          <p className="mb-3 font-normal text-black">Price per night: $ 500</p>
          <p className="mb-3 font-normal text-black">
            Price per night (30d+): $ 250
          </p>
          <p className="mb-3 font-normal text-black">
            City Tax Fee: $ 100 Single Fee
          </p>
          <p className="mb-3 font-normal text-black">
            Price per night (7d+): $ 300
          </p>
          <p className="mb-3 font-normal text-black">
            Cleaning Fee: $ 150 Single Fee
          </p>
        </>
      )}
    </div>
  );
};

export default DetailCard;
