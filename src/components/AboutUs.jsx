import { useNavigate } from "react-router-dom";
import ab from "../assets/images/ab.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const gotoSign = () => {
    navigate("register");
  };
  const gotoblog = () => {
    navigate("/all-blog");
  };
  return (
    <div className="about-us-container flex gap-5 p-20 items-center">
      <div className="left-about-box">
        <img src={ab} alt="" />
      </div>
      <div className="right-about-box">
        <div className="abot-head text-[25px] font-bold text-gray-700">
          ABOUT EZ CLICK STAY
        </div>
        <div className="about-body mt-7 text-gray-700">
          EZ CLICK STAY is committed to delivering a high level of expertise,
          customer service, and attention to detail to the market of
          accommodation booking .
        </div>
        <div className="about-btn-box flex gap-5 my-8">
          <button
            className="about-btn w-[110px] hover:bg-[#fff] hover:text-[#fe598d] bg-[#fe598d] rounded text-[#fff] h-[35px]"
            onClick={gotoSign}
          >
            Join Us
          </button>
          <button
            className="about-btn w-[110px] rounded bg-[#fff] text-[#fe598d] h-[35px] hover:bg-[#fe598d] hover:text-[#fff]"
            onClick={gotoblog}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
