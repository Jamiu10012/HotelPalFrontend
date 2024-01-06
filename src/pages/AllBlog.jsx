import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import "../assets/css/blog.css";
const AllBlog = () => {
  return (
    <div clasName=" ">
      <div className="flex justify-end px-20 py-10 all-blog-container">
        <div className="search-blog-box w-[500px] flex items-center h-[40px] border rounded pl-5 justify-between  border-[#fe598d] mb-10">
          <input
            type="text"
            placeholder="Seearch here"
            className="w-[90%] outline-none"
          />
          <FaSearch className=" text-[#fff] bg-[#fe598d] w-[80px] h-full p-1 cursor-pointer" />
        </div>
      </div>
      <div className="blog-row px-20 all-blog-container mb-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      {/* <div className="flex">
        <div className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </div>
        <div className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default AllBlog;
