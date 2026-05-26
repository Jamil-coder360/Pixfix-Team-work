import React from "react";
import MachanicBg from "../assets/MachanicBg.jpg";
import Container from "../component/section/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Right from "../component/icon/Right";
import coma from "../assets/coma.svg";
import blog1 from "../assets/blog1.jpg";
import { Search, Admin, Category, Calender, Comment } from "../component/icon";
import blogThumbnail from "../assets/Blog_card.jpg";
const BlogDetailsPage = () => {
  return (
    <section className="">
      <div
        className="bg-cover mb-30"
        style={{ backgroundImage: `url(${MachanicBg})` }}
      >
        <Container>
          <div className=" py-12 md:py-20 lg:py-45 px-4 md:px-0">
            <h1 className="tracking-[-1.8px] text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[56px] lg:leading-[70px] font-bold text-white pb-3 md:pb-5">
              Blog_Details
            </h1>
            <div className="flex gap-3 md:gap-4.75">
              <a
                href="/"
                className="text-white font-bold text-[13px] md:text-[15px] leading-[16px] md:leading-[18px]"
              >
                HOME
              </a>
              <ChevronRight className="text-home" size={16} />
              <a
                href="/blog"
                className="text-white font-bold text-[13px] md:text-[15px] leading-[16px] md:leading-[18px]"
              >
                Blog_Details
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex gap-8 mb-10">
          <div className="flex flex-col gap-15">
            <ReadMore
              img={blog1}
              title="Pipe Dreams, Real Solutions Your Trusted Plumbers worker"
              description="Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition..."
            />
          </div>
          <div>
            <div className="w-[410px] space-y-8">
              {/* Search Box */}
              <div className="shadow-md p-10">
                <h2 className="text-[30px] leading-9 font-titillium font-bold text-[#1b1b1b] mb-6">
                  Search
                </h2>

                <div className="flex items-center border-b-2 border-[#DDDDDD] pb-3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent outline-none text-sm text-gray-500"
                  />

                  <button className=" text-sm">
                    <Search />
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="shadow-md p-10">
                <h2 className="text-[30px] leading-9 font-titillium font-bold text-[#171717] mb-7.5">
                  Category
                </h2>

                <ul className="space-y-4">
                  {[
                    "Repair Genius",
                    "Ultimate Repair",
                    "Perfect Restore",
                    "Trusty Repairs",
                    "Expert Fixers",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[#6E777D] text-sm border-b-1 border-[#DDDDDD] pb-4"
                    >
                      <span className="">
                        <Right />
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Post */}
              <div className="shadow-md p-10">
                <h2 className="text-[30px] leading-9 font-titillium font-bold text-[#171717] mb-7.5">
                  Recent Post
                </h2>

                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex h-[112px] ">
                      {/* Thumbnail */}
                      <div className="w-[82px] h-full ">
                        <img
                          src={blogThumbnail}
                          className="w-[82px] h-[112px] "
                          alt=""
                        />
                      </div>

                      {/* Content */}
                      <div className="bg-[#F8F8F8] h-full px-2.5 py-6 ">
                        <h3 className="text-[15px] font-titillium font-bold uppercase leading-4 text-[#1b1b1b] mb-2">
                          A Picture Is Worth Standard And Stand Us Return
                        </h3>

                        <div className="flex items-center gap-3 text-[11px] text-gray-500">
                          <span>
                            <Admin />
                          </span>
                          <span>By Admin</span>

                          <span>
                            <Category />
                          </span>
                          <span>Category</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="shadow-md p-6">
                <h2 className="text-[28px] font-bold text-[#1b1b1b] mb-6">
                  Tags
                </h2>

                <div className="flex flex-wrap gap-3">
                  {[
                    "All Project",
                    "FixIt Now",
                    "RepairGenius",
                    "FixMaster",
                    "RapidRepair",
                    "RestorePro",
                  ].map((tag, index) => (
                    <button
                      key={index}
                      className="border border-gray-300 px-3 py-2 text-[11px] text-gray-500 hover:bg-orange-500 hover:text-white transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
const ReadMore = ({ img, title, description }) => {
  return (
    <div className=" shadow-md w-[850px] h-full relative">
      {/* Image */}
      <div className="relative h-[421px] ">
        <div className=" ">
          <img
            src={img}
            alt="Blog Image"
            className=" w-[850px] h-[421px] relative"
          />
          {/* Info Box */}
          <div className="absolute -bottom-6 right-0 bg-[#111111] text-white flex items-center gap-6 px-6 py-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-orange-500">
                {" "}
                <Admin />{" "}
              </span>
              <span>By admin</span>
            </div>

            <div className="  flex items-center gap-2 text-sm">
              <span className="text-orange-500">
                {" "}
                <Comment />{" "}
              </span>
              <span>Comments (05)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-10  pt-5  pb-10 relative ">
        {/* Date */}
        <div className="flex items-center gap-2 text-[#6E777D] mb-5">
          <span className="text-orange-500">
            {" "}
            <Calender />{" "}
          </span>
          <span className=" font-archivo text-[16px] ">October 19, 2023</span>
        </div>

        {/* Title */}
        <h2 className="text-[36px] md:text-[24px] font-bold leading-9 font-titillium text-[#171717] mb-10">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#6E777D] leading-8 text-[15px] mb-8 max-w-[770px]">
          {description}
        </p>

      
        {/* Top Features */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="">
              <Right />
            </span>
            <p className="text-gray-600 text-[15px]">
              Restoring functionality, one repair at a time
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className=" ">
              <Right />
            </span>
            <p className="text-gray-600 text-[15px]">
              Restoration experts at your service
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="">
              <Right />
            </span>
            <p className="text-gray-600 text-[15px]">
              Reliable repairs for a seamless experience
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="">
              <Right />
            </span>
            <p className="text-gray-600 text-[15px]">
              Bringing back the functionality you need
            </p>
          </div>
        </div>
      </div>
      {/* Testimonial Card */}
      <div className="bg-[#F8F8F8] border-b-2 border-[#FF6600] p-10 relative mb-5">
        <div className="absolute right-10 top-10 ">
          <img src={coma} alt="" />
        </div>
        <h2 className="text-[34px] font-bold text-black mb-2">Haque Sami</h2>
        <p className="text-gray-500 mb-8">Assistant Manager</p>
        <p className="text-gray-500 leading-8 mb-8">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled lorem Ipsum.
        </p>
      </div>
      <p className="text-gray-500 leading-8 mb-10">
        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
        posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet
        augue mattis fermentum ullamcorper viverra laoreet Aliquam erosjusto,
        posuere loborti viverra laoreet matti ullamcorper posuere viverra
      </p>
      {/* Content Section */}
      <div className="grid lg:grid-cols-2 items-center gap-10 mb-16">
        {/* Image */}
        <div className="w-full h-[320px] bg-gray-300" />
        {/* List */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-orange-500">✔</span>
            <p className="uppercase font-semibold text-[14px]">
              Bringing back the functionality you
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500">✔</span>
            <p className="uppercase font-semibold text-[14px]">
              Reliable repairs for a seamless experience
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500">✔</span>
            <p className="uppercase font-semibold text-[14px]">
              Repairing with care, exceeding expectations
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500">✔</span>
            <p className="uppercase font-semibold text-[14px]">
              Repair made easy, hassle-free solutions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500">✔</span>
            <p className="uppercase font-semibold text-[14px]">
              Trust us with your repair needs
            </p>
          </div>
        </div>
      </div>
      {/* Description */}
      <p className="text-gray-500 leading-8 mb-14">
        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
        posuere viverra. Aliquam eros justo, posuere lobortis, viverra laoreet
        augue mattis fermentum ullamcorper viverra laoreet Aliquam erosjusto,
        posuere loborti viverra laoreet matti ullamcorper posuere viverra
      </p>
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-4 mb-14">
        <h3 className="text-[28px] font-bold">Tags:</h3>
        <button className="border border-gray-300 px-5 py-2 text-gray-500 hover:bg-orange-500 hover:text-white duration-300">
          All Project
        </button>
        <button className="border border-gray-300 px-5 py-2 text-gray-500 hover:bg-orange-500 hover:text-white duration-300">
          RepairGenius
        </button>
        <button className="border border-gray-300 px-5 py-2 text-gray-500 hover:bg-orange-500 hover:text-white duration-300">
          ProRestorers
        </button>
      </div>
      {/* Post Navigation */}
      <div className="border-y border-gray-200 py-6 flex items-center justify-between mb-20">
        <button className="flex items-center gap-2 text-[14px] font-semibold uppercase">
          <ChevronLeft /> Previous Post
        </button>
        <div className="flex items-center gap-5 text-[18px]">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-pinterest-p" />
        </div>
        <button className="flex items-center gap-2 text-[14px] font-semibold uppercase">
          Next Post <ChevronRight />
        </button>
      </div>
      {/* Comment Form */}
      <div>
        <h2 className="text-[42px] font-bold mb-10">Write Your Comment</h2>
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-300 outline-none py-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b border-gray-300 outline-none py-4"
            />
          </div>
          <textarea
            placeholder="Write your Message here"
            className="w-full h-[120px] border-b border-gray-300 outline-none resize-none pt-4"
            defaultValue={""}
          />
          <button className="bg-orange-500 w-full hover:bg-orange-600 text-white uppercase font-semibold px-10 py-5 duration-300">
            Post Comment
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
};
export default BlogDetailsPage;
