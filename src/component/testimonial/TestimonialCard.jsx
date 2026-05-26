import React from "react";
import qourt from "../../assets/qourt.svg";
import star from "../../assets/star.svg";
const TestimonialCard = () => {
  return (
    <div className="w-full lg:max-w-[620px] bg-white shadow-xl p-10 overflow-x-hidden">
      <div className="flex items-center justify-between">
        <span className="bg-black_800 h-25 border border-[#000000] w-25 rounded-full"></span>
        <div>
          <img src={qourt} alt="" />
        </div>
      </div>
      <h3 className="tracking-[-0.72px] font-bold text-2xl text-black_900 pt-2.5">Cameron Williamson</h3>
      <div className="py-5">
        <img src={star} alt="" />
      </div>
      <p className="font-normal font-archivo text-[20px] leading-7 text-black_800 pb-10 ">
        Medical is a field that deals with the study, diagnosis treatment
        diseases and injuries. It encompasses various branches such as
        cardiolog,the a neurology orthopedics, and more professionals work
        diligently
      </p>
    </div>
  );
};

export default TestimonialCard;
