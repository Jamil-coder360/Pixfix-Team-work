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
          page="About Us"
          title="ABOUT US"
          link="/about"
        />
        <AboutUs />
        <Achivement />
        <Skills />
        <WorkProcess />
    </div>
  )
}

export default AboutPage