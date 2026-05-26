import React from 'react'
import Banner from '../component/section/Banner'
import aboutBanner from "../assets/about_banner.jpg"
import AboutUs from '../component/section/AboutUs'
import Achivement from '../component/section/Achivement'
import Skills from '../component/section/Skills'
import WorkProcess from '../component/section/WorkProcess'

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
        <WorkProcess />
    </div>
  )
}

export default AboutPage