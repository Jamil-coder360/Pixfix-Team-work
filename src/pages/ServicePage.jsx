import React from 'react'
import Banner from '../component/section/Banner'
import serviceBanner from "../assets/service_banner.jpg"
import Services from '../component/section/Services'

const Service = () => {
  return (
    <div>
        <Banner
          bgImage={serviceBanner}
          title="SERVICES"
          page="Service"
          link="/service"
        />
        <Services />
    </div>
  )
}


export default Service