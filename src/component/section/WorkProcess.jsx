import React from "react";
import Section from "./Section";
import Container from "./Container";
import Work1 from "../../assets/icons/work1.png";
import Work2 from "../../assets/icons/work2.png";
import Work3 from "../../assets/icons/work3.png";
import Work4 from "../../assets/icons/work4.png";

const processData = [
  {
    id: 1,
    icon: Work1,
    title: "Replacing a light",
    description:
      "Lorem ipsum dolor sit amet designersi consectetur adipiscing here",
  },
  {
    id: 2,
    icon: Work2,
    title: "Installing Repairing",
    description:
      "Lorem ipsum dolor sit amet designersi consectetur adipiscing here",
  },
  {
    id: 3,
    icon: Work3,
    title: "Replacing broken",
    description:
      "Lorem ipsum dolor sit amet designersi consectetur adipiscing here",
  },
  {
    id: 4,
    icon: Work4,
    title: "Fixing a faulty",
    description:
      "Lorem ipsum dolor sit amet designersi consectetur adipiscing here",
  },
];

const WorkProcess = () => {
  return (
    <Section className="bg-[#F3F3F3] py-20 lg:py-28">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <span className="text-[#FF5E14] text-sm font-semibold">
            Work Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 leading-tight">
            Bringing the power back to your home wired
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 relative">
          {processData.map((item, index) => (
            <div
              key={item.id}
              className="text-center relative flex flex-col items-center"
            >
              
              {index !== processData.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[65%] w-full border-t border-dashed border-gray-300 z-0"></div>
              )}

              <div className="relative z-10 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center bg-[#F3F3F3]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-black mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7 mt-3 max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default WorkProcess;