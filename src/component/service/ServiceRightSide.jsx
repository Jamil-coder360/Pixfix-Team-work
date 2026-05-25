import React from 'react'
import detail from "../../assets/detail.jpg";
import DetailCard from './DetailCard';
import ServiceTitle from './ServiceTitle';

const ServiceRightSide = () => {
  return (
    <div>
      <div className="w-full h-[381px] pb-7.5">
        <img src={detail} alt="" className="w-full h-full" />
      </div>

      <ServiceTitle />
      <DetailCard />

      <ServiceTitle className="pt-15" />

      <video
        className="w-full rounded-xl"
        controls
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.pexels.com/download/video/33129205/"
          type="video/mp4"
        />
      </video>
      <ServiceTitle  className="pt-7.5"/>

    </div>
  )
}

export default ServiceRightSide