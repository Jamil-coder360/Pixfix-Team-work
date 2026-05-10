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
    <Section style={bgImage}>
      <Container>
        <div className="max-w-[600px] pt-27 pb-36.5">
          <p className="text-[16px] font-normal text-white">
            Innovation at Work
          </p>
          <h2 className="font-black text-[82px] tracking-[-2.47px] leading-[82px] [color:transparent] [-webkit-text-stroke:2px_white] pt-4 pb-10 ">
            Empowering Fixing
            <span className="text-white [-webkit-text-stroke:0px] pl-4">
              business success
            </span>
          </h2>
          <div className="flex  items-center gap-3">
            <FaCheck className="text-home" size={20} />
            <span className="text-white text-[16px] font-archivo font-normal leading-normal">
              Bringing back the functionality you need Repair
            </span>
          </div>
          <div className="flex  items-center gap-3 pt-3.25">
            <FaCheck className="text-home" size={20} />
            <span className="text-white text-[16px] font-archivo font-normal leading-normal">
              Reliable repairs for a seamless experience
            </span>
          </div>
          <div className="flex  items-center  gap-8.5 pt-13">
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
