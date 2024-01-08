import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const BlogCard = () => {
  const data = [
    {
      title: " What is happening today",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",
      time: "20 minutes ago",
    },
    {
      title: "How to get good apartment",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "7 hours ago",
    },
    {
      title: "About EzclickStay ",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "1 days ago",
    },
    {
      title: "Different between Dorm and Cabin",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "2 weeks ago",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="card-blog-box flex flex-row items-center w-[48%] h-[300px] bg-[#5f4c76] border border-[#5f4c76] rounded-lg shadow "
        >
          <img
            className="im-blog object-cover rounded-t-lg h-[100%] w-[48%] md:rounded-none md:rounded-s-lg"
            src="/images/hero-slide-01.webp"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <Link to={"/blog-det"}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white txt-head">
                {item.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-200">{item.bdy}</p>
            <div className="tim mt-10 flex justify-end text-white items-center gap-1 ">
              <IoMdTime className="text-[20px]" />
              {item.time}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
