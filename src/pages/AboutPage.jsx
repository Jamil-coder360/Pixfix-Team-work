import React from 'react'
import Banner from '../component/section/Banner'
import aboutBanner from "../assets/about_banner.jpg"
import AboutUs from '../component/section/AboutUs'
import Achivement from '../component/section/Achivement'
import Skills from '../component/section/Skills'

const AboutPage = () => {
  return (
    <div>
        <Banner 
          bgImage={aboutBanner}
          title="About Us"
          page="ABOUT US"
        />
        <AboutUs />
        <Achivement />
        <Skills />
    </div>
  )
}

export default AboutPage