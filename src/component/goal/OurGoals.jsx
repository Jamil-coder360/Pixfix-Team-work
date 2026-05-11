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
    <Section className="bg-black_900 pt-30 pb-60 relative mb-30" style={bgImage}>
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
          <div className="flex gap-7.5 pt-10">
            <div className="bg-black_700 text-white grid grid-cols-[80px_1fr] gap-4 p-4">
                <div className="bg-black_900 rounded-full p-5">
                    <img src={goal_1} alt="" />
                </div>
                <div>

                <h3 className="text-[24px] leading-normal font-bold  tracking-[-0.72px]">AI Innovations</h3>
                <p className="font-archivo font-normal text-[16px] leading-normal">There are m variations of pass available</p>
                </div>
            </div>
            <div className="bg-black_700 text-white grid grid-cols-[80px_1fr] gap-4 p-4">
                <div className="bg-black_900 rounded-full p-5">
                    <img src={goal_2} alt="" />
                </div>
                <div>

                <h3 className="text-[24px] leading-normal font-bold  tracking-[-0.72px]">AI Innovations</h3>
                <p className="font-archivo font-normal text-[16px] leading-normal">There are m variations of pass available</p>
                </div>
            </div>
          </div>

          <div className="flex  items-center  gap-8.5 pt-13">
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
         <div className="absolute left-1/2 -bottom-60 -translate-x-1/2 w-full ">
    <Cta />
  </div>
      </Container>
    </Section>
  );
};

export default OurGoals;
