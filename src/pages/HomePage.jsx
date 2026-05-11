import React from 'react'
import Hero from '../component/Hero';
import About from '../component/About';
import Service from '../component/service/Service';
import OurGoals from '../component/goal/OurGoals';
import Pricing from '../component/pricing/Pricing';
import Testimonial from "../component/testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <Service />
    <OurGoals />
    <Testimonial />
    <Pricing />
    </>
  )
}

export default HomePage