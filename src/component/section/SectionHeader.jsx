import React from "react";

const SectionHeader = ({ title, subtitle,className="" }) => {
  return (
    <div className={className}>
      <p className="text-home font-normal text-[16px]">{subtitle}</p>
      <h2 className="max-w-[630px] font-semibold text-[48px] leading-[58px]  text-black_900 tracking-[-1.44px] pt-2.5 pb-5">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
