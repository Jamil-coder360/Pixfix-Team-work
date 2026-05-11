import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import SectionHeader from "../section/SectionHeader";
import ServiceCard from "./ServiceCard";
import Service_1 from "../icon/Service_1";
import Service_2 from "../icon/Service_2";
import Service_3 from "../icon/Service_3";
import services_1 from "../../assets/service-1.png"
import services_2 from "../../assets/service-2.png"
import services_3 from "../../assets/service-3.png"

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: <Service_1 />,
      heading: "Rapid Repair Garage",
      text: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
      image:services_1
    },
    {
      id: 2,
      icon: <Service_2 />,
      heading: "Auto Tech Servicese",
      text: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
      image:services_2
    },

    {
      id: 3,
      icon: <Service_3 />,
      heading: "Roadside Auto Repair",
      text: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
       image:services_3
    },
  ];
  return (
    <Section className="pb-30">
      <Container>
        <div className="">
          <SectionHeader
            className="flex flex-col text-center items-center justify-center pb-15"
            subtitle="Our services"
            title="Trust us with your repair needs Repairing with care"
          />
          <div className="grid grid-cols-3 gap-7.5">

    {serviceData.map((item) => {
  return (
    <ServiceCard
      key={item.id}
      icon={item.icon}
      heading={item.heading}
      text={item.text}
      image={item.image}
    />
  );
})}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Service;
