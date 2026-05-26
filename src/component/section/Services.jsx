import React from 'react'
import Section from './Section'
import Container from './Container'
import { ArrowRight } from "lucide-react";
import Service1 from "../../assets/icons/service1.png"
import Service2 from "../../assets/icons/service2.png"
import Service3 from "../../assets/icons/service3.png"
import Service4 from "../../assets/icons/service4.png"
import Service5 from "../../assets/icons/service5.png"
import Service6 from "../../assets/icons/service6.png"
import Service7 from "../../assets/icons/service7.png"
import Service8 from "../../assets/icons/service8.png"

const Services = () => {
  return (
    <Section className='my-30'>
        <Container>
            <div>
                <div className='grid grid-cols-3 gap-8'>
                    <div>
                        <p className='font-titillium text-[16px] text-home mb-2.5'>Our Services</p>
                        <h3 className='text-5xl font-titillium font-semibold mb-7.5 text-[#171717]'>
                            When it comes to AC repair we've got you covered
                        </h3>
                        <TrasparentButton text="Learn More" />
                    </div>
                    <ServiceCard
                        title="Air Quality Testing"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service1}
                    />
                    <ServiceCard
                        title="Ductwork Repair"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service2}
                    />
                    <ServiceCard
                        title="Electrical Check"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service3}
                    />
                    <ServiceCard
                        title="Thermostat Replacement"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service4}
                    />
                    <ServiceCard
                        title="Performance Evaluation"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service5}
                    />
                    <ServiceCard
                        title="Electrical Check"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service6}
                    />
                    <ServiceCard
                        title="Thermostat Replacementr"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service7}
                    />
                    <ServiceCard
                        title="Performance Evaluation"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
                        icon={Service8}
                    />
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default Services

export const TrasparentButton = ({text}) => {
    return (
        <button className='border flex items-center gap-3 border-home cursor-pointer text-[#171717] font-titillium text-[16px] px-5 py-2.5 hover:bg-home hover:text-white transition duration-300'>
            {text}
            <ArrowRight className="text-black hover:text-white" />
        </button>
    )
}

export const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="border border-[#DDDDDD] group transition-all duration-300 hover:border-[#FF5E14] hover:shadow-xl hover:-translate-y-2 cursor-pointer">
      <div className="px-10 pt-7.5 pb-10 mx-auto text-center">
        <div className="bg-[#F8F8F8] rounded-full items-center justify-center w-16 h-16 flex mx-auto transition-all duration-300">
          <img
            src={icon}
            alt={title}
            className="w-fit transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <h4 className="text-2xl font-titillium font-bold mt-3.75 mb-5 text-[#171717] transition-colors duration-300 group-hover:text-[#FF5E14]">
          {title}
        </h4>
        <p className="text-[#6E777D] text-[15px] font-archivo leading-[28.8px]">
          {description}
        </p>
      </div>
    </div>
  );
};