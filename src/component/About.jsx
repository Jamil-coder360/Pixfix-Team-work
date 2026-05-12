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
    <Section className="py-15 md:py-22 lg:py-30 px-5 lg:px-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[584px_1fr] gap-6 lg:gap-[76px] items-center ">
          {/* left side image part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr] gap-4 md:gap-6 max-w-full lg:max-w-[584px] overflow-hidden ">
            <div className="grid grid-cols-1 gap-4 md:gap-5.5 w-full lg:w-[236px]">
              <div>
                <img src={about_1} alt="" className="w-full h-full" />
              </div>
              <div>
                <img src={about_2} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="h-full w-full lg:w-[336px]">
              <img src={about_3} alt="" className="h-full w-full" />
            </div>
          </div>
          {/* right side about part  */}
          <div>
            <p className="text-home font-normal text-[16px]">ABOUT US</p>
            <h2 className="font-semibold text-[28px] md:text-[36px] lg:text-[48px] leading-[35px] md:leading-[44px] lg:leading-[58px] text-black_900 tracking-[-1.44px] pt-2.5 pb-5">
              {" "}
              Repairing your probl restoring your peace of mind
            </h2>
            <p className="text-[16px] text-black_800 font-archivo font-normal leading-[28px]">
              Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id
              amet molestie the viverra diam velit elit viverra. Malesuada
              blandit in habitasse malesuada
            </p>
            <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-6 lg:gap-7.5 pt-6 md:pt-7.5 pb-8 md:pb-10">
              <div className="w-full lg:max-w-[280px] relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-home after:left-0 after:top-0 pl-5 flex flex-col items-start gap-2.5">
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
              <div className="w-full lg:max-w-[280px] relative after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-home after:left-0 after:top-0 pl-5 flex flex-col items-start gap-2.5">
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
