import React from 'react'
import Banner from '../component/section/Banner'
import aboutBanner from "../assets/about_banner.jpg"

const AboutPage = () => {
  return (
    <div>
        <Banner 
          bgImage={aboutBanner}
          title="About Us"
          page="ABOUT US"
        />
    </div>
  )
}

export default AboutPage