import { useNavigate } from "react-router-dom";
import CardCol from "./CardCol";
import { useEffect, useState } from "react";
import { getPropertiesSix } from "../../Apis/ListProp";

const HomeCard = () => {
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState(null);

  const gotoProp = () => {
    navigate("properties");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertiesSix();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(propertyData);
  return (
    <div className="card-box-all  mt-10 p-10 px-20">
      <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
        Featured Listing
      </div>
      <div className="card-row-container flex gap-4  justify-between flex-wrap">
        {propertyData &&
          propertyData.map((property) => (
            <CardCol key={property._id} property={property} />
          ))}
      </div>
      <div className="btn-cont flex justify-center my-5">
        <div
          className="inline-flex justify-center items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-[#fe598d] rounded-lg hover:bg-[#fff] hover:border hover:border-[#fe598d] hover:text-[#fe598d]  w-[150px] "
          onClick={gotoProp}
        >
          View more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
