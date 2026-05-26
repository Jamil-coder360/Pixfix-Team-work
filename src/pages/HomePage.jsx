import React from 'react'
import Hero from '../component/Hero';
import About from '../component/About';
import Service from '../component/service/Service';
import OurGoals from '../component/goal/OurGoals';
import Pricing from '../component/pricing/Pricing';
import Testimonial from "../component/testimonial/Testimonial";
import OurTeam from '../component/ourTeam/OurTeam';
import BookingSection from '../component/message/BookingSection';


const HomePage = () => {
  return (
    <>
    
    <Hero />
    <About />
    <Service />
    <OurGoals />
    <OurTeam />
    <Testimonial />
    <BookingSection />
    <Pricing />
   
    </>
  )
}

export default HomePage