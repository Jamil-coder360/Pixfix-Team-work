import React from 'react'
import Section from './Section';
import Container from './Container';
import { ChevronRight } from 'lucide-react';

const PageHead = () => {
  return (
    <Section className="bg-black_900">
        <Container>

                <div className="bg-black_900 py-12 md:py-20 lg:py-45 px-4 md:px-0">
                    <h1 className="tracking-[-1.8px] text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[56px] lg:leading-[70px] font-bold text-white pb-3 md:pb-5">Pricing</h1>
                    <div className="flex gap-3 md:gap-4.75">
                        <a href="/" className="text-white font-bold text-[13px] md:text-[15px] leading-[16px] md:leading-[18px]">home</a> 
                        <ChevronRight className="text-home" size={16} />
                        <a href="#" className="text-white font-bold text-[13px] md:text-[15px] leading-[16px] md:leading-[18px]">Pricing</a> 
                       
                    </div>
                

                </div>
        </Container>
            
        </Section>
  )
}

export default PageHead