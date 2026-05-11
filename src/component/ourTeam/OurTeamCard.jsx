import React from "react";
import team_1 from "../../assets/team-1.png";
import { MdOutlineShare } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
const OurTeamCard = ({ image, name, title }) => {
  const socialIcons = [
    {
      icon: <FaFacebookF size={14} />,
      link: "#",
    },
    {
      icon: <FaInstagram size={14} />,
      link: "#",
    },
    {
      icon: <FaLinkedinIn size={14} />,
      link: "#",
    },
    {
      icon: <FaPinterestP size={14} />,
      link: "#",
    },
  ];

  return (
    <div className="max-w-[410px]">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="bg-black_900  py-7.5 px-10 flex items-end justify-between">
        <div className="flex flex-col gap-1.25">
          <h3 className="text-white text-[20px] leading-[24px] font-bold  font-inter ">
            {name}
          </h3>
          <p className="text-white text-[16px] leading-[28.8px] font-normal  font-archivo ">
            {title}
          </p>
        </div>
        <div className="group relative">
          <div className="bg-white group-hover:bg-home py-3 px-3.25 ">
            <MdOutlineShare
              size={15}
              className="text-home group-hover:text-white"
            />
          </div>
          <div className="absolute bottom-full left-0 mb-2 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white hover:bg-home p-3 transition-all duration-300 group/icon"
              >
                <span className="text-home group-hover/icon:text-white">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
