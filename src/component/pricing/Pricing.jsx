import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import SectionHeader from "../section/SectionHeader";
import PricingCard from "./PricingCard";
import Pricing_1 from "../icon/Pricing_1";
import Pricing_2 from "../icon/Pricing_2";
import Pricing_3 from "../icon/Pricing_3";

const pricingData = [
  {
    id: 1,
    icon: <Pricing_1 />,
    title: "Starter Plan",
    price: "$19",
    period: "/mo",
    description:
      "Repair is a specialized field that focuses fixing and restoring objects or systems",
    features: [
      "Repairing your problems",
      "Quality repair services you can count on",
      "Repairing with care, exceeding",
      "Trust us with your repair needs",
    ],
  },
  {
    id: 2,
    icon: <Pricing_2 />,
    title: "Standard Plan",
    price: "$49",
    period: "/mo",
    description:
      "A comprehensive repair solution built for growing needs with priority support",
    features: [
      "All Starter Plan features",
      "Priority repair scheduling",
      "Dedicated support specialist",
      "Extended warranty on repairs",
    ],
  },
  {
    id: 3,
    icon: <Pricing_3 />,
    title: "Premium Plan",
    price: "$99",
    period: "/mo",
    description:
      "Full-service repair coverage designed for professionals who demand the best",
    features: [
      "All Standard Plan features",
      "24/7 emergency repair service",
      "On-site repair visits",
      "Lifetime repair guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <Section className="py-30">
      <Container>
        <div>
          <SectionHeader
            className="flex flex-col items-center text-center"
            title="Restoring functionality one repair at a time"
            subtitle="Pricing Plane"
          />
        <div className="grid grid-cols-3 gap-7.5 mt-10">
          {pricingData.map((item) => (
            <PricingCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              price={item.price}
              period={item.period}
              description={item.description}
              features={item.features}
            />
          ))}
        </div>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;