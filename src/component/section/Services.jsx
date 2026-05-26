import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowRight } from "lucide-react";

import Service1 from "../../assets/icons/service1.png";
import Service2 from "../../assets/icons/service2.png";
import Service3 from "../../assets/icons/service3.png";
import Service4 from "../../assets/icons/service4.png";
import Service5 from "../../assets/icons/service5.png";
import Service6 from "../../assets/icons/service6.png";
import Service7 from "../../assets/icons/service7.png";
import Service8 from "../../assets/icons/service8.png";

const Services = () => {
  return (
    <Section className="py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          
          <div>
            <p className="font-titillium text-sm sm:text-base text-home mb-2.5">
              Our Services
            </p>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-titillium font-semibold mb-6 md:mb-7 text-[#171717]">
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
            title="Thermostat Replacement"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
            icon={Service7}
          />

          <ServiceCard
            title="Performance Evaluation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur."
            icon={Service8}
          />

        </div>
      </Container>
    </Section>
  );
};

export default Services;

export const TrasparentButton = ({ text }) => {
  return (
    <button className="border border-home flex items-center gap-2 sm:gap-3 cursor-pointer text-[#171717] font-titillium text-sm sm:text-base px-5 py-3 hover:bg-home hover:text-white transition duration-300">
      {text}
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
};

export const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="border border-[#DDDDDD] group transition-all duration-300 hover:border-[#FF5E14] hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
      
      <div className="px-6 sm:px-8 lg:px-10 py-8 lg:py-10 text-center h-full flex flex-col">
        
        <div className="bg-[#F8F8F8] rounded-full flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mx-auto transition-all duration-300">
          <img
            src={icon}
            alt={title}
            className="w-fit transition-all duration-300 group-hover:scale-110"
          />
        </div>

        <h4 className="text-xl sm:text-2xl font-titillium font-bold mt-5 mb-4 text-[#171717] transition-colors duration-300 group-hover:text-[#FF5E14]">
          {title}
        </h4>

        <p className="text-[#6E777D] text-sm sm:text-[15px] font-archivo leading-relaxed">
          {description}
        </p>

      </div>
    </div>
  );
};