import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  className = "",
  dark = true,
}) => {
  return (
    <div className={className}>
      <p className="text-home font-normal text-[14px] md:text-[15px] lg:text-[16px]">
        {subtitle}
      </p>

      <h2
        className={`max-w-full md:max-w-[550px] lg:max-w-[630px] font-semibold text-[24px] md:text-[32px] lg:text-[48px] md:leading-[40px] lg:leading-[58px] tracking-[-1.44px] pt-2 md:pt-2.5 pb-4 md:pb-5 ${
          dark ? "text-black_900" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;