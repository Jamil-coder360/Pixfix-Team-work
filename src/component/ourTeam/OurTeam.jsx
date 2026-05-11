import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import SectionHeader from "../section/SectionHeader";
import OurTeamCard from "./OurTeamCard";

import team_1 from "../../assets/team-1.png";
import team_2 from "../../assets/team-2.png";
// import team_3 from "../../assets/team-3.png";
// import team_4 from "../../assets/team-4.png";
const OurTeam = () => {
  // teamData.js
  const teamData = [
    {
      id: 1,
      image: team_1,
      name: "Cameron Williamson",
      title: "Project Manager",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
    {
      id: 2,
      image: team_2,
      name: "Brooklyn Simmons",
      title: "UI/UX Designer",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
    {
      id: 3,
      image: team_1,
      name: "Ronald Richards",
      title: "Restoration Expert",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
    //   {
    //     id: 4,
    //     image: team_4,
    //     name: "Savannah Nguyen",
    //     title: "Marketing Lead",
    //     socialLinks: {
    //       facebook: "#",
    //       instagram: "#",
    //       linkedin: "#",
    //       pinterest: "#",
    //     },
    //   },
  ];
  return (
    <Section className={"py-30"}>
      <Container>
        <div>
          <div className="flex items-end justify-between gap-15 pb-15">
            <SectionHeader
              className="w-full"
              title="Repair with precision and expertise best"
              subtitle="OUR TEAM MEMBER"
            />

            <p className="font-archivo font-normal text-[16px] leading-normal text-black_800">
              Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id
              amet molestie.they diam velit elit viverra. Malesuada blandit in
              habitasse malesuada{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-7.5">
            {teamData.map((item) => (
              <OurTeamCard
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
