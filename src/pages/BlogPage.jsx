import React from "react";
import Container from "../component/section/Container";
import { ChevronRight } from "lucide-react";
import MachanicBg from "../assets/MachanicBg.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import Admin from "../component/icon/Admin";
import Calender from "../component/icon/Calender";
import Comment from "../component/icon/Comment";
import { Category, Search } from "../component/icon";
import Right from "../component/icon/Right";
import blogThumbnail from "../assets/Blog_card.jpg";
const BlogPage = () => {
  return (
    <section>
      <div
        className="bg-cover mb-30"
        style={{ backgroundImage: `url(${MachanicBg})` }}
      >
        <Container>
          <div className=" py-12 md:py-20 lg:py-45 px-4 md:px-0">
            <h1 className="tracking-[-1.8px] text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[56px] lg:leading-[70px] font-bold text-white pb-3 md:pb-5">
              BLOG
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
                BLOG
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
            <ReadMore
              img={blog2}
              title="Shape your future with education Quality repair services you can count on"
              description="Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Rep services are  maintaining the longevity of various  infrastructure "
            />
            <ReadMore
              img={blog3}
              title="Don't Drown in Problems, Call Us – Your Plumbing Heroes are here"
              description="Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Rep services are  maintaining the longevity of various  infrastructure "
            />
            <ReadMore
              img={blog4}
              title="Flowing Excellence, Dripping Perfection Your Plumbers of Choice"
              description="Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Rep services are  maintaining the longevity of various  infrastructure "
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

                  <button className=" text-sm"><Search /></button>
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
                        <img src={blogThumbnail} className="w-[82px] h-[112px] " alt="" />
                      </div>

                      {/* Content */}
                      <div className="bg-[#F8F8F8] h-full px-2.5 py-6 ">
                        <h3 className="text-[15px] font-titillium font-bold uppercase leading-4 text-[#1b1b1b] mb-2">
                          A Picture Is Worth Standard And Stand Us Return
                        </h3>

                        <div className="flex items-center gap-3 text-[11px] text-gray-500">
                          <span><Admin /></span>
                          <span>By Admin</span>

                          <span><Category /></span>
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

export const ReadMore = ({ img, title, description }) => {
  return (
    <div className=" shadow-md w-[850px] h-[809px] relative">
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

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold text-sm px-8 py-4 flex items-center gap-3">
          READ MORE
          <span>
            <ChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
