import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import Skill from "../../assets/skills.jpg";

const skillsData = [
  { id: 1, title: "Power outlet", percentage: 90 },
  { id: 2, title: "Light switch", percentage: 80 },
  { id: 3, title: "Faulty circuit", percentage: 90 },
  { id: 4, title: "Blown fuse", percentage: 85 },
];

const Skills = ({ image }) => {
  return (
    <Section className="bg-[#F2F2F2] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-[#FF5E14] text-sm font-semibold uppercase">
              Our Skills
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight max-w-[520px]">
              Experience the differ enceour reliable AC repair
            </h2>

            <div className="mt-10 space-y-8">
              {skillsData.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-black font-semibold text-base">
                      {skill.title}
                    </h4>
                    <span className="text-black font-bold text-base">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-300 overflow-hidden">
                    <div
                      className="h-full bg-[#FF5E14]"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-[300px] md:h-[450px] lg:h-[600px] xl:h-[750px] bg-gray-300 overflow-hidden">
              <img
                src={Skill}
                alt="Skills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Skills;