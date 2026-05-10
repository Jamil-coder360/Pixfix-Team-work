import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import about_1 from "../assets/about-1.png";
import about_2 from "../assets/about-2.png";
import about_3 from "../assets/about-3.png";
import about_4 from "../assets/about-4.png";
import about_5 from "../assets/about-5.png";
import Button from "./section/Button";
import { ArrowRight } from "lucide-react";
const About = () => {
  return (
    <Section className="py-30">
      <Container>
        <div className="grid grid-cols-[584px_1fr] gap-[76px] items-center">
          {/* left side image part */}
          <div className="grid grid-cols-[auto_1fr] gap-6 max-w-[584px] overflow-hidden ">
            <div className="grid grid-cols-1 gap-5.5 w-[236px] h-auto">
              <img src={about_1} alt="" className="w-full h-full" />
              <img src={about_2} alt="" className="w-full h-full" />
            </div>
            <div className=" h-full w-[336px]">
              <img src={about_3} alt="" className="h-full w-full" />
            </div>
          </div>
          {/* right side about part  */}
          <div>
            <p className="text-home font-normal text-[16px]">ABOUT US</p>
            <h2 className="font-semibold text-[48px] leading-[58px]  text-black_900 tracking-[-1.44px] pt-2.5 pb-5">
              {" "}
              Repairing your probl restoring your peace of mind
            </h2>
            <p className="text-[16px] text-black_800 font-archivo font-normal leading-[28px]">
              Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id
              amet molestie the viverra diam velit elit viverra. Malesuada
              blandit in habitasse malesuada
            </p>
            <div className="flex items-center gap-7.5 pt-7.5 pb-10">
              <div className="max-w-[280px] relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-home after:left-0 after:top-0 pl-5 flex flex-col items-start gap-2.5">
                <div>
                  <img src={about_4} alt="" />
                </div>
                <h3 className=" font-bol text-black_900 text-[24px] leading-normal tracking-[-0.72px]">
                  Repair Genius Fix Master
                </h3>
                <p className="font-bol text-black_800 text-[16px] leading-normal font-archivo">
                  Lorem ipsum dolit amet consectetur. Proin viverra maec
                  donec{" "}
                </p>
              </div>
              <div className="max-w-[280px] relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-home after:left-0 after:top-0 pl-5 flex flex-col items-start gap-2.5">
                <div>
                  <img src={about_5} alt="" />
                </div>
                <h3 className=" font-bol text-black_900 text-[24px] leading-normal tracking-[-0.72px]">
                  Restore Pro Repair Techs
                </h3>
                <p className="font-bol text-black_800 text-[16px] leading-normal font-archivo">
                  Lorem ipsum dolit amet consectetur. Proin viverra maec
                  donec{" "}
                </p>
              </div>
            </div>
            <Button>
              read more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
