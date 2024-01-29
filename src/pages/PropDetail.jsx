import { useEffect, useState } from "react";
import CardCol from "../components/CardCol";
import RealDetail from "../components/RealDetail";
import TopDetail from "../components/TopDetail";
import { getPropById } from "../../Apis/ListProp";
import { useSearchParams } from "react-router-dom";

const PropDetail = () => {
  const [searchParams] = useSearchParams();
  const propId = searchParams.get("id");
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const data = await getPropById(propId);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (propId) {
      fetchPropData();
    }
  }, [propId]);
  // console.log(propId);
  if (!getData) {
    return <div></div>; // Add a loading state or spinner here
  }

  const combinedImages = [getData.cover_image, ...getData.rest_images];
  // console.log(combinedImages);
  return (
    <div className="detail-prop-container">
      <TopDetail combinedImages={combinedImages} />
      <RealDetail getData={getData} />
      <div className="card-box-all  mt-10 p-10 px-20">
        <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
          Related Properties
        </div>
        {/* <div className="card-row-container flex gap-4  justify-between flex-wrap">
          <CardCol />
          <CardCol />
          <CardCol />
        </div> */}
      </div>
    </div>
  );
};

export default PropDetail;
