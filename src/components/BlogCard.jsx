import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="card-blog-box flex flex-row items-center w-[48%] h-[300px] bg-[#5f4c76] border border-[#5f4c76] rounded-lg shadow ">
      <img
        className="im-blog object-cover  rounded-t-lg h-[100%] w-[48%] md:rounded-none md:rounded-s-lg"
        src="/images/hero-slide-01.webp"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Link to={"/blog-det"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white txt-head">
            What is happening today
          </h5>
        </Link>

        <p className="mb-3 font-normal text-gray-200">
          Here are the biggest enterprise technology acquisitions of 2025 so
          far, in reverse chronological order.
        </p>
        <div className="tim mt-10 flex justify-end text-white items-center gap-1 ">
          {" "}
          <IoMdTime className="text-[20px]" />2 weeks ago
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
