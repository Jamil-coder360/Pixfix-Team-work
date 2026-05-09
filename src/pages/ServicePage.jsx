import React from 'react'
import Banner from '../component/section/Banner'
import serviceBanner from "../assets/service_banner.jpg"

const Service = () => {
  return (
    <div>
        <Banner
          bgImage={serviceBanner}
          title="Service"
          page="SERVICES"
        />
    </div>
  )
}


export default Service