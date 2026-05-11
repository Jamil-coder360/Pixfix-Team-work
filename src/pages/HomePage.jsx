import React from 'react'
import Hero from '../component/Hero';
import About from '../component/About';
import Service from '../component/service/Service';
import OurGoals from '../component/goal/OurGoals';
import Pricing from '../component/pricing/Pricing';

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <Service />
    <OurGoals />
    <Pricing />
    </>
  )
}

export default HomePage