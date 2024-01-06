import BlogCard from "../components/BlogCard";

const BlogDetail = () => {
  return (
    <div className="blog-detail-container p-20 px-40">
      <h1 className="blog-title font-bold text-[40px] text-center">
        What is happening today
      </h1>
      <div className="image-bx">
        <img
          src="/images/hero-slide-03.webp"
          alt=""
          className="rounded-[20px] my-10"
        />
      </div>
      <div className="body-text text-[20px]">
        <h1 className="text-[28px] text-[#4e4d4d] font-bold ml-5 mb-5">
          Offering a Full Welcoming Space
        </h1>
        <div className="date-txt text-[#4e4d4d]  ml-5 mb-10">
          Published on April 21, 2015 by admin{" "}
        </div>
        Exceptional hospitality can come through in a lot of ways, but it most
        definitely starts with a clean space. And while cleaning might not be
        the most fun part of hosting, it doesn’t have to be difficult! Here are
        a few tips and tricks to help you get swept up in an effective and easy
        cleaning routine.
        <h2 className="font-bold my-10 text-[#4e4d4d]">
          Focus on the trouble spots First things first:
        </h2>
        Give extra attention to the most important areas of cleanliness. Those
        would be the kitchen and the bathrooms. If you offer your guests space
        in the refrigerator, give it a thorough cleaning. And if you make a
        point to keep all of the condiments and other items nicely organized,
        your guest will be encouraged do the same.{" "}
        <h2 className="font-bold my-10 text-[#4e4d4d]">
          Make room for your guests
        </h2>
        things We certainly love our tchotchkes, but too much of a good thing
        may look like clutter to a visitor. In addition to keeping your space
        clean, it’s important to keep it tidy. Your guests may not want to live
        out of their suitcase for their whole stay, so you can offer them space
        to put out their toiletries and personal items on a shelf or nightstand.
        You can also offer your guests room for their clothes and larger items
        in a closet or dresser.{" "}
        <h2 className="font-bold my-10 text-[#4e4d4d]">
          Pay attention to details
        </h2>{" "}
        Once you’ve gotten your space clean and ready for your next guest, check
        the details: Look for stray hairs on the couch Clean off dust on the
        edges of shelves, picture frames, and doorways Wipe down all the
        surfaces of fixtures and appliances Check the kitchen counter for crumbs
        Sweep or vacuum under the furniture
      </div>
      <div className="py-20">
        <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
          Related Blog
        </div>
        <div className="py-10 w-full flex justify-between flex-wrap gap-5 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>{" "}
      </div>
    </div>
  );
};

export default BlogDetail;
