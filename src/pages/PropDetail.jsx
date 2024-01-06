import CardCol from "../components/CardCol";
import RealDetail from "../components/RealDetail";
import TopDetail from "../components/TopDetail";

const PropDetail = () => {
  return (
    <div className="detail-prop-container">
      <TopDetail />
      <RealDetail />
      <div className="card-box-all  mt-10 p-10 px-20">
        <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
          Related Properties
        </div>
        <div className="card-row-container flex gap-4  justify-between flex-wrap">
          <CardCol />
          <CardCol />
          <CardCol />
        </div>
      </div>
    </div>
  );
};

export default PropDetail;
