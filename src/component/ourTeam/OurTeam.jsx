import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import SectionHeader from "../section/SectionHeader";
import OurTeamCard from "./OurTeamCard";

import team_1 from "../../assets/team-1.png";
import team_2 from "../../assets/team-2.png";

const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      image: team_1,
      name: "Cameron Williamson",
      title: "Project Manager",
    },
    {
      id: 2,
      image: team_2,
      name: "Brooklyn Simmons",
      title: "UI/UX Designer",
    },
    {
      id: 3,
      image: team_1,
      name: "Ronald Richards",
      title: "Restoration Expert",
    },
  ];

  return (
    <Section className="py-12 md:py-20 lg:py-30 px-4 sm:px-6 lg:px-0">
      <Container>
        <div>
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-15 pb-8 lg:pb-15">
            <SectionHeader
              className="w-full lg:max-w-[55%]"
              title="Repair with precision and expertise best"
              subtitle="OUR TEAM MEMBER"
            />

            <p className="font-archivo font-normal text-sm sm:text-base leading-relaxed text-black_800 w-full lg:max-w-[40%]">
              Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id
              amet molestie. They diam velit elit viverra. Malesuada blandit in
              habitasse malesuada.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5">
            {teamData.map((item) => (
              <OurTeamCard
                key={item.id}
                image={item.image}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurTeam;