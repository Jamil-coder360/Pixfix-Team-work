import React from "react";
import hero from "../assets/hero.png";
import Section from "./section/Section";
import Container from "./section/Container";
import Button from "./section/Button";
import see from "../assets/see.svg";
import { FaCheck } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const bgImage = {
    background: `url(${hero})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <Section style={bgImage} className={"px-5 lg:px-0"}>
      <Container>
        <div className="w-full max-w-[600px] pt-12 sm:pt-18 lg:pt-27 pb-15 sm:pb-25 lg:pb-36.5">
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-white">
            Innovation at Work
          </p>
          <h2 className="font-black text-[28px] sm:text-[52px] lg:text-[82px] leading-[34px] sm:leading-[64px] lg:leading-[82px] tracking-[-2.47px] [color:transparent] [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:1.5px_white] lg:[-webkit-text-stroke:2px_white] pt-4 pb-6 sm:pb-8 lg:pb-10">
            Empowering Fixing
            <span className="text-white [-webkit-text-stroke:0px] pl-2 sm:pl-3 lg:pl-4 text-[24px] sm:text-[44px] lg:text-[82px]">
              business success
            </span>
          </h2>
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
            <FaCheck className="text-home flex-shrink-0" size={16} />
            <span className="text-white text-[13px] sm:text-[14px] lg:text-[16px] font-archivo font-normal leading-normal">
              Bringing back the functionality you need Repair
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 pt-2 sm:pt-2.5 lg:pt-3.25">
            <FaCheck className="text-home flex-shrink-0" size={16} />
            <span className="text-white text-[13px] sm:text-[14px] lg:text-[16px] font-archivo font-normal leading-normal">
              Reliable repairs for a seamless experience
            </span>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5 lg:gap-8.5 pt-8 sm:pt-10 lg:pt-13">
            <Button>
              read more <ArrowRight size={16} />
            </Button>
            <img src={see} alt="" />
            <a
              href="#"
              className="text-white text-[16px] font-archivo font-normal leading-normal"
            >
              See How It Works
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
