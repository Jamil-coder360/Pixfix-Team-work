import React from 'react'
import Section from './Section';
import Container from './Container';
import { ChevronRight } from 'lucide-react';

const PageHead = () => {
  return (
    <Section className="bg-black_900">
        <Container>

                <div className="bg-black_900 py-45">
                    <h1 className="tracking-[-1.8px] text-[60px] leading-[70px] font-bold text-white pb-5">Pricing</h1>
                    <div className="flex gap-4.75">
                        <a href="/" className=" text-white  font-bold text-[15px] leading-[18px]">home</a> 
                        <ChevronRight  className=" text-home"/>
                        <a href="#" className=" text-white  font-bold text-[15px] leading-[18px]">Pricing</a> 
                       
                    </div>
                

                </div>
        </Container>
            
        </Section>
  )
}

export default PageHead