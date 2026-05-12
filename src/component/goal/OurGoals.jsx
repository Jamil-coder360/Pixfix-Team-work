import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import SectionHeader from "../section/SectionHeader";
import goals from "../../assets/goals.png";
import Button from "../section/Button";
import { ArrowRight, Phone } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import goal_1 from "../../assets/goal-1.png"
import goal_2 from "../../assets/goal-2.png"
import Cta from "./Cta";
const OurGoals = () => {
  const bgImage = {
    background: `url(${goals})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <Section className="bg-black_900 pt-10 lg:pt-30 pb-0 lg:pb-60 lg:relative lg:mb-30 px-5 lg:px-0" style={bgImage}>
      <Container>
        <div className=" max-w-[630px]">
          <SectionHeader
            dark={false}
            title="Restoring functionality and  one repair at a time"
            subtitle="Our Goals"
          />

          <p className=" max-w-[630px] font-archivo font-normal text-[16px] leading-normal text-white">
            Car Repair Service is a vital industry that ensures the maintenance
            and repair of vehicles. With a team of skilled technicians, these
            services provide solutions for mechanical and electrical issues,
            body repairs, and routine maintenance
          </p>
          <div className="flex flex-col gap-3 md:gap-5 lg:gap-7.5 pt-6 md:pt-8 lg:pt-10">
            <div className="bg-black_700 text-white grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-3 md:gap-4 p-3 md:p-4">
                <div className="bg-black_900 rounded-full p-3 md:p-5">
                    <img src={goal_1} alt="" />
                </div>
                <div>

                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] leading-normal font-bold tracking-[-0.72px]">AI Innovations</h3>
                <p className="font-archivo font-normal text-[13px] md:text-[15px] lg:text-[16px] leading-normal">There are m variations of pass available</p>
                </div>
            </div>
            <div className="bg-black_700 text-white grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-3 md:gap-4 p-3 md:p-4">
                <div className="bg-black_900 rounded-full p-3 md:p-5">
                    <img src={goal_2} alt="" />
                </div>
                <div>

                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] leading-normal font-bold tracking-[-0.72px]">AI Innovations</h3>
                <p className="font-archivo font-normal text-[13px] md:text-[15px] lg:text-[16px] leading-normal">There are m variations of pass available</p>
                </div>
            </div>
          </div>

          <div className="flex  flex-wrap  items-start lg:items-center  gap-8.5 pt-13">
            <Button>
              read more <ArrowRight size={16} />
            </Button>

            <span className="bg-white p-5 rounded-full">
              <FaPhoneAlt className="text-home " size={20} />
            </span>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-white text-[16px] font-archivo font-normal leading-normal"
              >
                Help Desk 24/7
              </a>
              <a
                href="#"
                className="text-white text-[16px] font-archivo font-normal leading-normal"
              >
                000 2324 39493
              </a>
            </div>
          </div>
        </div>
         <div className="lg:absolute lg:left-1/2 lg:-bottom-60 lg:-translate-x-1/2 w-full ">
    <Cta />
  </div>
      </Container>
    </Section>
  );
};

export default OurGoals;
