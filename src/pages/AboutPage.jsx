import React from 'react'
import Banner from '../component/section/Banner'
import aboutBanner from "../assets/about_banner.jpg"
import AboutUs from '../component/section/AboutUs'

const AboutPage = () => {
  return (
    <div>
        <Banner 
          bgImage={aboutBanner}
          title="About Us"
          page="ABOUT US"
        />
        <AboutUs />
    </div>
  )
}

export default AboutPage