import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Service_1 from "../icon/Service_1";
import services_1 from "../../assets/service-1.png"
import Service_2 from "../icon/Service_2";
const ServiceCard = ({
  icon = <Service_1 />,
  heading ="Rapid Repair Garage",
  text = "Customer satisfaction is crucial for amohlodi business as it leads to customer",
  image
}) => {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-7.5 max-w-full md:max-w-[410px] border border-black_800 group">
      <div className=" group-hover:text-home text-[#171717] pt-7 lg:pt-13.75">
        {icon}
      </div>

      <h3 className="font-bold text-[24px] leading-normal text-black_900 tracking-[-0.72px]">{heading}</h3>
      <p className="text-center max-w-[330px] font-archivo font-normal text-[16px] leading-normal text-black_800">{text}</p>

      <Link className="text-black flex items-center gap-2">
        Read More <ArrowRight size={18} className=" group-hover:text-home" />
      </Link>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;