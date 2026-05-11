import React from "react";
import Pricing_1 from "../icon/Pricing_1";

const PricingCard = ({
  icon = <Pricing_1 />,
  title = "Starter Plan",
  price = "$19",
  period = "/mo",
  description = "Repair is a specialized field that focuses fixing and restoring objects or systems",
  features = [
    "Repairing your problems",
    "Quality repair services you can count on",
    "Repairing with care, exceeding",
    "Trust us with your repair needs",
  ],
}) => {
  return (
    <div className="group  bg-white  overflow-hidden border border-gray-200 shadow-sm max-w-[410px]">
      {/* Title */}
      <div className="px-6 pt-6 pb-4">
        <h5 className="text-[30px] leading-9 font-bold text-black_900 tracking-tight">
          {title}
        </h5>
      </div>

      {/* Price banner */}
      <div className="group-hover:bg-home bg-black flex items-center justify-between px-6 py-4">
        {/* Icon on the banner */}
        <div className="text-home group-hover:text-white opacity-80">
          {icon}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-white">{price}</span>
          <span className="text-sm text-gray-400">{period}</span>
        </div>

      </div>

      {/* Body */}
      <div className="px-6 pt-5">
        <p className="text-[16px] leading-normal font-normal font-archivo text-black_800 mb-5">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[16px] leading-normal font-normal font-archivo text-black_800 ">
              <span className="text-black_900 group-hover:text-orange-500 font-bold text-base">»</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6">
        <button className="w-full py-3.5 border border-gray-300 rounded-lg text-sm font-bold tracking-widest text-gray-800 group-hover:text-home  hover:border-orange-500 transition-all duration-200 flex items-center justify-center gap-2">
          GET NOW <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;