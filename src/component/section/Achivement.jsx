import React from "react";
import Section from "./Section";
import Container from "./Container";

import Team from "../../assets/icons/team.png";
import Award from "../../assets/icons/award.png";
import ClientReview from "../../assets/icons/client_review.png";
import Complete_Project from "../../assets/icons/complete_project.png";

const Achivement = () => {
  return (
    <Section className="py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          
          <Achivemnetcard
            number="200+"
            title="Team Members"
            img={Team}
          />

          <Achivemnetcard
            number="20+"
            title="Awards Won"
            img={Award}
          />

          <Achivemnetcard
            number="10k+"
            title="Complete Projects"
            img={Complete_Project}
          />

          <Achivemnetcard
            number="900+"
            title="Client Reviews"
            img={ClientReview}
          />

        </div>
      </Container>
    </Section>
  );
};

export default Achivement;

const Achivemnetcard = ({ number, title, img }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      
      <h3 className="font-titillium text-3xl sm:text-4xl lg:text-5xl font-semibold lining-nums">
        {number}
      </h3>

      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>

      <p className="font-archivo text-sm sm:text-base pt-2">
        {title}
      </p>

    </div>
  );
};